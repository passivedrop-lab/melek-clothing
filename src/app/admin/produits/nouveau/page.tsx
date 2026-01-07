"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Upload, X, ArrowLeft, Plus } from 'lucide-react'
import Link from 'next/link'

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Unique']
const CATEGORIES = ['Homme', 'Femme', 'Accessoires', 'Pantalons', 'Jeans']

export default function NewProductPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [selectedSizes, setSelectedSizes] = useState<string[]>([])
    const [images, setImages] = useState<string[]>([])

    const toggleSize = (size: string) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        )
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const url = URL.createObjectURL(file)
            setImages(prev => [...prev, url])
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            router.push('/admin/produits')
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-black text-white pb-20">
            <div className="couture-container">
                {/* Header Section */}
                <header className="py-24 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 mb-24">
                    <div className="max-w-3xl">
                        <Link href="/admin/produits" className="flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.5em] text-accent mb-10 hover:translate-x-[-10px] transition-all duration-500 ease-couture">
                            <ArrowLeft size={14} /> Retour à l'Inventaire
                        </Link>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-6xl md:text-8xl font-serif leading-[0.85]"
                        >
                            Atelier de <br /> <span className="serif-italic">Curation</span>
                        </motion.h1>
                        <p className="mt-8 text-[0.7rem] uppercase tracking-[0.3em] opacity-30 max-w-md leading-relaxed">
                            Chaque pièce ajoutée définit l'excellence de la maison Melek. Organisez vos produits avec précision et élégance.
                        </p>
                    </div>
                </header>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    {/* Left Panel: Detailed Form */}
                    <div className="lg:col-span-7 space-y-24">

                        {/* Section 1: Identité */}
                        <section className="space-y-12">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-[0.5rem] bg-accent/10 text-accent px-3 py-1 tracking-widest">01</span>
                                <h2 className="text-[0.6rem] uppercase tracking-[0.4em] opacity-50">Identité du Produit</h2>
                            </div>

                            <div className="couture-group">
                                <input type="text" required className="couture-input" placeholder="DÉSIGNATION DE L'ARTICLE" />
                                <label className="couture-label">Nom du produit</label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="couture-group">
                                    <select className="couture-input couture-select">
                                        <option value="" disabled selected>UNIVERS</option>
                                        {CATEGORIES.map(cat => <option key={cat} value={cat.toLowerCase()}>{cat}</option>)}
                                    </select>
                                    <label className="couture-label">Catégorie</label>
                                </div>
                                <div className="couture-group">
                                    <input type="number" required className="couture-input" placeholder="PRIX DE VENTE (FCFA)" />
                                    <label className="couture-label">Valeur unitaire</label>
                                </div>
                            </div>

                            <div className="couture-group">
                                <textarea
                                    rows={3}
                                    className="couture-input"
                                    placeholder="RÉCIT ET MATÉRIAUX..."
                                    style={{ resize: 'none' }}
                                />
                                <label className="couture-label">Description narrative</label>
                            </div>
                        </section>

                        {/* Section 2: Spécifications */}
                        <section className="space-y-12">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-[0.5rem] bg-accent/10 text-accent px-3 py-1 tracking-widest">02</span>
                                <h2 className="text-[0.6rem] uppercase tracking-[0.4em] opacity-50">Spécifications</h2>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-[0.5rem] uppercase tracking-[0.3em] opacity-40">Grille des Tailles</h3>
                                <div className="flex flex-wrap gap-3">
                                    {SIZES.map(size => (
                                        <button
                                            type="button"
                                            key={size}
                                            onClick={() => toggleSize(size)}
                                            className={`w-14 h-14 border text-[0.6rem] font-bold transition-all duration-500 uppercase flex items-center justify-center ${selectedSizes.includes(size)
                                                    ? 'border-accent bg-accent text-black'
                                                    : 'border-white/5 bg-transparent text-white/40 hover:border-white/20'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Action Section */}
                        <div className="pt-12 border-t border-white/5">
                            <button
                                disabled={loading}
                                className="couture-btn group w-full md:w-auto"
                            >
                                <motion.div
                                    initial={false}
                                    animate={loading ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
                                    className="flex items-center gap-4"
                                >
                                    {loading ? "ARCHIVAGE..." : "FINALISER LA PIÈCE"}
                                    {!loading && <Plus size={16} className="group-hover:rotate-90 transition-transform duration-700" />}
                                </motion.div>
                            </button>
                        </div>
                    </div>

                    {/* Right Panel: Curation Visuelle */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-12 space-y-10">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-[0.5rem] bg-accent/10 text-accent px-3 py-1 tracking-widest">03</span>
                                <h2 className="text-[0.6rem] uppercase tracking-[0.4em] opacity-50">Curation Visuelle</h2>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {images.map((img, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        key={i}
                                        className="aspect-[3/4] bg-white/[0.02] relative group overflow-hidden border border-white/5"
                                    >
                                        <img src={img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                                        <button
                                            type="button"
                                            onClick={() => setImages(prev => prev.filter((_, idx) => idx !== i))}
                                            className="absolute top-4 right-4 p-2 bg-black/80 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        >
                                            <X size={12} />
                                        </button>
                                    </motion.div>
                                ))}

                                <label className="aspect-[3/4] border border-dashed border-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-accent/40 hover:bg-white/[0.03] transition-all duration-700 group relative overflow-hidden">
                                    <Upload size={20} className="text-white/10 group-hover:text-accent transition-all duration-500 group-hover:-translate-y-2" />
                                    <span className="mt-4 text-[0.5rem] uppercase tracking-[0.4em] text-white/10 group-hover:text-accent">IMPORTER</span>
                                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                </label>
                            </div>

                            <div className="p-8 border border-white/5 bg-white/[0.01] space-y-4">
                                <h4 className="text-[0.5rem] uppercase tracking-[0.2em] font-bold text-accent/60">Note de maison</h4>
                                <p className="text-[0.6rem] leading-relaxed opacity-30 text-justify tracking-wide">
                                    Pour une présentation optimale, privilégiez des clichés en haute résolution sur fond sobre. Le ratio recommandé est de 3:4.
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
