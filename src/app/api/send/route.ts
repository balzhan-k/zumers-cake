import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY!);

// Helper function to generate plain text version
const generatePlainText = (data: any) => {
  return `
YENI PASTA SİPARİŞİ

SİPARİŞ DETAYLARI:
==================
Özel Gün: ${data.occasion}${data.otherOccasionDetails ? ` - ${data.otherOccasionDetails}` : ''}
Kişi Sayısı: ${data.servings}${data.otherServingsDetails ? ` - ${data.otherServingsDetails}` : ''}
Pasta Türü: ${data.cakeType}${data.otherCakeTypeDetails ? ` - ${data.otherCakeTypeDetails}` : ''}
İçerik & Kat Arası: ${data.filling}${data.otherFillingDetails ? ` - ${data.otherFillingDetails}` : ''}
Renkler: ${data.colors}${data.otherColorsDetails ? ` - ${data.otherColorsDetails}` : ''}
${data.allergies ? `Alerji Durumu: ${data.allergies}` : ''}
${data.cakeNote ? `Pasta Üzerine Not: "${data.cakeNote}"` : ''}
${data.specialRequests ? `Özel İstekler: ${data.specialRequests}` : ''}

MÜŞTERİ BİLGİLERİ:
==================
İsim Soyisim: ${data.nameSurname}
Telefon: ${data.phone}
Teslimat Tarihi: ${data.deliveryDate}

Bu sipariş otomatik olarak oluşturulmuştur.
  `.trim();
};

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data) {
      return NextResponse.json(
        { success: false, error: "No data provided" },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: "Yeni Pasta Siparişi",
      react: EmailTemplate({ data }),
      text: generatePlainText(data), // Plain text version for better deliverability
    });

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}