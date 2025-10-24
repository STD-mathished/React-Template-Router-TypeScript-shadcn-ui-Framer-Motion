import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import CodeBlock from "./CodeBlock"


export function UiAndAnimationSection() {    
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {/* UI */}
      <Card>
        <CardHeader>
          <CardTitle>UI (shadcn/ui + Tailwind)</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <p>
            Le template est déjà initialisé avec Tailwind et shadcn/ui. Les
            composants sont générés dans <code>src/components/ui/</code>. La
            configuration <code>tailwind.config.ts</code> inclut les presets
            nécessaires, et <code>AppProvider</code> expose un{" "}
            <code>ThemeProvider</code> (mode light/dark) et un{" "}
            <code>Toaster</code>.
          </p>

          <CodeBlock
            language="tsx"
            code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button>Click</Button>
}`}
          />
        </CardContent>
      </Card>

      {/* Animations */}
      <Card>
        <CardHeader>
          <CardTitle>Animations (Framer Motion)</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <p>
            Utilise <code>motion</code> directement ou les helpers de{" "}
            <code>src/lib/motion.ts</code>.
          </p>

          <CodeBlock
            language="tsx"
            code={`import { motion } from "framer-motion"

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}`}
          />

          <p className="mt-3">
            Exemple de transition entre pages avec <code>About</code> :
          </p>

          <CodeBlock
            language="tsx"
            code={`import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
    >
      <h1 className="text-2xl font-semibold">About</h1>
    </motion.main>
  )
}`}
          />
        </CardContent>
      </Card>
    </section>
  )
}
