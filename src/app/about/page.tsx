import Image from "next/image";
import Link from "next/link";
import React from "react";
import TextElement from "@/components/common/TextElement";

export default function About() {
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

      <section className="bg-white p-6 mx-4 rounded-lg shadow-md mt-8 text-gray-700 text-base leading-relaxed">
        <TextElement variant="p">
          Merhaba, ben Zümer Özçelik. Zumer’s Cake markasının kurucusu ve pasta
          sanatçısıyım. Tatlıları sadece lezzetli bir ikram olarak değil, aynı
          zamanda duyguları ve anıları yansıtan estetik birer sanat eseri olarak
          görüyorum. Mutfak, hayal gücümün ve emeğimin buluştuğu özel bir alan.
        </TextElement>
        <TextElement
          variant="h3"
          className="text-2xl font-bold text-gray-800 mt-4"
        >
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
        <TextElement
          variant="h3"
          className="text-2xl font-bold text-gray-800 mt-4"
        >
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
        <TextElement
          variant="h3"
          className="text-2xl font-bold text-gray-800 mt-4"
        >
          Hayalinizdeki Tatlılar İçin İletişime Geçin
        </TextElement>
        <TextElement variant="p">
          Özel günleriniz için özgün ve zarif tatlı tasarımları hakkında detaylı
          bilgi almak veya teklif talep etmek için lütfen benimle iletişime
          geçin. Size özel, yüksek kalite ve estetikle hazırlanmış çözümler
          sunmaktan memnuniyet duyarım.
        </TextElement>
      </section>

      {/* Awards & Recognition Section */}
      <section className="mx-4 mt-8 mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Awards & Recognition
        </h3>
        <div className="space-y-3">
          {/* Award Item 1 */}
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
            <span className="text-3xl mr-4">🏆</span> {/* Trophy emoji */}
            <div className="flex flex-col flex-grow">
              <p className="font-semibold text-lg text-gray-800">
                Best Pastry Chef of the Year
              </p>
              <p className="text-sm text-gray-600">
                National Culinary Awards, 2022
              </p>
            </div>
            <span className="text-xl text-gray-400">›</span>
          </div>

          {/* Award Item 2 */}
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
            <span className="text-3xl mr-4">🏅</span> {/* Medal emoji */}
            <div className="flex flex-col flex-grow">
              <p className="font-semibold text-lg text-gray-800">
                Gold Medal, Sugar Artistry
              </p>
              <p className="text-sm text-gray-600">
                International Cake & Bake Show, 2021
              </p>
            </div>
            <span className="text-xl text-gray-400">›</span>
          </div>

          {/* Award Item 3 */}
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
            <span className="text-3xl mr-4">👑</span> {/* Crown emoji */}
            <div className="flex flex-col flex-grow">
              <p className="font-semibold text-lg text-gray-800">
                Grand Champion
              </p>
              <p className="text-sm text-gray-600">
                National Baking Championship, 2020
              </p>
            </div>
            <span className="text-xl text-gray-400">›</span>
          </div>
        </div>
      </section>
    </main>
  );
}
