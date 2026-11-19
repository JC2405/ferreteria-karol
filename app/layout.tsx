import type { Metadata } from "next"
import { Inter, Barlow_Condensed } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
})

export const metadata: Metadata = {
  title: "Ferretería Karol | Materiales de construcción y ferretería",
  description:
    "Tuberías, cementos, agregados, bloques, ladrillos, hierro y figurado, discos y ferretería general. Cotiza por WhatsApp.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
