import { Instagram } from "lucide-react";
import { Logo } from "./SmartImage.jsx";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import Sparkle from "./icons/Sparkle.jsx";
import {
  getGeneralWhatsAppLink,
  INSTAGRAM_URL,
  INSTAGRAM_USER,
  WHATSAPP_DISPLAY,
} from "../config/contact.js";

export default function ContactBanner() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-navy py-16 sm:py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-coral/20" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-mint/20" />
      <Sparkle className="absolute right-[12%] top-12 hidden h-8 w-8 animate-twinkle sm:block" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <div className="overflow-hidden rounded-2xl">
          <Logo
            src="/images/logo-fondo-oscuro.png"
            dark
            crop={false}
            className="w-64 sm:w-80"
          />
        </div>

        <h2 className="mt-8 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
          ¿Cuál te interesa? Te paso los detalles y una muestra de lo que trae.
        </h2>
        <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
          Escríbenos directo y te enviamos una vista previa del kit antes de
          comprar.
        </p>

        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Hablar por WhatsApp ({WHATSAPP_DISPLAY})
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border-2 border-white/80 text-white hover:-translate-y-0.5 hover:bg-white hover:text-navy"
          >
            <Instagram className="h-5 w-5" />
            Ir a Instagram (@{INSTAGRAM_USER})
          </a>
        </div>
      </div>
    </section>
  );
}
