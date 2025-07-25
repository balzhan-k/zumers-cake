import Link from "next/link";
import Image from "next/image";

interface LogoLinkProps {
  className?: string;
  onClick?: () => void;
}

export default function LogoLink({ className = "", onClick }: LogoLinkProps) {
  return (
    <Link
      href="/"
      className={`font-dancing text-2xl font-bold text-foreground flex items-center text-slate-700 ${className}`}
      onClick={onClick}
    >
      <Image
        src="/logo/logo.jpeg"
        alt="Zumer's Cake Logo"
        width={40}
        height={40}
        className="mr-2 "
      />
      Zumer&apos;s Cake
    </Link>
  );
}
