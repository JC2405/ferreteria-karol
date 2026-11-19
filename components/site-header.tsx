"use client"
import { useState, useEffect } from "react"
import { Hammer, MessageCircle } from "lucide-react"
import { nav, site, whatsappUrl } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Solo ejecutar en cliente para evitar errores de SSR
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [mounted])

  useEffect(() => {
    if (!mounted) return
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [mounted])

  // Bloquea scroll del body cuando menú mobile está abierto
  useEffect(() => {
    if (!mounted) return
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open, mounted])

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled ? "bg-background shadow-sm" : "bg-background/95 backdrop-blur"
        }`}
      >
        {/* Barra principal */}
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

          {/* Logo */}
          <a href="#inicio" className="relative z-10 flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-md bg-dark text-primary">
              <Hammer className="size-5" />
            </span>
            <span className="font-display text-xl font-bold uppercase tracking-wide">
              {site.name}
            </span>
          </a>

          {/* Nav — solo desktop */}
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA — solo desktop */}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-95 md:inline-flex"
          >
            <MessageCircle className="size-4" />
            Cotiza por WhatsApp
          </a>

          {/* Botón hamburguesa (solo mobile) */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-lg md:hidden focus:outline-none"
          >
            <span
              className={`block h-[2.5px] w-6 rounded-full transition-all duration-300 origin-center ${
                open ? "translate-y-[8.5px] rotate-45 bg-white" : "bg-foreground"
              }`}
            />
            <span
              className={`block h-[2.5px] w-6 rounded-full transition-all duration-300 ${
                open ? "opacity-0 scale-x-0 bg-white" : "bg-foreground"
              }`}
            />
            <span
              className={`block h-[2.5px] w-6 rounded-full transition-all duration-300 origin-center ${
                open ? "-translate-y-[8.5px] -rotate-45 bg-white" : "bg-foreground"
              }`}
            />
          </button>
        </div>
      </header>

      {/* ——— Overlay + menú fullscreen mobile ——— */}
      <div
        className={`fixed inset-0 z-50 flex flex-col md:hidden transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Fondo difuminado */}
        <div className="absolute inset-0 bg-dark/80 backdrop-blur-md" />

        {/* Botón cerrar (X) arriba a la derecha */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Cerrar menú"
          className={`absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 ${
            open ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
          style={{ transitionDelay: open ? "60ms" : "0ms" }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" strokeLinecap="round">
            <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="2.5" />
            <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </button>

        {/* Contenido del menú centrado en pantalla */}
        <div className="relative flex flex-1 flex-col items-center justify-center gap-2 px-8">
          {nav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`w-full text-center rounded-xl py-4 text-2xl font-bold uppercase tracking-wide text-white transition-all duration-300 hover:text-primary hover:bg-white/10 ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
            >
              {n.label}
            </a>
          ))}

          {/* CTA WhatsApp */}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className={`mt-6 flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:brightness-110 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? `${80 + nav.length * 60}ms` : "0ms" }}
          >
            <MessageCircle className="size-5" />
            Cotiza por WhatsApp
          </a>
        </div>

        {/* Pie del overlay */}
        <div
          className={`relative pb-10 text-center text-sm text-white/40 transition-all duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: open ? "400ms" : "0ms" }}
        >
          Toca un enlace para ir a esa sección
        </div>
      </div>
    </>
  )
}
