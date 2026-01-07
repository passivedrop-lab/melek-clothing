"use client"

import { useState } from 'react'
import Logo from '@/components/ui/Logo'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Lock } from 'lucide-react'

export default function AdminLoginPage() {
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            window.location.href = '/admin'
        }, 1500)
    }

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black overflow-hidden">
            {/* Left Side: Editorial Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="hidden lg:block relative"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale opacity-60"
                    style={{ backgroundImage: 'url("/admin-bg.jpg")' }}
                ></div>
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-20 left-20 z-10">
                    <Logo />
                    <p style={{ marginTop: '2rem', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5em', opacity: 0.5 }}>
                        Atelier de Curation • Melek Heritage
                    </p>
                </div>
            </motion.div>

            {/* Right Side: Couture Login Form */}
            <div className="flex items-center justify-center p-8 md:p-20 relative">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-full max-w-sm"
                >
                    <div className="mb-16">
                        <span className="text-accent text-[0.6rem] uppercase tracking-[0.4em] mb-4 block">Espace Réservé</span>
                        <h1 style={{ fontFamily: 'Bodoni Moda', fontSize: '3rem', lineHeight: 1 }}>
                            Accès <br /> <span className="serif-italic">Curateur</span>
                        </h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="couture-group">
                            <input
                                type="email"
                                required
                                className="couture-input"
                                placeholder="IDENTIFIANT"
                            />
                            <label className="couture-label">Email professionnel</label>
                        </div>

                        <div className="couture-group">
                            <input
                                type="password"
                                required
                                className="couture-input"
                                placeholder="MOT DE PASSE"
                            />
                            <label className="couture-label">Clé de sécurité</label>
                        </div>

                        <div className="pt-8">
                            <button
                                disabled={loading}
                                className="couture-btn w-full"
                            >
                                {loading ? "Vérification..." : "Entrer dans l'Atelier"}
                                {!loading && <ArrowRight size={16} />}
                            </button>
                        </div>
                    </form>

                    <footer className="mt-20 opacity-20">
                        <p style={{ fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>
                            © 2026 Melek Clothing • Excellence en Afrique
                        </p>
                    </footer>
                </motion.div>
            </div>
        </div>
    )
}
