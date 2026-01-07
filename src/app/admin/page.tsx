"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Package, Tag, Eye, TrendingUp, History } from 'lucide-react'

const STATS = [
    { name: 'Total Produits', value: '124', icon: Package, color: 'text-blue-400' },
    { name: 'Catégories', value: '5', icon: Tag, color: 'text-purple-400' },
    { name: 'Vues Site', value: '1.2k', icon: Eye, color: 'text-accent' },
    { name: 'Conversion', value: '12%', icon: TrendingUp, color: 'text-green-400' },
]

const RECENT_ACTIVITIES = [
    { id: 1, action: 'Produit Ajouté', target: 'Veste Vintage en Cuir', admin: 'Deo', time: 'Il y a 2h' },
    { id: 2, action: 'Prix Modifié', target: 'Robe en Soie Italienne', admin: 'Admin Mel', time: 'Il y a 5h' },
    { id: 3, action: 'Nouvelle Catégorie', target: 'Jeans', admin: 'Deo', time: 'Hier' },
]

export default function DashboardPage() {
    return (
        <div className="space-y-12">
            <header>
                <h1 className="text-3xl font-serif mb-2">Bienvenue sur le Dashboard</h1>
                <p className="text-xs uppercase tracking-widest text-muted">Aperçu global de votre activité</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {STATS.map((stat, index) => (
                    <motion.div
                        key={stat.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-secondary p-8 border border-white/5 group hover:border-accent/30 transition-all"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <stat.icon size={20} className={stat.color} />
                            <span className="text-[10px] text-green-400 font-bold">+5%</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-muted mb-1">{stat.name}</p>
                        <h3 className="text-2xl font-serif">{stat.value}</h3>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Recent Activity */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                        <History size={18} className="text-accent" />
                        <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Activités Récentes</h2>
                    </div>
                    <div className="bg-secondary/30 border border-white/5">
                        {RECENT_ACTIVITIES.map((activity) => (
                            <div key={activity.id} className="flex items-center justify-between p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest">{activity.action}</p>
                                        <p className="text-[10px] text-muted">{activity.target}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-bold uppercase tracking-widest">{activity.admin}</p>
                                    <p className="text-[10px] text-muted">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="text-[10px] uppercase tracking-widest text-accent hover:text-white transition-colors">
                        Voir tout l'historique
                    </button>
                </div>

                {/* Quick Actions */}
                <div className="space-y-6">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Actions Rapides</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <Link href="/admin/produits/nouveau" className="btn-premium w-full">Ajouter un produit</Link>
                        <Link href="/admin/categories" className="btn-outline w-full text-center">Gérer les catégories</Link>
                        <Link href="/" target="_blank" className="text-center text-[10px] uppercase tracking-widest mt-4 text-muted hover:text-white transition-colors">Voir le site en direct</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
