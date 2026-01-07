"use client"

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingBag, ShieldCheck, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import confetti from 'canvas-confetti'

const PRODUCT_DATA: Record<string, any> = {
    '1': { id: '1', name: 'Veste Vintage en Cuir', price: 85000, category: 'Homme Heritage', description: 'Une pièce rare des années 90, en cuir véritable d\'Italie. Sa patine naturelle témoigne d\'un passé noble. Un veston qui transcende les époques.', image_url: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504', gallery: ['https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504', 'https://images.unsplash.com/photo-1551028719-00167b16eac5'], sizes: ['M', 'L', 'XL'] },
    '2': { id: '2', name: 'Robe en Soie Italienne', price: 45000, category: 'Femme Elégance', description: 'Fluidité et délicatesse pour cette robe en soie sauvage. Un tombé impeccable qui sublime la silhouette féminine avec une grace infinie.', image_url: 'https://images.unsplash.com/photo-1539109132314-34a936699561', sizes: ['S', 'M'] },
}

export default function ProductPage() {
    const { id } = useParams()
    const { addToCart } = useCart()
    const [selectedSize, setSelectedSize] = useState('')
    const [activeImage, setActiveImage] = useState(0)

    const product = PRODUCT_DATA[id as string]

    if (!product) return <div className="pt-40 text-center font-serif italic">Cette pièce s'est évaporée...</div>

    const formatPrice = (p: number) => {
        return new Intl.NumberFormat('fr-BJ', {
            style: 'currency',
            currency: 'XOF',
            maximumFractionDigits: 0
        }).format(p)
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("La distinction exige une taille. Veuillez en choisir une.")
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
            particleCount: 150,
            spread: 100,
            origin: { y: 0.5 },
            colors: ['#B8860B', '#ffffff', '#000000']
        })
    }

    return (
        <div className="pt-40 pb-40 bg-melek">
            <div className="container">
                <Link href="/boutique" className="inline-flex items-center gap-4 text-xs-caps text-muted hover:text-white mb-20 transition-colors group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                    Retour au catalogue
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                    {/* Visual Presentation */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                            className="aspect-[3/4] bg-secondary overflow-hidden shadow-2xl"
                        >
                            <img
                                src={[product.image_url, ...(product.gallery || [])][activeImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <div className="flex gap-4">
                            {[product.image_url, ...(product.gallery || [])].map((img, i) => (
                                <button
                                    key={i}
                                    className={`w-24 aspect-[3/4] bg-secondary border transition-all grayscale opacity-50 hover:opacity-100 ${activeImage === i ? 'border-accent opacity-100 grayscale-0' : 'border-transparent'}`}
                                    onClick={() => setActiveImage(i)}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Editorial Content */}
                    <div className="flex flex-col">
                        <header className="mb-12">
                            <p className="text-xs-caps text-accent mb-6">Pièces de Distinction</p>
                            <h1 className="text-5xl md:text-7xl mb-6">{product.name}</h1>
                            <p className="text-3xl font-serif italic text-white/80">{formatPrice(product.price)}</p>
                        </header>

                        <div className="mb-16 text-muted leading-loose font-light tracking-wide first-letter:text-4xl first-letter:font-serif first-letter:mr-2">
                            <p>{product.description}</p>
                        </div>

                        {/* Selection */}
                        <div className="mb-16">
                            <h3 className="text-xs-caps mb-8 font-bold">Sélection de la mesure</h3>
                            <div className="flex flex-wrap gap-4">
                                {product.sizes.map((size: string) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-16 h-16 flex items-center justify-center border transition-all text-xs font-bold ${selectedSize === size ? 'bg-white text-black border-white' : 'border-white/10 hover:border-white/30'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="btn-melek w-full py-6 text-xs mb-12 flex items-center justify-center gap-4"
                        >
                            <ShoppingBag size={18} strokeWidth={1} />
                            <span>Acquérir cette pièce</span>
                        </button>

                        <div className="space-y-6 pt-12 border-t border-white/5">
                            <div className="flex items-center gap-4 group">
                                <ShieldCheck size={20} className="text-accent" />
                                <p className="text-xs-caps text-muted group-hover:text-white transition-colors">Certification d'Authénticité Melek</p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <ChevronRight size={20} className="text-accent" />
                                <p className="text-xs-caps text-muted group-hover:text-white transition-colors">Expédition sécurisée sous 24h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
