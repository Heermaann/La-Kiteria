import { FileText, Sparkles, FileType2, Sheet } from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "Guía paso a paso en PDF",
    text: "De 18 a 26 páginas directas al grano, sin relleno teórico.",
    tone: "bg-coral text-white",
  },
  {
    icon: Sparkles,
    title: "Prompts listos para IA",
    text: "De 28 a 60 prompts listos para copiar, pegar y ejecutar.",
    tone: "bg-star text-navy",
  },
  {
    icon: FileType2,
    title: "Plantillas en Word e Imprimibles",
    text: "Modelos de CV, cartas, guiones, fichas o imprimibles según el kit.",
    tone: "bg-navy text-white",
  },
  {
    icon: Sheet,
    title: "Excel automático",
    text: "Hojas con fórmulas listas que calculan presupuestos, tarifas o ganancias reales.",
    tone: "bg-mint text-white",
  },
];

export default function WhatsIncluded() {
  return (
    <section id="incluyen" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">
            ¿Qué trae <span className="text-coral">cada kit</span>?
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Todo lo que necesitas, ordenado por carpetas y listo para usar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text, tone }) => (
            <article
              key={title}
              className="card group p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${tone}`}
              >
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-extrabold leading-snug text-navy">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 rounded-3xl border border-star/60 bg-star/20 px-5 py-4 text-center sm:px-8">
          <p className="font-display text-sm font-bold text-navy sm:text-base">
            ✨ Del Kit Tiendita en adelante, cada kit incluye también un
            planificador para imprimir.
          </p>
        </div>
      </div>
    </section>
  );
}
