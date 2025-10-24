import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import CodeBlock from "./CodeBlock"

export function StackAndQuickstartSection() {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {/* Stack */}
      <Card>
        <CardHeader>
          <CardTitle>Stack</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <ul className="list-disc pl-5 space-y-1">
            <li>Build : Vite + React 18 + TypeScript</li>
            <li>Routing : react-router-dom (v6+)</li>
            <li>UI : shadcn/ui + Tailwind CSS</li>
            <li>Animations : Framer Motion</li>
          </ul>
          <p className="mt-3 text-white/80">
            Ce template vise la simplicité : tout fonctionne, les parties que tu n’utilises pas peuvent être supprimées.
          </p>
        </CardContent>
      </Card>

      {/* Quickstart */}
      <Card>
        <CardHeader>
          <CardTitle>Démarrage rapide</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            language="bash"
            code={`# 1) Utiliser ce repo comme template 
git clone React-Template-Router-TypeScript-shadcn-ui-Framer-Motion
cd React-Template-Router-TypeScript-shadcn-ui-Framer-Motion

# 2) Installer les deps
npm i        # ou yarn / pnpm install

# 3) Lancer en dev
npm run dev

# Pré-requis
# Node ≥ 18, npm
`}
          />
        </CardContent>
      </Card>
    </section>
  )
}
