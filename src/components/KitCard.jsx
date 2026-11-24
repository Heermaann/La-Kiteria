import { Check, Eye } from "lucide-react";
import { KitImage } from "./SmartImage.jsx";
import PriceTag from "./PriceTag.jsx";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import { getWhatsAppLink } from "../config/contact.js";

export default function KitCard({ kit, onOpen, index = 0 }) {
  const num = String(kit.number).padStart(2, "0");

  return (
    <article
      className="card group flex animate-fade-up flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
      style={{ animationDelay: `${Math.min(index, 5) * 60}ms` }}
    >
      <div className="relative aspect-square overflow-hidden border-b border-line bg-cream">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
          <KitImage kit={kit} />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-navy px-3 py-1.5 font-display text-[11px] font-bold text-white shadow-soft">
          {kit.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-display text-sm font-extrabold tracking-wider text-coral">
          KIT {num}
        </p>
        <h3 className="mt-1 font-display text-2xl font-extrabold leading-tight text-navy">
          {kit.title}
          <span className="block text-lg font-bold text-navy/80">
            {kit.subtitle}
          </span>
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{kit.promise}</p>

        <ul className="mt-5 space-y-2.5">
          {kit.bullets.map((b, i) => (
            <li key={b} className="flex items-start gap-2.5 text-[14.5px] text-navy">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${
                  i % 2 === 0 ? "bg-coral" : "bg-mint"
                }`}
              >
                <Check className="h-3 w-3" strokeWidth={3.5} />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-dashed border-line pt-5">
          <span className="text-sm font-semibold text-muted">Precio del kit</span>
          <PriceTag onSale={kit.onSale} />
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row">
          <a
            href={getWhatsAppLink(kit.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral flex-1 !px-4"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedir por WhatsApp
          </a>
          <button
            type="button"
            onClick={() => onOpen(kit)}
            className="btn-outline flex-1 !px-4"
          >
            <Eye className="h-4 w-4" />
            Ver detalle / Muestra
          </button>
        </div>
      </div>
    </article>
  );
}
