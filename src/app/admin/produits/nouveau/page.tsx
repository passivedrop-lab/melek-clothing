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
                <header className="py-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 mb-20">
                    <div className="max-w-2xl">
                        <Link href="/admin/produits" className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.4em] text-accent mb-8 hover:translate-x-[-10px] transition-transform">
                            <ArrowLeft size={14} /> Revenir à la Galerie
                        </Link>
                        <h1 style={{ fontFamily: 'Bodoni Moda', fontSize: '4rem', lineHeight: 0.9 }}>
                            Atelier de <br /> <span className="serif-italic">Curation</span>
                        </h1>
                        <p style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.4, maxWidth: '400px', lineHeight: 1.6 }}>
                            Intégrez une nouvelle pièce d'exception dans l'héritage Melek. Chaque détail définit l'excellence.
                        </p>
                    </div>
                </header>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Left Panel: Inputs */}
                    <div className="lg:col-span-7 space-y-20">
                        <div className="space-y-12">
                            <div className="couture-group">
                                <input type="text" required className="couture-input" placeholder="TITRE DE LA PIÈCE" />
                                <label className="couture-label">Nom du produit (ex: Veste en Lin Sahara)</label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="couture-group">
                                    <select className="couture-input couture-select">
                                        {CATEGORIES.map(cat => <option key={cat} value={cat.toLowerCase()}>{cat}</option>)}
                                    </select>
                                    <label className="couture-label">Catégorie de Curation</label>
                                </div>
                                <div className="couture-group">
                                    <input type="number" required className="couture-input" placeholder="PRIX (FCFA)" />
                                    <label className="couture-label">Valeur de la pièce</label>
                                </div>
                            </div>

                            <div className="couture-group">
                                <textarea rows={1} className="couture-input" placeholder="L'HISTOIRE DE CETTE PIÈCE" style={{ resize: 'none', height: 'auto' }} />
                                <label className="couture-label">Description narrative</label>
                            </div>
                        </div>

                        {/* Sizes Selection */}
                        <div className="space-y-8">
                            <h3 className="text-[0.6rem] uppercase tracking-[0.4em] opacity-40">Tailles Disponibles</h3>
                            <div className="flex flex-wrap gap-4">
                                {SIZES.map(size => (
                                    <button
                                        type="button"
                                        key={size}
                                        onClick={() => toggleSize(size)}
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            border: '1px solid',
                                            borderColor: selectedSizes.includes(size) ? 'var(--accent)' : 'rgba(255,255,255,0.05)',
                                            background: selectedSizes.includes(size) ? 'var(--accent)' : 'transparent',
                                            color: selectedSizes.includes(size) ? 'black' : 'white',
                                            fontSize: '0.7rem',
                                            fontWeight: 700,
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                        }}
                                        className="hover:border-accent"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-12">
                            <button
                                disabled={loading}
                                className="couture-btn group"
                                style={{ width: '100%', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}
                            >
                                <motion.div
                                    initial={false}
                                    animate={loading ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
                                    className="flex items-center gap-4"
                                >
                                    {loading ? "Intégration..." : "Inscrire dans l'Héritage"}
                                    {!loading && <Plus size={16} className="group-hover:rotate-90 transition-transform duration-500" />}
                                </motion.div>
                            </button>
                        </div>
                    </div>

                    {/* Right Panel: Image Upload Gallery */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-40 space-y-8">
                            <h3 className="text-[0.6rem] uppercase tracking-[0.4em] opacity-40">Galerie Visuelle</h3>

                            <div className="grid grid-cols-2 gap-4">
                                {images.map((img, i) => (
                                    <div key={i} className="aspect-[3/4] bg-white/5 relative group overflow-hidden border border-white/5">
                                        <img src={img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                        <button
                                            type="button"
                                            onClick={() => setImages(prev => prev.filter((_, idx) => idx !== i))}
                                            className="absolute top-4 right-4 p-2 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ))}

                                <label className="aspect-[3/4] border border-dashed border-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-accent/40 hover:bg-white/5 transition-all group">
                                    <Upload size={24} className="text-white/20 group-hover:text-accent transition-colors" />
                                    <span className="mt-4 text-[0.5rem] uppercase tracking-[0.4em] text-white/20 group-hover:text-accent">Capturer</span>
                                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                </label>
                            </div>

                            <div className="pt-8 p-6 border border-white/5 bg-white/[0.02]">
                                <p style={{ fontSize: '0.6rem', lineHeight: 2, opacity: 0.3, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                                    Standard Melek : Ratio 3:4 • Haute Résolution • Fond Neutre de préférence.
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
