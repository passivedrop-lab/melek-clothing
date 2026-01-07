"use client"

import { useState } from 'react'
import ProductCard from '@/components/ui/ProductCard'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

const ALL_PRODUCTS = [
    { id: '1', name: 'Veste Vintage en Cuir', price: 85000, category: 'Homme', image_url: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504' },
    { id: '2', name: 'Robe en Soie Italienne', price: 45000, category: 'Femme', image_url: 'https://images.unsplash.com/photo-1539109132314-34a936699561' },
    { id: '3', name: 'Pantalon Classique Noir', price: 25000, category: 'Pantalons', image_url: 'https://images.unsplash.com/photo-1624371414361-e6e0ea2c652c' },
    { id: '4', name: 'Sac à Main de Luxe', price: 120000, category: 'Accessoires', image_url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa' },
    { id: '5', name: 'Chemise à Motifs Silk', price: 32000, category: 'Homme', image_url: 'https://images.unsplash.com/photo-1598033129183-c4f50c7176c8' },
    { id: '6', name: 'Jupe Plissée Vintage', price: 28000, category: 'Femme', image_url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
]

const CATEGORIES = ['Tous', 'Homme', 'Femme', 'Accessoires', 'Pantalons', 'Jeans']

export default function BoutiquePage() {
    const [selectedCategory, setSelectedCategory] = useState('Tous')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredProducts = ALL_PRODUCTS.filter(product => {
        const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="pt-48 pb-40 min-h-screen bg-melek">
            <div className="container">
                <header className="mb-32 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-6xl md:text-[8rem] leading-none mb-8">La Curathèque.</h1>
                        <p className="text-xs-caps text-muted">Exploration esthétique de pièces uniques.</p>
                    </motion.div>
                </header>

                {/* Filters & Search - Minimal Edition */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-20 pb-10 border-b border-white/5">
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`text-xs-caps transition-all pb-2 border-b-2 ${selectedCategory === cat ? 'border-accent text-white' : 'border-transparent text-muted hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full lg:w-80">
                        <Search size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
                        <input
                            type="text"
                            placeholder="QUÊTE D'UNE PIÈCE..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-xs tracking-widest uppercase focus:border-accent outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Product Grid - Wide Spacing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-24">
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.05 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="py-40 text-center text-muted italic">
                        <p className="text-sm">L'exception que vous cherchez n'est pas encore ici.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
