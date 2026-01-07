"use client"

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingBag, ShieldCheck } from 'lucide-react'
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

    if (!product) return <div style={{ textAlign: 'center', padding: '10rem 0', fontStyle: 'italic' }}>Cette pièce s'est évaporée...</div>

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
        <div style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
            <div className="container">
                <Link href="/boutique" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6 }}>
                    <ArrowLeft size={16} />
                    Retour au catalogue
                </Link>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>
                    {/* Visuals */}
                    <div>
                        <div style={{ aspectRatio: '4/5', background: '#111', overflow: 'hidden', marginBottom: '1.5rem' }}>
                            <img
                                src={[product.image_url, ...(product.gallery || [])][activeImage]}
                                alt={product.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[product.image_url, ...(product.gallery || [])].map((img, i) => (
                                <button
                                    key={i}
                                    style={{ width: '80px', height: '100px', opacity: activeImage === i ? 1 : 0.4, transition: '0.3s' }}
                                    onClick={() => setActiveImage(i)}
                                >
                                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', border: activeImage === i ? '1px solid var(--accent)' : 'none' }} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ color: 'var(--accent)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1rem' }}>
                            {product.category}
                        </span>
                        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{product.name}</h1>
                        <p style={{ fontSize: '2rem', fontFamily: 'Bodoni Moda', fontStyle: 'italic', marginBottom: '3rem', opacity: 0.8 }}>
                            {formatPrice(product.price)}
                        </p>

                        <div style={{ marginBottom: '4rem', opacity: 0.7, lineHeight: '1.8', fontSize: '1rem' }}>
                            <p>{product.description}</p>
                        </div>

                        <div style={{ marginBottom: '4rem' }}>
                            <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                                Mesure du vêtement
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {product.sizes.map((size: string) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        style={{
                                            width: '60px', height: '60px', border: '1px solid',
                                            borderColor: selectedSize === size ? 'white' : 'var(--border)',
                                            background: selectedSize === size ? 'white' : 'transparent',
                                            color: selectedSize === size ? 'black' : 'white',
                                            fontSize: '0.8rem', fontWeight: 'bold', transition: '0.3s'
                                        }}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="btn-primary"
                            style={{ padding: '2rem', marginBottom: '3rem', width: '100%' }}
                        >
                            <ShoppingBag size={20} style={{ marginRight: '1rem' }} />
                            Acquérir cette pièce
                        </button>

                        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.6 }}>
                                <ShieldCheck size={20} className="text-accent" />
                                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Authénticité Garantie Melek</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
