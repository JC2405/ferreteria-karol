"use client"
import Image from "next/image"
import { useMemo, useState } from "react"
import { Search, MessageCircle, Package } from "lucide-react"
import { categories, type Product } from "@/lib/catalog"
import { whatsappUrl } from "@/lib/site"
import { cn } from "@/lib/utils"
import { CategoryIconView } from "./category-icon"

const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()

type FlatItem = {
  name: string
  image?: string
  catName: string
  catId: string
  catIcon: string
  catImage?: string
}

export function CatalogExplorer() {
  const [active, setActive] = useState<string>("todas")
  const [q, setQ] = useState("")

  const results = useMemo<FlatItem[]>(() => {
    const term = norm(q.trim())
    return categories
      .filter((c) => active === "todas" || c.id === active)
      .flatMap((c) =>
        c.items
          .map<FlatItem>((i) => {
            const isObj = typeof i !== "string"
            return {
              name: isObj ? (i as Product).name : i,
              image: isObj ? (i as Product).image : undefined,
              catName: c.name,
              catId: c.id,
              catIcon: c.icon,
              catImage: c.image,
            }
          })
          .filter(
            (item) =>
              !term ||
              norm(item.name).includes(term) ||
              norm(item.catName).includes(term),
          ),
      )
  }, [active, q])

  return (
    <div>
      {/* Buscador */}
      <div className="relative mx-auto max-w-xl">
        <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar producto: cemento, tubería, estribos…"
          className="w-full rounded-full border bg-card py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Filtros de categoría */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {[{ id: "todas", name: "Todas" }, ...categories].map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition",
              active === c.id ? "border-dark bg-dark text-white" : "bg-card hover:border-primary",
            )}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Grilla de productos */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((item) => {
          // Foto del producto → foto de categoría como fallback → sin foto
          const photoSrc = item.image ?? item.catImage

          return (
            <article
              key={item.catId + item.name}
              className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Imagen */}
              <div className="relative h-44 w-full overflow-hidden bg-muted">
                {photoSrc ? (
                  <>
                    <Image
                      src={photoSrc}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                  </>
                ) : (
                  /* Placeholder elegante cuando no hay foto */
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
                      <Package className="size-12" />
                    </div>
                  </div>
                )}

                {/* Badge de categoría flotante */}
                <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow">
                  <CategoryIconView name={item.catIcon as any} className="size-3" />
                  {item.catName}
                </span>
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold leading-snug">{item.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Consulta disponibilidad y medidas</p>

                <a
                  href={whatsappUrl(`Hola, quisiera cotizar: ${item.name}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto flex items-center gap-2 pt-4 text-sm font-semibold text-accent transition hover:text-foreground"
                >
                  <MessageCircle className="size-4" />
                  Cotizar por WhatsApp
                </a>
              </div>
            </article>
          )
        })}
      </div>

      {results.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">
          No encontramos ese producto. Escríbenos por WhatsApp y lo consultamos.
        </p>
      )}
    </div>
  )
}
