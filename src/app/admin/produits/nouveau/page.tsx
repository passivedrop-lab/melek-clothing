"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Upload, X, Check, ArrowLeft, Image as ImageIcon } from 'lucide-react'
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
        // Fake upload for UI demo
        const file = e.target.files?.[0]
        if (file) {
            const url = URL.createObjectURL(file)
            setImages(prev => [...prev, url])
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Save logic
        setTimeout(() => {
            router.push('/admin/produits')
        }, 1500)
    }

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <Link href="/admin/produits" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted hover:text-white mb-8 transition-colors">
                <ArrowLeft size={14} />
                Annuler et retourner
            </Link>

            <header className="mb-12">
                <h1 className="text-3xl font-serif mb-2">Nouveau Produit</h1>
                <p className="text-xs uppercase tracking-widest text-muted">Publiez une nouvelle pièce dans la boutique</p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-12">
                {/* Basic Info */}
                <section className="bg-secondary/20 p-8 border border-white/5 space-y-8">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-bold pb-4 border-b border-white/5 mb-6">Informations Générales</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold">Nom du Produit</label>
                            <input type="text" required className="w-full bg-background border border-white/10 px-4 py-3 text-xs focus:border-accent outline-none" placeholder="ex: Veste Vintage..." />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold">Catégorie</label>
                            <select className="w-full bg-background border border-white/10 px-4 py-3 text-xs focus:border-accent outline-none appearance-none">
                                {CATEGORIES.map(cat => <option key={cat} value={cat.toLowerCase()}>{cat}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold">Description</label>
                        <textarea rows={4} className="w-full bg-background border border-white/10 px-4 py-3 text-xs focus:border-accent outline-none resize-none" placeholder="Décrivez la pièce, son histoire, sa matière..." />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold">Prix (FCFA)</label>
                            <input type="number" required className="w-full bg-background border border-white/10 px-4 py-3 text-xs focus:border-accent outline-none" placeholder="ex: 45000" />
                        </div>
                    </div>
                </section>

                {/* Sizes */}
                <section className="bg-secondary/20 p-8 border border-white/5">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-bold pb-4 border-b border-white/5 mb-6">Tailles Disponibles</h2>
                    <div className="flex flex-wrap gap-4">
                        {SIZES.map(size => (
                            <button
                                type="button"
                                key={size}
                                onClick={() => toggleSize(size)}
                                className={`w-14 h-14 flex items-center justify-center border transition-all text-[10px] font-bold ${selectedSizes.includes(size) ? 'bg-accent border-accent text-black' : 'border-white/10 hover:border-white/30'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Images */}
                <section className="bg-secondary/20 p-8 border border-white/5">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-bold pb-4 border-b border-white/5 mb-6">Images du Produit</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {images.map((img, i) => (
                            <div key={i} className="aspect-[3/4] bg-white/5 relative group">
                                <img src={img} alt="" className="w-full h-full object-cover" />
                                <button
                                    type="button"
                                    onClick={() => setImages(prev => prev.filter((_, idx) => idx !== i))}
                                    className="absolute top-2 right-2 p-1 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <X size={12} />
                                </button>
                            </div>
                        ))}

                        <label className="aspect-[3/4] border-2 border-dashed border-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-accent/40 hover:bg-white/5 transition-all">
                            <Upload size={24} className="text-muted mb-2" />
                            <span className="text-[9px] uppercase tracking-widest text-muted">Ajouter</span>
                            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>
                    </div>
                    <p className="text-[9px] text-muted uppercase tracking-widest">Format recommandé: 3:4 • Max 5MB par image</p>
                </section>

                <div className="flex justify-end gap-6 pt-6">
                    <Link href="/admin/produits" className="btn-outline">Annuler</Link>
                    <button disabled={loading} className="btn-premium px-12">
                        {loading ? "Chargement..." : "Publier le produit"}
                    </button>
                </div>
            </form>
        </div>
    )
}
