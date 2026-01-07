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
        <div style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
            <div className="container">
                <header style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1.5rem' }}>La Curathèque.</h1>
                        <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.4em', color: 'var(--accent)' }}>
                            Exploration esthétique de pièces uniques.
                        </p>
                    </motion.div>
                </header>

                {/* Filters & Search */}
                <div style={{
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
                    alignItems: 'center', gap: '2rem', marginBottom: '5rem',
                    paddingBottom: '2rem', borderBottom: '1px solid var(--border)'
                }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em',
                                    paddingBottom: '0.5rem', borderBottom: '2px solid',
                                    borderColor: selectedCategory === cat ? 'var(--accent)' : 'transparent',
                                    color: selectedCategory === cat ? 'white' : 'var(--muted)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div style={{ position: 'relative', width: '300px' }}>
                        <Search size={14} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }} />
                        <input
                            type="text"
                            placeholder="RECHERCHER..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%', background: 'none', border: 'none',
                                borderBottom: '1px solid var(--border)', padding: '1rem 0',
                                color: 'white', fontSize: '0.7rem', letterSpacing: '0.25em',
                                outline: 'none'
                            }}
                        />
                    </div>
                </div>

                {/* Product Grid */}
                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '10rem 0', opacity: 0.4, fontStyle: 'italic' }}>
                        L'exception que vous cherchez n'est pas encore ici.
                    </div>
                )}
            </div>
        </div>
    )
}
