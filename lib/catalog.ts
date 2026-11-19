export type CategoryIcon =
  | "pipe" | "disc" | "mountain" | "brick" | "bag" | "rebar" | "wrench"

export type Product = {
  name: string
  /** Ruta relativa a /public, ej: "/productos/cemento-gris.jpg" */
  image?: string
}

export type Category = {
  id: string
  number: string
  name: string
  description: string
  icon: CategoryIcon
  /** Ruta relativa a /public, ej: "/categorias/tuberias.jpg" */
  image?: string
  items: (string | Product)[]
}

// ─── INSTRUCCIONES PARA AGREGAR FOTOS ────────────────────────────────────────
// Categorías: coloca tus fotos en /public/categorias/ con el nombre indicado.
//   Ejemplo: image: "/categorias/tuberias.jpg"
// Productos:  coloca tus fotos en /public/productos/ con el nombre indicado.
//   Ejemplo: { name: "Cemento gris", image: "/productos/cemento-gris.jpg" }
// Si no tienes foto todavía, deja el campo `image` sin definir o bórralo.
// ─────────────────────────────────────────────────────────────────────────────
export const categories: Category[] = [
  {
    id: "tuberias",
    number: "01",
    name: "Tuberías y accesorios",
    description: "Productos para instalaciones hidráulicas y sanitarias.",
    icon: "pipe",
    // image: "/categorias/tuberias.jpg",   ← descomenta y agrega tu foto
    items: [
      "Tubería PVC presión",
      "Tubería PVC sanitaria",
      "Tubería aguas lluvias",
      "Tubería conduit eléctrica",
      "Tubería de otros materiales",
      "Codos, uniones y adaptadores",
      "Tees y reducciones",
      "Sifones y accesorios sanitarios",
      "Válvulas y registros",
    ],
  },
  {
    id: "discos",
    number: "02",
    name: "Discos y abrasivos",
    description: "Para corte, desbaste y trabajos de construcción.",
    icon: "disc",
    // image: "/categorias/discos.jpg",
    items: [
      "Discos de corte para metal",
      "Discos de corte para concreto",
      "Discos diamantados",
      "Discos de desbaste",
      "Discos flap",
      "Accesorios para pulidoras",
    ],
  },
  {
    id: "agregados",
    number: "03",
    name: "Agregados para construcción",
    description: "Materiales esenciales para mezclas y obras civiles.",
    icon: "mountain",
    // image: "/categorias/agregados.jpg",
    items: ["Arena", "Grava", "Triturado", "Recebo", "Gravilla", "Piedra", "Material de relleno"],
  },
  {
    id: "bloques",
    number: "04",
    name: "Bloques y ladrillos",
    description: "Materiales para mampostería y construcción.",
    icon: "brick",
    // image: "/categorias/bloques.jpg",
    items: [
      "Bloque de concreto",
      "Bloque estructural",
      "Bloque número 4, 5 y 6 (según disponibilidad)",
      "Ladrillo común",
      "Ladrillo estructural",
      "Ladrillo prensado",
      "Ladrillo perforado",
    ],
  },
  {
    id: "cementos",
    number: "05",
    name: "Cementos y morteros",
    description: "Productos para mezclas, pega y acabados.",
    icon: "bag",
    // image: "/categorias/cementos.jpg",
    items: [
      "Cemento gris",
      "Cemento blanco",
      "Mortero seco",
      "Mortero de pega",
      "Productos para pañete",
      "Pegantes para enchape",
    ],
  },
  {
    id: "hierro",
    number: "06",
    name: "Hierro y figurado",
    description: "Acero para refuerzo y estructuras de concreto.",
    icon: "rebar",
    // image: "/categorias/hierro.jpg",
    items: [
      "Figurado de hierro",
      "Flejes",
      "Estribos",
      "Ganchos",
      "Varillas corrugadas",
      "Figuras especiales bajo pedido",
      "Acero de refuerzo",
    ],
  },
  {
    id: "general",
    number: "07",
    name: "Ferretería general",
    description: "Elementos complementarios para construcción y reparación.",
    icon: "wrench",
    // image: "/categorias/general.jpg",
    items: [
      "Puntillas",
      "Alambre",
      "Tornillería",
      "Herramientas manuales",
      "Herramientas eléctricas",
      "Elementos de fijación",
      "Accesorios y complementos",
    ],
  },
]

export const services = [
  {
    title: "Figurado de hierro",
    text: "Elaboración de flejes, estribos y figuras de acero para refuerzo estructural, de acuerdo con las medidas y especificaciones requeridas por el cliente.",
    highlight: true,
  },
  {
    title: "Materiales para construcción",
    text: "Comercialización de agregados y materiales esenciales para diferentes etapas de obra.",
    highlight: false,
  },
]
