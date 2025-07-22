"use client";

import Image from "next/image";
import React, { useState } from "react";
import TextElement from "@/components/common/TextElement";
import ImageModal from "@/components/gallery/ImageModal";
import AwardItem from "@/components/common/AwardItem";

const awardImages = [
  "/certificates/cer1.jpeg",
  "/certificates/cer2.jpeg",
  "/certificates/cer3.jpg",
  "/certificates/cer4.jpeg",
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className="container mx-auto px-4 py-8 pb-20">
      <section className="flex flex-col items-center mt-8 px-4">
        <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg bg-red-400">
          <Image
            src="/images/Zumer.jpeg"
            alt="Chef Zumer Sener"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <TextElement
          variant="h2"
          className="text-2xl font-bold text-gray-800 mt-4"
        >
          Şef Zümer Şener
        </TextElement>
        <p className="text-base text-rose-600 font-medium">Ödüllü Pasta Şefi</p>
      </section>

      <section className="bg-white px-6 md:mx-4 rounded-lg shadow-md mt-8 text-gray-700 text-base leading-relaxed">
      <TextElement variant="p" className=" font-bold pb-0 pt-5">
      Lezzeti Sanata Dönüştüren Pasta Sanatçısı
        </TextElement>
        <TextElement variant="p">
          Merhaba, ben Zümer Şener. Zumer’s Cake markasının kurucusu ve pasta
          sanatçısıyım. Tatlıları sadece lezzetli bir ikram olarak değil, aynı
          zamanda duyguları ve anıları yansıtan estetik birer sanat eseri olarak
          görüyorum. Mutfak, hayal gücümün ve emeğimin buluştuğu özel bir alan.
        </TextElement>
        <TextElement variant="p" className=" font-bold pb-0">
          Ödüllerle Taçlanan Emek
        </TextElement>
        <TextElement variant="p">
          Pasta sanatına olan bağlılığım yıllar içinde eğitim, deneyim ve
          sürekli gelişimle şekillendi. 2017’den bu yana hijyen ve gıda
          güvenliği konularında kapsamlı eğitimler aldım. Ürünlerimde kalite ve
          güvenliği garanti altına almak her zaman önceliğim oldu.
          <br />
          2024 yılında Ankara Çankaya Özel Gastronomi Meslek Kursu’nda 115
          saatlik yoğun bir pastacılık programını başarıyla tamamladım. Bu
          eğitim sayesinde teknik becerilerimi ileri seviyeye taşıdım ve çağdaş
          pasta tasarımı trendlerini yakından takip eder hale geldim.
          <br />
          Tüm bu birikimin ve adanmışlığın sonucu olarak, Mengen Ulusal Aşçılık
          Yarışması’nda Altın Sertifika ile ödüllendirilmek benim için büyük bir
          gurur kaynağıydı. Bu ödül sadece bir başarı belgesi değil; aynı
          zamanda işime duyduğum sevginin, detaylara verdiğim önemin ve her
          ürüne kattığım özenin bir yansıması.
        </TextElement>
        <TextElement variant="p" className=" font-bold pb-0">
          Zumer’s Cake: Kişiye Özel Zarafet
        </TextElement>
        <TextElement variant="p">
          Zumer’s Cake’i kurarken hedefim, sadece tatlı üretmek değil;
          insanların hayatındaki en özel anlara yakışan, anlam taşıyan
          tasarımlar hazırlamaktı. Düğün, nişan, doğum günü ya da kutlama fark
          etmeksizin her siparişi, sizin hayalinizi ve tarzınızı yansıtan özel
          bir proje gibi ele alıyorum. Her ürünüm tamamen el işçiliğiyle, tek
          tek ve özenle hazırlanıyor. Çünkü biliyorum ki detaylar önemlidir — ve
          her küçük detay, büyük anılar yaratır.
        </TextElement>
        <TextElement variant="p" className=" font-bold pb-0">
          Hayalinizdeki Tatlılar İçin İletişime Geçin
        </TextElement>
        <TextElement variant="p"  className="pb-5">
          Özel günleriniz için özgün ve zarif tatlı tasarımları hakkında detaylı
          bilgi almak veya teklif talep etmek için lütfen benimle iletişime
          geçin. Size özel, yüksek kalite ve estetikle hazırlanmış çözümler
          sunmaktan memnuniyet duyarım.
        </TextElement>
      </section>

      <section className="md:mx-4 mt-8 mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Eğitim & Ödüller
        </h3>
        <div className="grid grid-cols-1 space-y-3 lg:space-y-0 lg:grid lg:grid-cols-4 gap-2">
          <AwardItem
            emoji="📜"
            title="İşletmelerde Hijyen Programı"
            subtitle="T.C. Milli Eğitim Bakanlığı"
            onClick={() => openModal(awardImages[0])}
          />
          <AwardItem
            emoji="📜"
            title="Gıda Güvenliği Eğitimi"
            subtitle="Unilever Food Solutions"
            onClick={() => openModal(awardImages[1])}
          />
          <AwardItem
            emoji="🏅"
            title="The Best of Sugar Art İzmir"
            subtitle="Türkiye Pastacılar Derneği"
            onClick={() => openModal(awardImages[2])}
          />
          <AwardItem
            emoji="🏅"
            title="Mengen Ulusal Aşçılık Yarışması"
            subtitle="Mengen Aşçılar Federasyonu"
            onClick={() => openModal(awardImages[3])}
          />
        </div>
      </section>
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          onClose={closeModal}
          alt="Award Certificate"
          onNext={() => {}}
          onPrev={() => {}}
          hasNext={false}
          hasPrev={false}
        />
      )}
    </main>
  );
}
