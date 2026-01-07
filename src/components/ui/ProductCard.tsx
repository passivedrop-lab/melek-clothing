"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'

interface Product {
    id: string
    name: string
    price: number
    category: string
    image_url: string
    sizes?: string[]
}

export default function ProductCard({ product }: { product: Product }) {
    // Format price for Benin (FCFA)
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fr-BJ', {
            style: 'currency',
            currency: 'XOF',
            maximumFractionDigits: 0
        }).format(price)
    }

    return (
        <div className="product-card group">
            <Link href={`/produit/${product.id}`} className="block">
                <div className="image-container relative bg-secondary overflow-hidden">
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Quick add button */}
                    <button className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black flex items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-accent">
                        <Plus size={20} />
                    </button>
                </div>
            </Link>

            <div className="info">
                <div className="flex justify-between items-start mb-1">
                    <p className="text-[10px] uppercase tracking-widest text-muted">{product.category}</p>
                </div>
                <Link href={`/produit/${product.id}`}>
                    <h4 className="text-sm font-medium tracking-wide mb-2 hover:text-accent transition-colors">
                        {product.name}
                    </h4>
                </Link>
                <p className="text-sm font-serif">{formatPrice(product.price)}</p>
            </div>
        </div>
    )
}
