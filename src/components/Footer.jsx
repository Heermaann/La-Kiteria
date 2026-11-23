import { Instagram } from "lucide-react";
import { Logo } from "./SmartImage.jsx";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import {
  getGeneralWhatsAppLink,
  INSTAGRAM_URL,
  INSTAGRAM_USER,
  WHATSAPP_DISPLAY,
} from "../config/contact.js";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream pb-24 pt-12 sm:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Logo src="/images/logo-horizontal.png" className="h-14" />
          <p className="text-sm text-muted">Kits digitales que te resuelven</p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy transition-colors hover:text-coral"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy transition-colors hover:text-coral"
          >
            <Instagram className="h-5 w-5" />@{INSTAGRAM_USER}
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-muted">© 2026 La Kitería</p>
    </footer>
  );
}
