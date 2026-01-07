"use client"

import { useState } from 'react'
import ProductCard from '@/components/ui/ProductCard'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'

// Placeholder for now
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
        <div className="pt-32 pb-20">
            <div className="container">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-6xl mb-4">La Boutique</h1>
                    <p className="text-muted uppercase tracking-widest text-xs">Explorez notre univers selectionné</p>
                </header>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 py-6 border-y border-white/5">
                    <div className="flex flex-wrap gap-4">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`text-[10px] uppercase tracking-widest px-4 py-2 border transition-all ${selectedCategory === cat ? 'bg-white text-black border-white' : 'border-white/10 hover:border-white/30'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-64">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                        <input
                            type="text"
                            placeholder="RECHERCHER..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-secondary border-none px-10 py-3 text-[10px] tracking-widest uppercase focus:ring-1 focus:ring-accent outline-none"
                        />
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="py-32 text-center opacity-40">
                        <p className="text-xs uppercase tracking-widest">Aucun produit ne correspond à votre recherche</p>
                    </div>
                )}
            </div>
        </div>
    )
}
