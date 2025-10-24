import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100dvh-4rem)] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="space-y-6"
      >
        <h1 className="text-7xl font-bold text-white/90">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Oups… Page non trouvée
        </h2>

        <p className="text-white/70 max-w-md mx-auto">
          Il semble que cette page n’existe pas ou ait été déplacée.
          <br />
          Vérifie l’URL ou retourne à la page d’accueil.
        </p>

        {/* Bouton animé */}
          <Link
            to="/"
            className="border border-white/30 px-5 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            Retourner à l’accueil
          </Link>
      </motion.div>
    </main>
  )
}
