import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router";


export default function NotFound() {
    const navigate = useNavigate();
    return(
        <div>
            <motion.h1
                className="text-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                Page has not been foud

            </motion.h1>

            <div className="flex min-h-svh flex-col items-center justify-center">
                <Button className="border p-3" onClick={() => navigate("/")}>Click me</Button>
            </div>

        </div>
    )
}