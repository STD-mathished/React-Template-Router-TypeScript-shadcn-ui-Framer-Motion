import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function ConfigAndLicenseSection() {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {/* Config */}
      <Card>
        <CardHeader>
          <CardTitle>Configuration</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <ul className="list-disc pl-5 space-y-1">
            <li>Alias : @ pointe vers ./src</li>
            <li>
              Tailwind : dark mode class, base + components + utilities
            </li>
            <li>
              shadcn/ui : <code>components.json</code> présent (thème par
              défaut, tsx, chemin <code>src/components/ui</code>)
            </li>
            <li>
              Personnalisation possible (police, radius, couleurs) puis
              régénération des composants.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Licence */}
      <Card>
        <CardHeader>
          <CardTitle>Licence</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-6 text-center">
          <p>MIT</p>
        </CardContent>
      </Card>
    </section>
  )
}
