"use client"

import { motion, useScroll } from "framer-motion"

export default function PostScrollBar() {
    const { scrollYProgress } = useScroll()

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: "120px",
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    zIndex: 50,
                }}
                className="bg-orange-400"
            />

        </>
    )
}