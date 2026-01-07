"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import ProductCard from '../ui/ProductCard'

const FEATURED_PRODUCTS = [
    { id: '1', name: 'Veste Vintage en Cuir', price: 85000, category: 'Homme Heritage', image_url: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=600&auto=format&fit=crop' },
    { id: '2', name: 'Robe en Soie Italienne', price: 45000, category: 'Femme Elégance', image_url: 'https://images.unsplash.com/photo-1539109132314-34a936699561?q=80&w=600&auto=format&fit=crop' },
    { id: '3', name: 'Pantalon Classique Noir', price: 25000, category: 'Essentiels', image_url: 'https://images.unsplash.com/photo-1624371414361-e6e0ea2c652c?q=80&w=600&auto=format&fit=crop' },
    { id: '4', name: 'Sac à Main de Luxe', price: 120000, category: 'Accessoires', image_url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop' }
]

export default function FeaturedProducts() {
    return (
        <section>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5em', color: 'var(--accent)', marginBottom: '1rem' }}>
                        Sélection de Saison
                    </h2>
                    <h3 style={{ fontSize: '3.5rem' }}>
                        Les Pièces <span className="serif-italic">Iconiques</span>
                    </h3>
                </div>

                <div className="product-grid">
                    {FEATURED_PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                    <Link href="/boutique" className="serif-italic" style={{ borderBottom: '1px solid var(--accent)', paddingBottom: '0.5rem', opacity: 0.8 }}>
                        Voir tout le catalogue
                    </Link>
                </div>
            </div>
        </section>
    )
}
