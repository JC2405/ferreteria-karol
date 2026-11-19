import Image from "next/image"
import { Truck, Tag, ShieldCheck, ArrowRight, MapPin, Phone, Mail, Clock, MessageCircle, Hammer } from "lucide-react"
import { FacebookIcon, InstagramIcon } from "@/components/social-icons"
import { SiteHeader } from "@/components/site-header"
import { CatalogExplorer } from "@/components/catalog-explorer"
import { CategoryIconView } from "@/components/category-icon"
import { categories, services, type Product } from "@/lib/catalog"
import { nav, site, whatsappUrl } from "@/lib/site"

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-4xl font-bold uppercase md:text-5xl">{title}</h2>
      {text && <p className="mt-3 text-muted-foreground">{text}</p>}
    </div>
  )
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden bg-dark text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,#1f5fd6_0%,transparent_60%)] opacity-70" />
          <div className="absolute -bottom-1 left-0 right-0 h-3 bg-[repeating-linear-gradient(135deg,#ffd60a_0_18px,#0b2447_18px_36px)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                Tu proyecto comienza aquí
              </p>
              <h1 className="mt-5 text-5xl font-bold uppercase leading-[0.95] md:text-7xl">
                Todo en materiales de <span className="text-primary">construcción</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/85">
                Tuberías, cementos, agregados, bloques, hierro y ferretería general. Atención cercana para maestros de obra, constructores y público en general.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#categorias" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:brightness-95">
                  Ver categorías <ArrowRight className="size-4" />
                </a>
                <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">
                  <MessageCircle className="size-4" /> {site.phone}
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md">
              <div className="rotate-2 rounded-[2rem] bg-white p-3 shadow-2xl ring-4 ring-primary">
                <Image src="/karol.jpg" alt="Ferretería Karol" width={900} height={900} priority className="h-auto w-full rounded-[1.5rem]" />
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="border-b bg-card">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-3">
            {[
              { Icon: Truck, t: "Entregas a tiempo", d: "Tu material cuando lo necesitas." },
              { Icon: Tag, t: "Los mejores precios", d: "Calidad y ahorro en un solo lugar." },
              { Icon: ShieldCheck, t: "Variedad y calidad", d: "Todo lo que necesitas en un solo lugar." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-dark text-primary"><Icon className="size-7" /></span>
                <div>
                  <h3 className="text-xl font-bold uppercase">{t}</h3>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categorías */}
        <section id="categorias" className="mx-auto max-w-6xl px-4 py-20">
          <SectionTitle eyebrow="Portafolio" title="Categorías de productos" text="Encuentra lo que necesitas para cada etapa de tu proyecto." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <article
                key={c.id}
                className="group relative overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-xl"
              >
                {c.image ? (
                  /* ── Con foto ── */
                  <>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                      <span className="absolute left-4 top-4 grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground shadow">
                        <CategoryIconView name={c.icon} className="size-5" />
                      </span>
                      <span className="absolute right-4 top-4 font-display text-3xl font-bold text-white/30">{c.number}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold uppercase">{c.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                      <ul className="mt-3 space-y-1 text-sm">
                        {c.items.slice(0, 4).map((i) => {
                          const label = typeof i === "string" ? i : (i as Product).name
                          return (
                            <li key={label} className="flex gap-2">
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                              {label}
                            </li>
                          )
                        })}
                        {c.items.length > 4 && (
                          <li className="text-xs text-muted-foreground">+{c.items.length - 4} más…</li>
                        )}
                      </ul>
                    </div>
                  </>
                ) : (
                  /* ── Sin foto (fallback al diseño con ícono) ── */
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-lg bg-primary text-primary-foreground">
                        <CategoryIconView name={c.icon} className="size-6" />
                      </span>
                      <span className="font-display text-4xl font-bold text-border">{c.number}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold uppercase">{c.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                    <ul className="mt-4 space-y-1.5 text-sm">
                      {c.items.map((i) => {
                        const label = typeof i === "string" ? i : (i as Product).name
                        return (
                          <li key={label} className="flex gap-2">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                            {label}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </article>
            ))}
            <a href="#catalogo" className="flex flex-col items-start justify-center rounded-2xl bg-dark p-6 text-white hover:brightness-110 transition">
              <h3 className="text-2xl font-bold uppercase">¿Buscas una referencia?</h3>
              <p className="mt-2 text-sm text-white/70">Usa el buscador del catálogo para encontrar cualquier producto.</p>
              <span className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">Ir al catálogo <ArrowRight className="size-4" /></span>
            </a>
          </div>
        </section>

        {/* Catálogo */}
        <section id="catalogo" className="bg-muted py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle eyebrow="Catálogo" title="Busca y filtra productos" text="Catálogo comercial sin precios: pide tu cotización y te respondemos con disponibilidad y valores actualizados." />
            <CatalogExplorer />
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="mx-auto max-w-6xl px-4 py-20">
          <SectionTitle eyebrow="Lo que nos diferencia" title="Servicios especiales" />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.title} className={s.highlight ? "rounded-2xl bg-primary p-8 text-primary-foreground" : "rounded-2xl border bg-card p-8"}>
                <h3 className="text-3xl font-bold uppercase">{s.title}</h3>
                <p className="mt-3">{s.text}</p>
                <a href={whatsappUrl(`Hola, me interesa: ${s.title}`)} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-semibold underline underline-offset-4">
                  Solicitar <ArrowRight className="size-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="bg-dark py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Quiénes somos</p>
              <h2 className="mt-2 text-4xl font-bold uppercase md:text-5xl">Tu aliado confiable en obra</h2>
              <div className="mt-5 space-y-4 text-white/80">
                <p>En Ferretería Karol somos una empresa dedicada a la comercialización de materiales para construcción, productos ferreteros y soluciones para proyectos de obra civil.</p>
                <p>Ofrecemos una amplia variedad de productos, desde tuberías y accesorios, cementos, agregados, bloques y ladrillos, hasta materiales de hierro y servicios de figurado.</p>
                <p>Brindamos atención cercana y soluciones para proyectos de construcción, remodelación y mantenimiento. Somos aliado de maestros de obra, constructores, contratistas y público en general.</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="rounded-2xl border border-white/15 p-6">
                <h3 className="text-2xl font-bold uppercase text-primary">Misión</h3>
                <p className="mt-2 text-white/80">Ofrecer materiales de construcción y productos ferreteros que respondan a las necesidades de nuestros clientes, brindando atención de calidad, asesoría y soluciones confiables para cada proyecto.</p>
              </div>
              <div className="rounded-2xl border border-white/15 p-6">
                <h3 className="text-2xl font-bold uppercase text-primary">Visión</h3>
                <p className="mt-2 text-white/80">Consolidarnos como una ferretería reconocida por su variedad de productos, calidad en el servicio y compromiso con el crecimiento del sector de la construcción, siendo una empresa de confianza para nuestros clientes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="mx-auto max-w-6xl px-4 py-20">
          <SectionTitle eyebrow="Contacto" title="Contacto y ubicación" text="Visítanos o escríbenos para cotizar tu pedido." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: MapPin, t: "Dirección", v: `${site.address}, ${site.city}` },
              { Icon: Phone, t: "Teléfono", v: site.phone },
              { Icon: Mail, t: "Correo", v: site.email },
              { Icon: Clock, t: "Horario", v: site.hours },
            ].map(({ Icon, t, v }) => (
              <div key={t} className="rounded-xl border bg-card p-5">
                <Icon className="size-6 text-accent" />
                <h3 className="mt-3 text-xl font-bold uppercase">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground hover:brightness-95">
              <MessageCircle className="size-5" /> Escríbenos por WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white/80">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-white">
              <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground"><Hammer className="size-5" /></span>
              <span className="font-display text-2xl font-bold uppercase">{site.name}</span>
            </div>
            <p className="mt-3 text-sm">{site.tagline}.</p>
            <div className="mt-4 flex gap-3">
              <a href={site.facebook} aria-label="Facebook" className="rounded-full border border-white/20 p-2 hover:bg-white/10"><FacebookIcon className="size-4" /></a>
              <a href={site.instagram} aria-label="Instagram" className="rounded-full border border-white/20 p-2 hover:bg-white/10"><InstagramIcon className="size-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-xl font-bold uppercase text-white">Categorías</h4>
            <ul className="mt-3 space-y-1.5 text-sm">
              {categories.map((c) => <li key={c.id}><a href="#categorias" className="hover:text-primary">{c.name}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl font-bold uppercase text-white">Enlaces</h4>
            <ul className="mt-3 space-y-1.5 text-sm">
              {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-primary">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl font-bold uppercase text-white">Contacto</h4>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>{site.address}</li>
              <li>{site.phone}</li>
              <li>{site.email}</li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs">
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </div>
      </footer>
    </>
  )
}
