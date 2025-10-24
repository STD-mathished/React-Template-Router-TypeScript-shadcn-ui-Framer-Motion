import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function License() {
  return (
    <main className="min-h-[calc(100dvh-4rem)] px-6 py-10 mx-auto max-w-3xl">
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
        className="space-y-8"
      >
        <header className="space-y-3 text-left">
          <h1 className="text-3xl md:text-4xl font-semibold">Licence</h1>
          <p className="text-white/80 text-sm leading-6">
            Ce projet est publié sous licence MIT.
            <br />
            Tu peux réutiliser, modifier, redistribuer et intégrer ce code
            (même pour un usage commercial) à condition d’inclure l’avis de
            copyright et la présente licence.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Résumé simple</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-white/90 space-y-2">
            <p>
                Tu peux utiliser ce code librement, perso ou pro.
            </p>
            <p>
                Tu peux le modifier, le refondre, le vendre, l’intégrer dans ton produit.
            </p>
            <p>
              Aucune garantie si ça casse 
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Texte complet de la licence MIT</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="rounded-xl border border-white/10 bg-black/50 p-4 overflow-x-auto text-xs leading-6 text-white/80">
{`MIT License

Copyright (c) 2025 [Ton Nom / Ton Organisation]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
            </pre>
          </CardContent>
        </Card>
      </motion.section>
    </main>
  )
}
