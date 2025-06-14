import Link from "next/link";
import Image from "next/image";

interface LogoLinkProps {
  className?: string;
}

export default function LogoLink({ className = "" }: LogoLinkProps) {
  return (
    <Link
      href="/"
      className={`font-dancing text-2xl font-bold text-foreground flex items-center text-slate-700 ${className}`}
    >
      <Image
        src="/logo/logo.jpg"
        alt="Zumer's Cake Logo"
        width={40}
        height={40}
        className="mr-2 "
      />
      Zumer&apos;s Cake
    </Link>
  );
}
