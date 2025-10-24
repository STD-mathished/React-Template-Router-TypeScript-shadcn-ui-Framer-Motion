import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { HeroSection } from "@/components/HeroSection"
import { StackAndQuickstartSection } from "@/components/StackAndQuickstartSection"
import { UiAndAnimationSection } from "@/components/UiAndAnimationSection"
import { ConfigAndLicenseSection } from "@/components/ConfigAndLicenseSection"

export default function App() {
  return (
    <main className="min-h-[calc(100dvh-4rem)] px-6 py-10 mx-auto max-w-5xl">
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
        className="space-y-8"
      >
        {/* Hero seection*/}
        <HeroSection />

        <Separator className="my-6" />

        {/* Stack & Quickstart */}
        <StackAndQuickstartSection />

        {/* UI & Animations */}
        <UiAndAnimationSection />

        {/* Config & Licence */}
        <ConfigAndLicenseSection />
      </motion.section>
    </main>
  )
}
