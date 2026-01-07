"use client"

import { motion } from 'framer-motion'

export default function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                className="relative w-12 h-12 flex items-center justify-center"
            >
                {/* Diamond frame */}
                <div className="absolute inset-0 border border-accent/40 rotate-45" />
                <div className="absolute inset-1 border border-accent/20 rotate-45" />

                {/* Fill */}
                <div className="z-10 text-white font-serif text-2xl font-bold tracking-tighter">M</div>

                {/* Decorative dots */}
                <div className="absolute top-0 left-0 w-1 h-1 bg-accent rotate-45" />
                <div className="absolute bottom-0 right-0 w-1 h-1 bg-accent rotate-45" />
            </motion.div>
            <div className="flex flex-col -gap-1">
                <span className="font-serif text-2xl tracking-[0.2em] font-medium leading-none">MELEK</span>
                <span className="text-[7px] tracking-[0.6em] text-accent font-bold uppercase translate-y-1">Héritage</span>
            </div>
        </div>
    )
}
