import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import TextElement from "@/components/common/TextElement";


interface ContactItem {
  id: string;
  title: string; // New field for the title like "Call us"
  description: string; // New field for the actual contact detail
  href: string;
  icon: React.ElementType;
  target?: string;
  rel?: string;
}

const contactDetails: ContactItem[] = [
  {
    id: "phone",
    title: "Telefon",
    description: "+90 532 673 82 92",
    href: "tel:+905326738292",
    icon: FaPhone,
  },
  {
    id: "Email",
    title: "E-posta",
    description: "zumersener@gmail.com",
    href: "mailto:zumersener@gmail.com",
    icon: FaEnvelope,
  },
  {
    id: "address",
    title: "Adres",
    description: "İzmir, Türkiye, Karabağlar-Basınsitesi, 35150",
    href: "https://maps.google.com/?q=İzmir, Türkiye, Karabağlar-Basınsitesi, 35150",
    icon: FaMapMarkerAlt,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "@zumers.cake",
    href: "https://www.instagram.com/zumers.cake/",
    icon: FaInstagram,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "+90 532 673 82 92",
    href: "https://wa.me/905326738292",
    icon: FaWhatsapp,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export default function Contact() {
  return (
    <main className="md:max-w-3xl flex flex-col mx-auto px-4 py-8 pb-20">
      <TextElement variant="h1" >
        Bizimle iletişime geçin
      </TextElement>
      <TextElement variant="p">
        Her türlü soru, öneri ya da özel talebiniz için bizimle iletişime
        geçebilirsiniz. Size en kısa sürede geri dönüş yapacağız. İlginiz ve
        güveniniz için teşekkür ederiz.
      </TextElement>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-8">
        {contactDetails.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target={item.target}
            rel={item.rel}
            className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
          >
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-rose-100 text-rose-500 mr-4">
              <item.icon className="h-6 w-6" />
            </div>
            <div>
              <TextElement
                variant="h3"
                className="text-lg font-semibold text-gray-800"
              >
                {item.title}
              </TextElement>
              <p className="text-rose-500 text-sm">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
