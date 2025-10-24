import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <header className="space-y-3">
      <h1 className="text-3xl md:text-4xl font-semibold">
        React Template — Router + TypeScript + shadcn/ui + Framer Motion
      </h1>

      <p className="text-base text-white/80">
        Une base moderne pour démarrer rapidement de nouveaux projets React sans
        reconfigurer à chaque fois.
      </p>

      <div className="flex flex-wrap gap-2 pt-1">
        <Badge variant="secondary" className="border-white">Vite</Badge>
        <Badge variant="secondary" className="border-white">React 18</Badge>
        <Badge variant="secondary" className="border-white">TypeScript</Badge>
        <Badge variant="secondary" className="border-white">React Router v7+</Badge>
        <Badge variant="secondary" className="border-white">shadcn/ui + Tailwind + Radix</Badge>
        <Badge variant="secondary" className="border-white">Framer Motion</Badge>
        <Badge variant="secondary" className="border-white">ESLint + Prettier</Badge>
        <Badge variant="secondary" className="border-white">Alias @/*</Badge>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <Button asChild>
          <Link to="/license">License</Link>
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://reactrouter.com/"
            target="_blank"
            rel="noreferrer"
          >
            Docs React Router
          </a>
        </Button>
      </div>
    </header>
  )
}
