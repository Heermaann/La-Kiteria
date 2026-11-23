import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Cómo recibo mi kit?",
    a: "Lo recibes al momento en un solo archivo .zip organizado por carpetas, listo para descargar en tu teléfono o computadora.",
  },
  {
    q: "¿Cómo realizo el pago?",
    a: "Nos escribes por WhatsApp o Instagram indicando el kit que deseas y coordinamos el método de pago más cómodo para ti.",
  },
  {
    q: "¿Necesito saber programar o pagar herramientas caras de IA?",
    a: "No. Todas las guías están explicadas paso a paso desde cero y funcionan con herramientas gratuitas.",
  },
  {
    q: "¿Puedo pedir una muestra antes de comprar?",
    a: "Sí, escríbenos por WhatsApp o Instagram diciendo cuál kit te interesa y te enviamos una muestra de lo que trae.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="section-title text-center">
          Preguntas <span className="text-coral">frecuentes</span>
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`card overflow-hidden transition-colors duration-200 ${
                  isOpen ? "border-navy/30" : ""
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-base font-extrabold text-navy sm:px-6 sm:text-lg"
                  >
                    {item.q}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-coral text-white" : "bg-cream text-navy"
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={3} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted sm:px-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
