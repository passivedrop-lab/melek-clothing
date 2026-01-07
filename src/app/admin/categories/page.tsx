"use client"

import { useState } from 'react'
import { Plus, Tag, Edit2, Trash2 } from 'lucide-react'

const INITIAL_CATEGORIES = [
    { id: '1', name: 'Homme', slug: 'homme', count: 42 },
    { id: '2', name: 'Femme', slug: 'femme', count: 38 },
    { id: '3', name: 'Accessoires', slug: 'accessoires', count: 12 },
    { id: '4', name: 'Pantalons', slug: 'pantalons', count: 25 },
    { id: '5', name: 'Jeans', slug: 'jeans', count: 18 },
]

export default function AdminCategoriesPage() {
    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-serif mb-2">Gestion des Catégories</h1>
                    <p className="text-xs uppercase tracking-widest text-muted">Organisez votre catalogue par univers</p>
                </div>
                <button className="btn-premium">
                    <Plus size={16} />
                    Nouvelle Catégorie
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {INITIAL_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="bg-secondary/30 p-8 border border-white/5 flex justify-between items-center group hover:border-accent/30 transition-all">
                        <div className="flex items-center gap-4">
                            <Tag size={18} className="text-accent" />
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest">{cat.name}</h3>
                                <p className="text-[10px] text-muted uppercase tracking-widest">{cat.count} PRODUITS</p>
                            </div>
                        </div>
                        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-muted hover:text-white"><Edit2 size={14} /></button>
                            <button className="text-muted hover:text-red-400"><Trash2 size={14} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
