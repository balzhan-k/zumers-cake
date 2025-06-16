import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

console.log("RESEND_API_KEY at runtime:", process.env.RESEND_API_KEY);
  
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const emailHtml = `
      <h2>Yeni Pasta Siparişi</h2>
      <p><strong>Özel Gün:</strong> ${data.occasion} - ${data.otherOccasionDetails}</p>
      <p><strong>Kişi Sayısı:</strong> ${data.servings} - ${data.otherServingsDetails}</p>
      <p><strong>Pasta Türü:</strong> ${data.cakeType} - ${data.otherCakeTypeDetails}</p>
      <p><strong>Pasta İçeriği, Kat Arası Malzemeler:</strong> ${data.filling} - ${data.otherFillingDetails}</p>
      <p><strong>Renkler:</strong> ${data.colors} - ${data.otherColorsDetails}</p>
      <p><strong>Alerji durumu:</strong> ${data.allergies}</p>
      <p><strong>Pasta üzerine yazılacak not:</strong> ${data.cakeNote}</p>
      <p><strong>Özel İstekler:</strong> ${data.specialRequests}</p>
      <p><strong>İsim Soyisim:</strong> ${data.nameSurname}</p>
      <p><strong>Telefon:</strong> ${data.phone}</p>
      <p><strong>Teslimat Tarihi ve Saati:</strong> ${data.deliveryDate}</p>
    `;

    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: "Yeni Pasta Siparişi",
      html: emailHtml,
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
