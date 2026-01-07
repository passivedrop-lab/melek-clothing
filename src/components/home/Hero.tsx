"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-geometric">
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-0" />

            <div className="container relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 className="text-accent uppercase tracking-[0.3em] text-sm font-bold mb-6">L'art de la friperie</h2>
                        <h1 className="text-5xl md:text-8xl mb-8 leading-tight">
                            Élégance <br />
                            <span className="italic font-light">Sans Compromis</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-lg text-muted mb-10 max-w-xl leading-relaxed"
                    >
                        Une collection curatée de pièces uniques pour ceux qui exigent la distinction.
                        Redéfinissez votre style avec nos trésors intemporels.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap gap-6"
                    >
                        <Link href="/boutique" className="btn-premium">
                            Découvrir la collection
                            <ArrowRight size={16} />
                        </Link>
                        <Link href="/boutique?cat=nouveautes" className="btn-outline">
                            Nouveautés
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Background Graphic elements */}
            <motion.div
                animate={{
                    rotate: [0, 90, 180, 270, 360],
                }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -right-20 top-1/4 w-96 h-96 border border-white/5 pointer-events-none hidden lg:block"
                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            />
        </section>
    )
}
