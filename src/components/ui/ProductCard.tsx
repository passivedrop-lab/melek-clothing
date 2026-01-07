"use client"

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
        <div className="product-card">
            <Link href={`/produit/${product.id}`}>
                <div className="product-img-wrapper">
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className="product-img"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1591047139829-d91aec36adea?q=80&w=600&auto=format&fit=crop';
                        }}
                    />
                </div>
            </Link>

            <div className="product-info">
                <p className="product-cat">{product.category}</p>
                <Link href={`/produit/${product.id}`}>
                    <h4 className="product-name">{product.name}</h4>
                </Link>
                <p className="product-price">{formatPrice(product.price)}</p>
            </div>
        </div>
    )
}
