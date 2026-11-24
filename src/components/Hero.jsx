import { FileText, Sparkles, FileType2, Sheet, Check, ArrowDown } from "lucide-react";
import Sparkle from "./icons/Sparkle.jsx";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import { getGeneralWhatsAppLink } from "../config/contact.js";

const zipFiles = [
  { icon: FileText, name: "Guia_paso_a_paso.pdf", meta: "PDF · 22 págs", bg: "bg-coral" },
  { icon: Sparkles, name: "Prompts_IA.txt", meta: "Listos para copiar", bg: "bg-star", dark: true },
  { icon: FileType2, name: "Plantillas.docx", meta: "Word editable", bg: "bg-navy" },
  { icon: Sheet, name: "Calculadora.xlsx", meta: "Excel automático", bg: "bg-mint" },
];

function ZipCard() {
  return (
    <div className="relative w-[290px] animate-float rounded-3xl border border-line bg-white p-5 shadow-lift sm:w-[330px]">
      <div className="mb-4 flex items-center gap-3 border-b border-line pb-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy font-display text-xs font-extrabold text-star">
          .ZIP
        </span>
        <div className="min-w-0">
          <p className="truncate font-display text-[15px] font-extrabold text-navy">
            kit-chamba.zip
          </p>
          <p className="text-xs text-muted">4 carpetas · descarga al instante</p>
        </div>
      </div>

      <ul className="space-y-2.5">
        {zipFiles.map(({ icon: Icon, name, meta, bg, dark }) => (
          <li
            key={name}
            className="flex items-center gap-3 rounded-2xl bg-cream px-3 py-2.5 transition-transform duration-200 hover:translate-x-1"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${bg} ${
                dark ? "text-navy" : "text-white"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold text-navy">{name}</p>
              <p className="text-[11px] text-muted">{meta}</p>
            </div>
            <Check className="h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
          </li>
        ))}
      </ul>

      <div className="absolute -right-3 -top-3 flex items-center gap-1.5 rounded-full bg-mint px-3 py-1.5 text-xs font-bold text-white shadow-soft">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
        Entrega inmediata
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-16">
        <div className="animate-fade-up">
          <span className="inline-flex items-center rounded-full bg-navy px-4 py-2 font-display text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs">
            📦 Entrega inmediata en un solo .zip
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-navy sm:text-6xl">
            Kits digitales que te{" "}
            <span className="relative inline-block text-coral">
              resuelven
              <Sparkle className="absolute -right-6 -top-4 h-7 w-7 animate-twinkle sm:-right-8 sm:-top-5 sm:h-9 sm:w-9" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Cada kit trae una guía paso a paso en PDF, prompts listos para copiar
            en la IA, plantillas en Word y un Excel que hace las cuentas por ti.
            Lo recibes al momento, en un solo archivo .zip.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#catalogo" className="btn-coral">
              Ver los 8 Kits
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto flex h-[400px] w-full max-w-md items-center justify-center sm:h-[480px] lg:max-w-none"
          aria-hidden="true"
        >
          <div className="absolute h-[320px] w-[320px] rounded-full bg-coral sm:h-[400px] sm:w-[400px]" />
          <div className="absolute bottom-4 left-4 h-24 w-24 rounded-full bg-mint sm:bottom-6 sm:left-10 sm:h-28 sm:w-28" />
          <Sparkle className="absolute right-6 top-8 h-10 w-10 animate-twinkle sm:right-10 sm:h-12 sm:w-12" />
          <Sparkle
            className="absolute bottom-14 right-4 h-6 w-6 animate-twinkle"
            color="#FDF6EC"
          />
          <div className="relative z-10">
            <ZipCard />
          </div>
        </div>
      </div>
    </section>
  );
}
