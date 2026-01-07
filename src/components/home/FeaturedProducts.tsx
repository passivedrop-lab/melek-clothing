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
        <section className="bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-xs-caps text-accent mb-6">Sélection Curatée</h2>
                        <h3 className="text-5xl md:text-7xl">Les Pièces <br /><span className="italic font-light">Maîtresses</span></h3>
                    </motion.div>
                    <Link href="/boutique" className="text-xs-caps border-b border-white/20 pb-2 hover:border-white transition-all">
                        Explorer tout le catalogue
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
                    {FEATURED_PRODUCTS.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
