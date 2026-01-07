"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="hero-wrapper">
            <div className="hero-overlay" />
            <img
                src="/hero-prestige.png"
                alt="Melek Prestige"
                className="hero-bg-img"
            />

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <span className="hero-subtitle">Maison Melek — Heritage 2026</span>
                    <h1 className="hero-title">
                        L'Élégance <br />
                        <span className="serif-italic" style={{ color: 'var(--accent)', marginLeft: '1rem' }}>Souveraine</span>
                    </h1>
                    <p className="hero-desc">
                        Une sélection prestigieuse de pièces uniques, curatées pour l'élite du style d'aujourd'hui.
                    </p>

                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                        <Link href="/boutique" className="btn-primary">
                            Explorer la collection
                        </Link>
                        <Link href="/boutique?cat=nouveautes" className="btn-outline">
                            Nouveautés
                        </Link>
                    </div>
                </motion.div>
            </div>

            <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', z- index: 10 }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.8em', textTransform: 'uppercase', opacity: 0.4 }}>
                Scroll pour découvrir
            </p>
        </div>
    </div >
  )
}
