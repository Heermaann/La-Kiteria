import { useCallback, useMemo, useState } from "react";
import KitCard from "./KitCard.jsx";
import KitModal from "./KitModal.jsx";
import { kits, CATEGORIES } from "../data/kits.js";

export default function Catalog() {
  const [active, setActive] = useState("Todos");
  const [selected, setSelected] = useState(null);

  const visible = useMemo(
    () => (active === "Todos" ? kits : kits.filter((k) => k.category === active)),
    [active]
  );

  const countFor = (cat) =>
    cat === "Todos" ? kits.length : kits.filter((k) => k.category === cat).length;

  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="catalogo" className="bg-white/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">
            Elige el kit que <span className="text-coral">necesitas</span>
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            8 kits listos para usar. Pide una muestra antes de comprar.
          </p>
        </div>

        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible"
          role="tablist"
          aria-label="Filtrar kits por categoría"
        >
          {CATEGORIES.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className={`shrink-0 whitespace-nowrap rounded-full border-2 px-5 py-2.5 font-display text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "border-navy bg-navy text-white shadow-soft"
                    : "border-line bg-white text-navy hover:border-navy"
                }`}
              >
                {cat} ({countFor(cat)})
              </button>
            );
          })}
        </div>

        <div key={active} className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {visible.map((kit, i) => (
            <KitCard key={kit.id} kit={kit} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <KitModal kit={selected} onClose={close} />
    </section>
  );
}
