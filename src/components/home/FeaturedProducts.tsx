"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import ProductCard from '../ui/ProductCard'

// Placeholder data for demo
const FEATURED_PRODUCTS = [
    {
        id: '1',
        name: 'Veste Vintage en Cuir',
        price: 85000,
        category: 'Homme',
        image_url: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=600&auto=format&fit=crop',
        sizes: ['M', 'L']
    },
    {
        id: '2',
        name: 'Robe en Soie Italienne',
        price: 45000,
        category: 'Femme',
        image_url: 'https://images.unsplash.com/photo-1539109132314-34a936699561?q=80&w=600&auto=format&fit=crop',
        sizes: ['S', 'M']
    },
    {
        id: '3',
        name: 'Pantalon Classique Noir',
        price: 25000,
        category: 'Pantalons',
        image_url: 'https://images.unsplash.com/photo-1624371414361-e6e0ea2c652c?q=80&w=600&auto=format&fit=crop',
        sizes: ['32', '34', '36']
    },
    {
        id: '4',
        name: 'Sac à Main de Luxe',
        price: 120000,
        category: 'Accessoires',
        image_url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop',
        sizes: ['Tunique']
    }
]

export default function FeaturedProducts() {
    return (
        <section className="py-32 bg-background">
            <div className="container">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-accent uppercase tracking-widest text-sm font-bold mb-4">Sélection Premium</h2>
                        <h3 className="text-4xl md:text-5xl">Nos Pièces <span className="italic font-light">Iconiques</span></h3>
                    </div>
                    <Link href="/boutique" className="hidden md:block text-xs uppercase tracking-widest hover:text-accent transition-colors border-b border-white/20 pb-1">
                        Voir tout le catalogue
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURED_PRODUCTS.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <Link href="/boutique" className="btn-outline w-full">
                        Tout voir
                    </Link>
                </div>
            </div>
        </section>
    )
}
