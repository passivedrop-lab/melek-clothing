"use client"

import { Plus } from 'lucide-react'
import Link from 'next/link'

interface Product {
    id: string
    name: string
    price: number
    category: string
    image_url: string
}

export default function ProductCard({ product }: { product: Product }) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fr-BJ', {
            style: 'currency',
            currency: 'XOF',
            maximumFractionDigits: 0
        }).format(price)
    }

    return (
        <div className="card-melek group">
            <Link href={`/produit/${product.id}`} className="block">
                <div className="card-melek-image relative">
                    <img
                        src={product.image_url}
                        alt={product.name}
                        loading="lazy"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                    {/* Direct Add */}
                    <button className="absolute top-6 right-6 w-12 h-12 bg-white text-black opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-accent focus:outline-none flex items-center justify-center">
                        <Plus size={18} />
                    </button>
                </div>
            </Link>

            <div className="flex flex-col items-center text-center">
                <span className="text-xs-caps text-accent mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">{product.category}</span>
                <Link href={`/produit/${product.id}`}>
                    <h4 className="text-sm font-light tracking-[0.15em] uppercase mb-3 hover:text-accent transition-colors">
                        {product.name}
                    </h4>
                </Link>
                <p className="text-xs font-serif italic text-muted tracking-widest">{formatPrice(product.price)}</p>
            </div>
        </div>
    )
}
