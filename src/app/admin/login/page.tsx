"use client"

import { useState } from 'react'
import Logo from '@/components/ui/Logo'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'

export default function AdminLoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Auth logic will go here
        setTimeout(() => {
            window.location.href = '/admin'
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-geometric flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md glass-dark p-12 border border-white/10"
            >
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <Logo />
                    </div>
                    <h1 className="text-2xl font-serif mb-2">Accès Administrateur</h1>
                    <p className="text-[10px] uppercase tracking-widest text-muted">Veuillez vous identifier pour continuer</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold">Email</label>
                        <div className="relative">
                            <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                            <input
                                type="email"
                                required
                                className="w-full bg-background border border-white/10 px-12 py-4 text-xs focus:border-accent outline-none transition-colors"
                                placeholder="admin@melek.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold">Mot de passe</label>
                        <div className="relative">
                            <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                className="w-full bg-background border border-white/10 px-12 py-4 text-xs focus:border-accent outline-none transition-colors"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-white"
                            >
                                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                            </button>
                        </div>
                    </div>

                    <button
                        disabled={loading}
                        className="btn-premium w-full py-4 mt-4 disabled:opacity-50"
                    >
                        {loading ? "Connexion..." : "Se connecter"}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-[9px] text-muted uppercase tracking-widest">
                        Protegé par Melek Security • 2026
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
