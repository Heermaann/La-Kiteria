import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import { getGeneralWhatsAppLink } from "../config/contact.js";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="group fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-mint text-white shadow-lift transition-transform duration-200 hover:scale-110 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 animate-ping2 rounded-full bg-mint" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
