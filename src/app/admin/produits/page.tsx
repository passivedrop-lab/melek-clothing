"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Search, Edit2, Trash2, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

// Placeholder
const ALL_PRODUCTS = [
    { id: '1', name: 'Veste Vintage en Cuir', price: 85000, category: 'Homme', status: 'En ligne' },
    { id: '2', name: 'Robe en Soie Italienne', price: 45000, category: 'Femme', status: 'En ligne' },
    { id: '3', name: 'Pantalon Classique Noir', price: 25000, category: 'Pantalons', status: 'Brouillon' },
]

export default function AdminProductsPage() {
    const [search, setSearch] = useState('')

    const formatPrice = (p: number) => {
        return new Intl.NumberFormat('fr-BJ', {
            style: 'currency',
            currency: 'XOF',
            maximumFractionDigits: 0
        }).format(p)
    }

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-serif mb-2">Gestion des Produits</h1>
                    <p className="text-xs uppercase tracking-widest text-muted">Aperçu et modification de votre inventaire</p>
                </div>
                <Link href="/admin/produits/nouveau" className="btn-premium">
                    <Plus size={16} />
                    Ajouter un produit
                </Link>
            </header>

            {/* Toolbar */}
            <div className="flex flex-wrap gap-4 py-6 border-y border-white/5">
                <div className="relative flex-1 min-w-[300px]">
                    <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                    <input
                        type="text"
                        placeholder="RECHERCHER UN PRODUIT..."
                        className="w-full bg-secondary border-none px-12 py-3 text-[10px] tracking-widest uppercase focus:ring-1 focus:ring-accent outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button className="btn-outline flex items-center gap-2">
                    <Filter size={14} />
                    Filtrer
                </button>
            </div>

            {/* Product Table */}
            <div className="bg-secondary/20 border border-white/5 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold">Produit</th>
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold">Catégorie</th>
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold">Prix</th>
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold">Statut</th>
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {ALL_PRODUCTS.map((product) => (
                            <tr key={product.id} className="hover:bg-white/5 transition-all group">
                                <td className="px-6 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-16 bg-white/10 flex-shrink-0" />
                                        <span className="text-xs font-bold">{product.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-6 text-xs text-muted font-serif italic">{product.category}</td>
                                <td className="px-6 py-6 text-xs font-serif">{formatPrice(product.price)}</td>
                                <td className="px-6 py-6">
                                    <span className={`text-[9px] uppercase tracking-widest px-2 py-1 ${product.status === 'En ligne' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                                        {product.status}
                                    </span>
                                </td>
                                <td className="px-6 py-6 text-right">
                                    <div className="flex justify-end gap-4">
                                        <button className="text-muted hover:text-white transition-colors">
                                            <Edit2 size={14} />
                                        </button>
                                        <button className="text-muted hover:text-red-400 transition-colors">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
