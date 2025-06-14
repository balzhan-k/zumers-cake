import Link from "next/link";
import Image from "next/image";

interface LogoLinkProps {
  className?: string;
}

export default function LogoLink({ className = "" }: LogoLinkProps) {
  return (
    <Link
      href="/"
      className={`text-xl font-bold text-foreground flex items-center ${className}`}
    >
      <Image
        src="/images/logo/logo.jpg"
        alt="Zumers Cake Logo"
        width={40}
        height={40}
        className="mr-2"
      />
      Zumer's Cake
    </Link>
  );
}
