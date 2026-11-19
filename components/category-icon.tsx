import { Cable, Disc3, Mountain, BrickWall, PackageOpen, Ruler, Wrench } from "lucide-react"
import type { CategoryIcon } from "@/lib/catalog"

const map = {
  pipe: Cable,
  disc: Disc3,
  mountain: Mountain,
  brick: BrickWall,
  bag: PackageOpen,
  rebar: Ruler,
  wrench: Wrench,
}

export function CategoryIconView({ name, className }: { name: CategoryIcon; className?: string }) {
  const Icon = map[name]
  return <Icon className={className} aria-hidden />
}
