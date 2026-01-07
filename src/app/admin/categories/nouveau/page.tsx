"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'

export default function NewCategoryPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            router.push('/admin/categories')
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-black text-white pb-20">
            <div className="couture-container">
                <header className="py-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 mb-20">
                    <div className="max-w-2xl">
                        <Link href="/admin/categories" className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.4em] text-accent mb-8 hover:translate-x-[-10px] transition-transform">
                            <ArrowLeft size={14} /> Revenir à l'Univers
                        </Link>
                        <h1 style={{ fontFamily: 'Bodoni Moda', fontSize: '4rem', lineHeight: 0.9 }}>
                            Nouvel <br /> <span className="serif-italic">Univers</span>
                        </h1>
                        <p style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.4, maxWidth: '400px', lineHeight: 1.6 }}>
                            Créez un nouvel horizon de curation. Une catégorie chez Melek est une porte ouverte sur une vision unique de la mode.
                        </p>
                    </div>
                </header>

                <div className="max-w-2xl">
                    <form onSubmit={handleSubmit} className="space-y-16">
                        <div className="couture-group">
                            <input type="text" required className="couture-input" placeholder="NOM DE L'UNIVERS" />
                            <label className="couture-label">Désignation (ex: Édition Limitée)</label>
                        </div>

                        <div className="couture-group">
                            <input type="text" required className="couture-input" placeholder="SLUG D'IDENTIFICATION" />
                            <label className="couture-label">Identifiant URL (ex: edition-limitee)</label>
                        </div>

                        <div className="pt-12">
                            <button disabled={loading} className="couture-btn" style={{ width: '100%', justifyContent: 'center' }}>
                                {loading ? "Définition de l'Univers..." : "Inaugurer la Catégorie"}
                                {!loading && <Check size={16} />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
