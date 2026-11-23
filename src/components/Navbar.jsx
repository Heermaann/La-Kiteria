import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./SmartImage.jsx";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import { getGeneralWhatsAppLink } from "../config/contact.js";

const links = [
  { href: "#incluyen", label: "Qué incluyen" },
  { href: "#catalogo", label: "Catálogo (8 Kits)" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-line bg-cream/90 shadow-soft backdrop-blur-md"
          : "border-transparent bg-cream"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" aria-label="La Kitería, inicio" className="flex items-center">
          <Logo src="/images/logo-horizontal.png" className="h-12" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[15px] font-medium text-navy transition-colors hover:text-coral"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-coral transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral !px-4 !py-2.5 text-sm sm:!px-5"
          >
            <WhatsAppIcon className="hidden h-4 w-4 sm:block" />
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Pedir por WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-line md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`grid transition-all duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 pb-4 sm:px-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-t border-line py-3.5 font-display text-base font-bold text-navy"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
