export const WHATSAPP_NUMBER = "584245274943";
export const WHATSAPP_DISPLAY = "+58 424 527 4943";
export const INSTAGRAM_USER = "lakiteria";
export const INSTAGRAM_URL = "https://instagram.com/lakiteria";
export const INSTAGRAM_DM_URL = "https://ig.me/m/lakiteria";

const buildLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function getWhatsAppLink(kitName) {
  return buildLink(
    `Hola La Kitería 👋 Me interesa el ${kitName}. ¿Me pasas los detalles y una muestra?`
  );
}

export function getGeneralWhatsAppLink() {
  return buildLink(
    "Hola La Kitería 👋 Estuve viendo su catálogo de kits digitales y quiero información."
  );
}
