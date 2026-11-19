// Datos del negocio. Reemplaza los valores marcados con "TODO" por los reales.
export const site = {
  name: "Ferretería Karol",
  tagline: "Todo en materiales de construcción y ferretería",
  // Formato wa.me: código de país (57) + número, sin + ni espacios
  whatsapp: "573152369471",
  phone: "315 236 9471",
  email: "contacto@ferreteriakarol.com", // TODO
  address: "Carrera 10 # 15 - 35", // TODO: confirmar (un flyer dice Avenida Circunvalar 15-20 esquina)
  city: "Colombia", // TODO: agregar ciudad
  hours: "Lunes a sábado · 7:00 a. m. – 6:00 p. m.", // TODO
  facebook: "#",
  instagram: "#",
}

export const nav = [
  { href: "#categorias", label: "Categorías" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Quiénes somos" },
  { href: "#contacto", label: "Contacto" },
]

export function whatsappUrl(text = "Hola, quisiera cotizar unos productos.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}
