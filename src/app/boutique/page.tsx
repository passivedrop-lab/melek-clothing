"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Info } from 'lucide-react'

export default function BoutiquePage() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div style={{ paddingTop: '10rem', paddingBottom: '10rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <header style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1.5rem' }}>La Curathèque.</h1>
                        <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5em', color: 'var(--accent)' }}>
                            L'Art de la Curation Héritage
                        </p>
                    </motion.div>
                </header>

                {/* Sublime Empty State */}
                <div style={{
                    flex: 1, display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                    position: 'relative'
                }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 2 }}
                        style={{
                            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            width: '100%', maxWidth: '800px', pointerEvents: 'none', zIndex: -1
                        }}
                    >
                        <img src="/hero-prestige.png" alt="" style={{ width: '100%', filter: 'grayscale(100%) blur(10px)' }} />
                    </motion.div>

                    <div style={{ maxWidth: '600px', zIndex: 10 }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontStyle: 'italic' }}>Une Sélection <span className="text-accent">Souveraine</span> se Prépare.</h2>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Bodoni Moda', opacity: 0.6, lineHeight: '1.8', marginBottom: '4rem' }}>
                            "La mode est ce que vous adoptez quand vous ne savez pas qui vous êtes." <br />
                            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>— Quentin Crisp</span>
                        </p>

                        <div style={{ height: '1px', width: '100px', background: 'var(--accent)', margin: '0 auto 4rem' }}></div>

                        <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.4em', opacity: 0.8, maxWidth: '400px', margin: '0 auto' }}>
                            Nos curateurs finalisent l'acquisition de pièces d'exception à Cotonou. Livraison disponible partout au Bénin.
                        </p>
                    </div>
                </div>

                {/* Minimal Search for UX readiness */}
                <div style={{
                    marginTop: '8rem', maxWidth: '300px', marginInline: 'auto',
                    borderBottom: '1px solid var(--border)', paddingBottom: '1rem',
                    opacity: 0.3
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Search size={14} />
                        <input
                            type="text"
                            placeholder="RECHERCHER PLUS TARD..."
                            disabled
                            style={{ background: 'none', border: 'none', color: 'white', fontSize: '0.6rem', letterSpacing: '0.2em', outline: 'none' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
