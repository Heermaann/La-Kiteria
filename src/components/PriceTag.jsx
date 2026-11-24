import { BASE_PRICE, SALE_PRICE } from "../data/kits.js";

export default function PriceTag({ onSale = false, size = "md" }) {
  const big = size === "lg" ? "text-4xl" : "text-3xl";

  if (!onSale) {
    return (
      <div className="flex items-baseline gap-1.5">
        <span className={`font-display font-extrabold leading-none text-navy ${big}`}>
          ${BASE_PRICE}
        </span>
        <span className="text-xs font-semibold text-muted">USD</span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <div className="flex items-baseline gap-2">
        <span
          className="font-display text-lg font-bold text-muted line-through decoration-coral decoration-2"
          aria-label={`Precio anterior ${BASE_PRICE} dólares`}
        >
          ${BASE_PRICE}
        </span>
        <span
          className={`font-display font-extrabold leading-none text-coral ${big}`}
          aria-label={`Precio con descuento ${SALE_PRICE} dólares`}
        >
          ${SALE_PRICE}
        </span>
        <span className="text-xs font-semibold text-muted">USD</span>
      </div>
      <span className="rounded-full bg-star px-2.5 py-1 font-display text-[11px] font-extrabold uppercase tracking-wide text-navy">
        Oferta
      </span>
    </div>
  );
}
