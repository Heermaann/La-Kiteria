import { useState } from "react";
import { Briefcase } from "lucide-react";
import Sparkle from "./icons/Sparkle.jsx";

export function KitFallback({ title, icon: Icon = Briefcase, className = "" }) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-cream ${className}`}
      role="img"
      aria-label={title}
    >
      <div className="absolute -bottom-1/4 -right-1/4 h-3/4 w-3/4 rounded-full bg-coral" />
      <div className="absolute -bottom-6 left-[28%] h-[22%] w-[22%] rounded-full bg-mint" />
      <Sparkle className="absolute left-[12%] top-[14%] h-[9%] w-[9%] animate-twinkle" />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-white shadow-lift sm:h-20 sm:w-20">
          <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2} />
        </span>
        <span className="font-display text-3xl font-extrabold leading-none text-navy sm:text-4xl">
          {title}
        </span>
      </div>
    </div>
  );
}

export function KitImage({ kit, className = "", loading = "lazy" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <KitFallback title={kit.title} icon={kit.icon} className={className} />;
  }

  return (
    <img
      src={kit.image}
      alt={`Portada del ${kit.title}: ${kit.subtitle}`}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

// Las imágenes de logo tienen mucho margen lateral: se recortan al contenido.
export function Logo({ src, dark = false, className = "h-12", crop = true }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`inline-flex items-center gap-2 font-display font-extrabold ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral">
          <Briefcase className="h-5 w-5 text-white" />
        </span>
        <span className="text-xl">
          <span className="text-coral">La </span>Kitería
        </span>
      </span>
    );
  }

  return (
    <span
      className={`relative block shrink-0 overflow-hidden ${className}`}
      style={{ aspectRatio: crop ? "2.9 / 1" : "2.92 / 1" }}
    >
      <img
        src={src}
        alt="La Kitería"
        onError={() => setFailed(true)}
        className={`absolute inset-0 h-full w-full object-cover ${
          crop ? "scale-[1.85]" : ""
        }`}
      />
    </span>
  );
}
