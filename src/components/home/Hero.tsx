"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-melek pt-0 pb-0">
            <div className="geometric-overlay" />

            <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-20">
                {/* Text Content */}
                <div className="flex-1 lg:max-w-2xl text-center lg:text-left mt-20 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <p className="text-xs-caps text-accent mb-8 reveal active">Exclusivité & Héritage</p>
                        <h1 className="text-6xl md:text-[9rem] leading-[0.9] mb-12 tracking-tight">
                            Subjuguer <br />
                            <span className="italic font-light ml-0 lg:ml-20">L'Instant</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="flex flex-col md:flex-row items-center lg:items-start gap-10"
                    >
                        <p className="text-sm text-muted max-w-sm leading-relaxed font-light tracking-wide italic">
                            "La mode se démode, le style jamais." — Coco Chanel.
                            <br />Redéfinissez votre distinction.
                        </p>
                        <div className="flex flex-col gap-4">
                            <Link href="/boutique" className="btn-melek">
                                <span>Explorer la collection</span>
                            </Link>
                            <Link href="/boutique?cat=nouveautes" className="text-xs-caps border-b border-accent pb-1 inline-block w-fit opacity-70 hover:opacity-100 transition-opacity">
                                Nouvelle Curations
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image / Composition */}
                <motion.div
                    initial={{ opacity: 0, x: 100, rotate: 2 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
                    className="flex-1 relative w-full aspect-[4/5] lg:aspect-[3/4] max-w-xl group"
                >
                    <div className="absolute -inset-4 border border-accent/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-1000" />
                    <div className="relative w-full h-full overflow-hidden shadow-2xl">
                        <img
                            src="/hero-prestige.png"
                            alt="Melek Luxury Fashion"
                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s] ease-out"
                        />
                    </div>
                    {/* Geometric Motif */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-white/5 rotate-45 pointer-events-none" />
                </motion.div>
            </div>

            {/* Side Label */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
                <p className="text-[10px] uppercase tracking-[1em] rotate-90 origin-right text-muted/30">
                    MELEK CLOTHING — EST. 2026
                </p>
            </div>
        </section>
    )
}
