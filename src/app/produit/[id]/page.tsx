"use client"

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowLeft, ShoppingBag, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import confetti from 'canvas-confetti'

// Placeholder
const PRODUCT_DATA: Record<string, any> = {
    '1': { id: '1', name: 'Veste Vintage en Cuir', price: 85000, category: 'Homme', description: 'Une pièce unique des années 90, en cuir véritable d\'Italie. Parfaitement conservée avec une patine naturelle exceptionnelle. Une exclusivité Melek.', image_url: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504', gallery: ['https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504', 'https://images.unsplash.com/photo-1551028719-00167b16eac5'], sizes: ['M', 'L', 'XL'] },
    '2': { id: '2', name: 'Robe en Soie Italienne', price: 45000, category: 'Femme', description: 'Légèreté et élégance absolue. Cette robe en soie sauvage offre une silhouette moderne et intemporelle.', image_url: 'https://images.unsplash.com/photo-1539109132314-34a936699561', sizes: ['S', 'M'] },
}

export default function ProductPage() {
    const { id } = useParams()
    const router = useRouter()
    const { addToCart } = useCart()
    const [selectedSize, setSelectedSize] = useState('')
    const [activeImage, setActiveImage] = useState(0)

    const product = PRODUCT_DATA[id as string]

    if (!product) return <div className="pt-40 text-center">Produit non trouvé</div>

    const formatPrice = (p: number) => {
        return new Intl.NumberFormat('fr-BJ', {
            style: 'currency',
            currency: 'XOF',
            maximumFractionDigits: 0
        }).format(p)
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Veuillez sélectionner une taille")
            return
        }

        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image_url: product.image_url,
            size: selectedSize
        })

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#D4AF37', '#ffffff', '#000000']
        })
    }

    return (
        <div className="pt-32 pb-20">
            <div className="container">
                <Link href="/boutique" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted hover:text-white mb-12 transition-colors">
                    <ArrowLeft size={14} />
                    Retour à la boutique
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Gallery */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="aspect-[3/4] bg-secondary overflow-hidden"
                        >
                            <img
                                src={product.image_url}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <div className="grid grid-cols-4 gap-4">
                            {[product.image_url, ...(product.gallery || [])].map((img, i) => (
                                <button
                                    key={i}
                                    className={`aspect-square bg-secondary border-2 transition-all ${activeImage === i ? 'border-accent' : 'border-transparent'}`}
                                    onClick={() => setActiveImage(i)}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col">
                        <div className="mb-8">
                            <p className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4">{product.category}</p>
                            <h1 className="text-4xl md:text-5xl mb-4">{product.name}</h1>
                            <p className="text-2xl font-serif text-white/90">{formatPrice(product.price)}</p>
                        </div>

                        <div className="mb-10 text-muted leading-loose text-sm">
                            <p>{product.description}</p>
                        </div>

                        {/* Size selection */}
                        <div className="mb-12">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] uppercase tracking-widest font-bold">Choisir la Taille</span>
                                <span className="text-[10px] uppercase tracking-widest text-muted">Guide des tailles</span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map((size: string) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-14 h-14 flex items-center justify-center border transition-all text-xs ${selectedSize === size ? 'bg-white text-black border-white' : 'border-white/10 hover:border-white/30'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="btn-premium w-full py-5 text-sm mb-8"
                        >
                            <ShoppingBag size={18} />
                            Ajouter au panier
                        </button>

                        <div className="grid grid-cols-2 gap-4 py-8 border-t border-white/5">
                            <div className="flex items-center gap-3">
                                <ShieldCheck size={20} className="text-accent" />
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold">Qualité Certifiée</p>
                                    <p className="text-[9px] text-muted uppercase tracking-widest">Pièce authentifiée</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-accent/20 flex items-center justify-center rounded-full">
                                    <ChevronRight size={12} className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold">Livraison Rapide</p>
                                    <p className="text-[9px] text-muted uppercase tracking-widest">Partout au Bénin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
