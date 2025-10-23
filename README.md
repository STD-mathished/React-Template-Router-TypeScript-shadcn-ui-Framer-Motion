# React Template — Router + TypeScript + shadcn/ui + Framer Motion

Base moderne pour démarrer rapidement de nouveaux projets React sans reconfigurer à chaque fois.

## Stack

- Build : [Vite] + React 18 + TypeScript  
- Routing : react-router-dom (v6+)  
- UI : shadcn/ui + Tailwind CSS + Radix UI  
- Animations : Framer Motion  
- Qualité : ESLint, Prettier, simple alias @/*  

Ce template vise la simplicité : tout fonctionne, et tu peux retirer les parties que tu n’utilises pas.

## Démarrage rapide

```bash
# 1) Utiliser ce repo comme template 
git clone React-Template-Router-TypeScript-shadcn-ui-Framer-Motion
cd React-Template-Router-TypeScript-shadcn-ui-Framer-Motion

# 2) Installer les deps
npm i        # ou yarn / npm install

# 3) Lancer en dev
npm dev


Pré-requis : Node ≥ 18, npm 


## UI (shadcn/ui + Tailwind)

Le template est déjà initialisé avec Tailwind et shadcn/ui.

### Ajouter un nouveau composant shadcn


Les composants sont générés dans `src/components/ui/`.  
La config `tailwind.config.ts` inclut les presets nécessaires, et `AppProvider` expose un `ThemeProvider` (mode light/dark) + `Toaster`.

```tsx
import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button>Click</Button>
}
```

## Animations (Framer Motion)

Utilise motion directement ou les helpers de `src/lib/motion.ts`.

```tsx
import { motion } from "framer-motion"

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
}
```

Exemple de transition entre pages :

```tsx
import { motion } from "framer-motion"

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
}
```



## Configuration

- Alias : `@` → `./src`
- ESLint/Prettier : règles de base pour TS/React + import order
- Tailwind : dark mode class, base + components + utilities inclus
- shadcn/ui :
  - components.json présent (thème par défaut, tsx, chemin src/components)
  - tu peux changer la police, le radius, les couleurs dans ce fichier puis régénérer les composants


## Licence

MIT
