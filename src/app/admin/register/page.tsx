"use client"

import { useState } from 'react'
import Logo from '@/components/ui/Logo'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Lock, User } from 'lucide-react'
import Link from 'next/link'

export default function AdminRegisterPage() {
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            window.location.href = '/admin/login'
        }, 1500)
    }

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black overflow-hidden">
            {/* Left Side: Register Layout */}
            <div className="flex items-center justify-center p-8 md:p-20 relative order-2 lg:order-1">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-full max-w-sm"
                >
                    <div className="mb-16">
                        <span className="text-accent text-[0.6rem] uppercase tracking-[0.4em] mb-4 block">Héritage Melek</span>
                        <h1 style={{ fontFamily: 'Bodoni Moda', fontSize: '3rem', lineHeight: 1 }}>
                            Rejoindre <br /> <span className="serif-italic">l'Empire</span>
                        </h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="couture-group">
                            <input
                                type="text"
                                required
                                className="couture-input"
                                placeholder="IDENTITÉ"
                            />
                            <label className="couture-label">Nom complet du curateur</label>
                        </div>

                        <div className="couture-group">
                            <input
                                type="email"
                                required
                                className="couture-input"
                                placeholder="EMAIL PROFESSIONNEL"
                            />
                            <label className="couture-label">Identifiant de connexion</label>
                        </div>

                        <div className="couture-group">
                            <input
                                type="password"
                                required
                                className="couture-input"
                                placeholder="CLÉ DE SÉCURITÉ"
                            />
                            <label className="couture-label">Mot de passe haute protection</label>
                        </div>

                        <div className="pt-8">
                            <button
                                disabled={loading}
                                className="couture-btn w-full"
                            >
                                {loading ? "Initialisation..." : "Créer mon Accès"}
                                {!loading && <ArrowRight size={16} />}
                            </button>
                        </div>
                    </form>

                    <footer className="mt-16">
                        <Link
                            href="/admin/login"
                            className="text-[0.6rem] uppercase tracking-[0.3em] text-muted hover:text-accent transition-colors"
                        >
                            Déjà membre de l'élite ? Se connecter
                        </Link>
                    </footer>
                </motion.div>
            </div>

            {/* Right Side: Editorial Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="hidden lg:block relative order-1 lg:order-2"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale opacity-60"
                    style={{ backgroundImage: 'url("/register-bg.jpg")' }}
                ></div>
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute top-20 right-20 text-right z-10">
                    <Logo />
                    <p style={{ marginTop: '2rem', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5em', opacity: 0.5 }}>
                        Cotonou • Bénin • Heritage 2026
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
