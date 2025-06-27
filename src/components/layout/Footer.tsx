import LogoLink from "../common/LogoLink";
import NavbarLinks from "./NavbarLinks";

export default function Footer() {
  return (
    <footer className="hidden sm:block border-t border-foreground/10 py-8 bg-stone-50">
          <div className="flex flex-col items-center gap-4">
            <LogoLink />
             <p className='text-sm'>
            &copy; {new Date().getFullYear()} Zumer&apos;s Cake. Tüm hakları
            saklıdır.
          </p>   
        </div>

    </footer>
  );
}
