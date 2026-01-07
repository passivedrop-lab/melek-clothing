"use client"

import { motion } from 'framer-motion'

export default function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <motion.div
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="relative w-10 h-10 bg-white flex items-center justify-center overflow-hidden"
                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            >
                <div className="absolute inset-0 bg-black m-[2px]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                <div className="z-10 text-white font-serif text-lg font-bold">M</div>

                {/* Geometric motifs */}
                <div className="absolute top-0 left-0 w-2 h-2 border-r border-b border-white opacity-40" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-l border-t border-white opacity-40" />
            </motion.div>
            <span className="font-serif text-xl tracking-widest uppercase font-medium">Melek</span>
        </div>
    )
}
