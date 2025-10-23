import { motion } from "motion/react"

export default function NotFound() {
    return(
        <motion.h1
            className="text-center"

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            Page has not been foud

        </motion.h1>
    )
}