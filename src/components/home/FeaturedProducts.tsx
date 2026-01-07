"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FeaturedProducts() {
    // Empty state for products as requested by user
    const products = []

    return (
        <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5em', color: 'var(--accent)', marginBottom: '1.5rem' }}>
                            Curations de Saison
                        </h2>
                        <h3 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                            Les Pièces <span className="serif-italic">Iconiques</span>
                        </h3>
                    </motion.div>
                </div>

                {products.length === 0 ? (
                    <div style={{
                        padding: '10rem 2rem', border: '1px solid var(--border)',
                        textAlign: 'center', background: 'rgba(255,255,255,0.02)',
                        position: 'relative', overflow: 'hidden'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5 }}
                            style={{ zIndex: 10, position: 'relative' }}
                        >
                            <p style={{ fontSize: '1.5rem', fontFamily: 'Bodoni Moda', fontStyle: 'italic', marginBottom: '2rem', opacity: 0.8 }}>
                                "Le luxe est une affaire de patience et de choix."
                            </p>
                            <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.3em', opacity: 0.5, maxWidth: '500px', margin: '0 auto' }}>
                                Nos prochaines sélections sont en cours d'expertise. <br />
                                L'excellence ne se précipite pas.
                            </p>
                        </motion.div>

                        {/* Background Texture for Empty State */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                            backgroundImage: 'radial-gradient(circle at center, rgba(184, 134, 11, 0.05) 0%, transparent 70%)',
                            zIndex: 1
                        }}></div>
                    </div>
                ) : (
                    <div className="product-grid">
                        {/* Logic for 5 articles per category will go here when products are added */}
                    </div>
                )}

                <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                    <Link href="/boutique" className="btn-outline" style={{ padding: '1.2rem 3rem' }}>
                        Consulter la Curathèque
                    </Link>
                </div>
            </div>
        </section>
    )
}
