import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "@/lib/email-template";
import { orderFormSchema } from "@/lib/orderSchema";
import { ZodError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

interface OrderFormData {
  occasion: string;
  otherOccasionDetails: string;
  servings: string;
  otherServingsDetails: string;
  cakeType: string;
  otherCakeTypeDetails: string;
  filling: string[];
  otherFillingDetails: string;
  colors: string;
  otherColorsDetails: string;
  allergies: string;
  cakeNote: string;
  specialRequests: string;
  photo: string | null;
  nameSurname: string;
  phone: string;
  deliveryDateAndTime: Date;
}

const occasionTranslations: { [key: string]: string } = {
  Birthday: "Doğum Günü",
  Wedding: "Düğün",
  Anniversary: "Yıldönümü",
  Other: "Diğer",
};

const servingsTranslations: { [key: string]: string } = {
  "6": "6 Kişilik",
  "8": "8 Kişilik",
  "10": "10 Kişilik",
  "15": "15 Kişilik",
  Other: "Diğer",
};

const cakeTypeTranslations: { [key: string]: string } = {
  Creamy: "Kremalı",
  Chocolate: "Çikolatalı",
  Fruit: "Meyveli",
  "Naked Cake": "Naked Cake",
  "Fondant Cake": "Şeker hamurlu",
  Cupcake: "Cupcake",
  Other: "Diğer",
};

const fillingTranslations: { [key: string]: string } = {
  Strawberry: "Çilek",
  Muz: "Muz",
  Raspberry: "Frambuaz",
  Pistachio: "Fıstık",
  Hazelnut: "Fındık",
  Oreo: "Oreo",
  Chocolate: "Kakaolu kek",
  Vanilla: "Vanilyalı kek",
  Other: "Diğer",
};

const colorsTranslations: { [key: string]: string } = {
  None: "Yok",
  Other: "Diğer",
};

const allergiesTranslations: { [key: string]: string } = {
  None: "Yok",
  "Egg Allergy": "Yumurta alerjisi",
  "Lactose Intolerance": "Laktoz intoleransı",
};

const translateValue = (
  value: string | null,
  map: { [key: string]: string }
): string | null => {
  if (value === null) return null;
  return map[value] || value;
};

const formatDateTimeForDisplay = (date: Date | null) => {
  if (!date) return "";
  try {
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return String(date);
  }
};

const generatePlainText = (data: OrderFormData) => {
  const formattedFilling = data.filling
    .map((item) => translateValue(item, fillingTranslations))
    .join(", ");
  const formattedDateTime = formatDateTimeForDisplay(data.deliveryDateAndTime);

  return `
YENI PASTA SİPARİŞİ

SİPARİŞ DETAYLARI:
==================
Özel Gün: ${translateValue(data.occasion, occasionTranslations)}${data.otherOccasionDetails ? ` - ${data.otherOccasionDetails}` : ""}
Kişi Sayısı: ${translateValue(data.servings, servingsTranslations)}${data.otherServingsDetails ? ` - ${data.otherServingsDetails}` : ""}
Pasta Türü: ${translateValue(data.cakeType, cakeTypeTranslations)}${data.otherCakeTypeDetails ? ` - ${data.otherCakeTypeDetails}` : ""}
İçerik & Kat Arası: ${formattedFilling}${data.otherFillingDetails ? ` - ${data.otherFillingDetails}` : ""}
Renkler: ${translateValue(data.colors, colorsTranslations)}${data.otherColorsDetails ? ` - ${data.otherColorsDetails}` : ""}
${data.allergies ? `Alerji Durumu: ${translateValue(data.allergies, allergiesTranslations)}` : ""}
${data.cakeNote ? `Pasta Üzerine Not: "${data.cakeNote}"` : ""}
${data.specialRequests ? `Özel İstekler: ${data.specialRequests}` : ""}
${data.photo ? `Fotoğraf: ${data.photo}` : ""}
MÜŞTERİ BİLGİLERİ:
==================
İsim Soyisim: ${data.nameSurname}
Telefon: ${data.phone}
Teslimat Tarihi: ${formattedDateTime}

Bu sipariş otomatik olarak oluşturulmuştur.
  `.trim();
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const mutableBody = { ...body };

    if (typeof mutableBody.deliveryDateAndTime === "string") {
      mutableBody.deliveryDateAndTime = new Date(
        mutableBody.deliveryDateAndTime
      );
    }

    const validatedData = orderFormSchema.parse(mutableBody);

    const translatedDataForEmail: OrderFormData = {
      ...validatedData,
      occasion:
        translateValue(validatedData.occasion, occasionTranslations) ||
        validatedData.occasion,
      servings:
        translateValue(validatedData.servings, servingsTranslations) ||
        validatedData.servings,
      cakeType:
        translateValue(validatedData.cakeType, cakeTypeTranslations) ||
        validatedData.cakeType,
      filling: validatedData.filling.map(
        (item) => translateValue(item, fillingTranslations) || item
      ) as string[],
      colors:
        translateValue(validatedData.colors, colorsTranslations) ||
        validatedData.colors,
      allergies:
        translateValue(validatedData.allergies, allergiesTranslations) ||
        validatedData.allergies,
      deliveryDateAndTime: validatedData.deliveryDateAndTime,
    };

    const emailTemplateData = {
      ...translatedDataForEmail,
      filling: translatedDataForEmail.filling.join(", "),
      deliveryDate: formatDateTimeForDisplay(
        translatedDataForEmail.deliveryDateAndTime
      ),
    };

    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: "Yeni Pasta Siparişi",
      react: EmailTemplate({
        data: emailTemplateData,
      }),
      text: generatePlainText(validatedData),
    });

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      if ("issues" in error && Array.isArray((error as ZodError).issues)) {
        console.error("Zod validation issues:", (error as ZodError).issues);
      }
    }
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
