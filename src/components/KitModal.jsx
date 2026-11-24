import { useEffect, useRef } from "react";
import { X, Check, Instagram, Package } from "lucide-react";
import { KitImage } from "./SmartImage.jsx";
import PriceTag from "./PriceTag.jsx";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import {
  getWhatsAppLink,
  INSTAGRAM_DM_URL,
  INSTAGRAM_USER,
} from "../config/contact.js";

export default function KitModal({ kit, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!kit) return;
    const previouslyFocused = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, [kit, onClose]);

  if (!kit) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="kit-modal-title"
    >
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-3xl animate-pop flex-col overflow-hidden rounded-t-3xl bg-cream shadow-lift sm:rounded-3xl">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy shadow-soft transition-transform hover:scale-110"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="overflow-y-auto">
          <div className="grid md:grid-cols-[260px_1fr]">
            <div className="aspect-[2/1] border-b border-line md:aspect-auto md:min-h-full md:border-b-0 md:border-r">
              <KitImage kit={kit} loading="eager" />
            </div>

            <div className="p-6 sm:p-8">
              <span className="inline-block rounded-full bg-navy px-3 py-1.5 font-display text-[11px] font-bold text-white">
                {kit.category}
              </span>
              <p className="mt-3 font-display text-sm font-extrabold tracking-wider text-coral">
                KIT {String(kit.number).padStart(2, "0")}
              </p>
              <h3
                id="kit-modal-title"
                className="mt-1 pr-10 font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl"
              >
                {kit.title}
                <span className="block text-lg font-bold text-navy/80 sm:text-xl">
                  {kit.subtitle}
                </span>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {kit.promise}
              </p>

              <div className="mt-4">
                <PriceTag onSale={kit.onSale} size="lg" />
              </div>

              <div className="mt-6 rounded-2xl border border-line bg-white p-5">
                <p className="mb-3 flex items-center gap-2 font-display text-sm font-extrabold text-navy">
                  <Package className="h-4 w-4 text-coral" />
                  Lo que incluye
                </p>
                <ul className="space-y-2.5">
                  {kit.includes.map((item, i) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-navy">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${
                          i % 2 === 0 ? "bg-coral" : "bg-mint"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3.5} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-2xl bg-star/25 p-4">
                <p className="font-display text-[15px] font-extrabold text-navy">
                  ¿Cuál te interesa? Te paso los detalles y una muestra de lo que
                  trae
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={getWhatsAppLink(kit.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-coral"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Pedir muestra por WhatsApp
                </a>
                <a
                  href={INSTAGRAM_DM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <Instagram className="h-5 w-5" />
                  Escribir al DM en Instagram (@{INSTAGRAM_USER})
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
