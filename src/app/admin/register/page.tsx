"use client"

import { useState } from 'react'
import Logo from '@/components/ui/Logo'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, Mail, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AdminRegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            window.location.href = '/admin/login'
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Aesthetic */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="glass-dark border border-white/5 p-10 md:p-14 shadow-2xl relative">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-accent/30 pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-accent/30 pointer-events-none"></div>

                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex justify-center mb-8"
                        >
                            <Logo />
                        </motion.div>

                        <h1 style={{ fontFamily: 'Bodoni Moda', fontSize: '2rem', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                            Rejoindre <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>l'Élite</span>
                        </h1>
                        <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.4em', opacity: 0.5 }}>
                            Création de compte administrateur Melek
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.7, fontWeight: 600 }}>Nom de l'Administrateur</label>
                            <div className="relative border-b border-white/10 group focus-within:border-accent transition-colors duration-500">
                                <User size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-accent transition-colors" />
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-transparent px-8 py-4 text-xs font-light outline-none transition-all placeholder:opacity-20"
                                    placeholder="Nom complet"
                                    style={{ fontFamily: 'Montserrat' }}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.7, fontWeight: 600 }}>Email Professionnel</label>
                            <div className="relative border-b border-white/10 group focus-within:border-accent transition-colors duration-500">
                                <Mail size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-accent transition-colors" />
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-transparent px-8 py-4 text-xs font-light outline-none transition-all placeholder:opacity-20"
                                    placeholder="admin@melek-clothing.com"
                                    style={{ fontFamily: 'Montserrat' }}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.7, fontWeight: 600 }}>Clé de Sécurité</label>
                            <div className="relative border-b border-white/10 group focus-within:border-accent transition-colors duration-500">
                                <Lock size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-accent transition-colors" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="w-full bg-transparent px-8 py-4 text-xs font-light outline-none transition-all placeholder:opacity-20"
                                    placeholder="••••••••••••"
                                    style={{ fontFamily: 'Montserrat' }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 text-muted hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                </button>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                disabled={loading}
                                className="w-full py-5 bg-white text-black text-[0.7rem] font-bold uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all duration-500 relative group overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {loading ? "Initialisation..." : "Établir la Connexion"}
                                    {!loading && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                                </span>
                            </button>
                        </div>
                    </form>

                    <div className="mt-12 text-center">
                        <Link
                            href="/admin/login"
                            className="text-[0.6rem] uppercase tracking-widest text-muted hover:text-accent transition-colors inline-flex items-center gap-2"
                        >
                            Déjà membre de l'empire
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
