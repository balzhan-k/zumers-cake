import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-md md:text-xl font-bold mb-6 text-center">
        İletişim
      </h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-foreground/80 mb-6"></p>
        <div className="flex flex-row gap-4 justify-center ">
          <a
            href="https://www.instagram.com/zumers.cake/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="text-gray-600 hover:text-rose-500 transition-colors"
              size={30}
            />
          </a>
          <a
            href="https://wa.me/905326738292"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              className="text-gray-600 hover:text-rose-500 transition-colors"
              size={30}
            />
          </a>
        </div>
      </div>
    </main>
  );
}
