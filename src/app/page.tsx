import CustomLink from "@/components/common/CustomLink";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import TextElement from "@/components/common/TextElement";

export default function Home() {
  return (
    <div className="min-h-screen pb-12 md:pb-0">
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-dancing">
            Tatlı Rüyalarınızı Yenebilir Sanata Dönüştürüyoruz
          </h1>
          <TextElement variant="p" className="mx-4 md:px-20 lg:px-64">
            Burada her pasta bir hayalin yansıması, her dilim ise küçük bir
            mutluluk anı. Siz de galerimize göz atarak ilham alabilir, özel
            günlerinize özel tasarlanmış pastanızı birlikte hayata
            geçirebiliriz.
          </TextElement>

          <div className="flex justify-center gap-4 pt-4">
            <CustomLink href="/gallery" variant="button">
              Galeri
            </CustomLink>
            <CustomLink href="/order" variant="button">
              Sipariş Oluştur
            </CustomLink>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4">
        <div className="flex flex-col flex-start p-8 w-full">
          <TextElement variant="h2" className="text-start">
            Hikayemiz
          </TextElement>
          <TextElement variant="p">
            Zümer&apos;s Cake olarak, lezzetli pastalar aracılığıyla neşe dolu
            anlar yaratmaya, insanların hayatına tatlı bir dokunuş katmaya
            çalışıyorum. Her tarifimde en taze malzemeleri kullanıyor, her
            pastayı sevgiyle hazırlıyorum. Benim için bu sadece bir iş değil;
            hayalleri şekillendirmek, anılara lezzet katmak.
          </TextElement>
          <Link
            href="/about"
            className="text-sm md:text-lg mb-8 md:mb-2 font-regular text-rose-500 flex items-center gap-2 hover:text-rose-800 transition-colors"
          >
            Daha Fazla Bilgi Edinin <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
