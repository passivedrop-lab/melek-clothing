"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Package, Tag, Eye, TrendingUp, History } from 'lucide-react'

const STATS = [
    { label: 'Total Produits', value: '124', icon: Package, trend: '+12%' },
    { label: 'Catégories', value: '5', icon: Tag, trend: 'stable' },
    { label: 'Vues Site', value: '1.2k', icon: Eye, trend: '+45%' },
    { label: 'Taux Conv.', value: '3.2%', icon: TrendingUp, trend: '+0.4%' },
]

const ACTIVITIES = [
    { id: 1, admin: 'Deo', action: 'Ajout Produit', target: 'Veste Cuir', date: 'Il y a 2h' },
    { id: 2, admin: 'Admin Mel', action: 'Modif Prix', target: 'Robe Soie', date: 'Il y a 5h' },
    { id: 3, admin: 'Deo', action: 'Nouv. Cat.', target: 'Accessoires', date: 'Hier' },
]

export default function AdminDashboard() {
    return (
        <div>
            <header style={{ marginBottom: '5rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Vue d'Ensemble</h1>
                <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.4em', color: 'var(--accent)' }}>
                    Centre de Contrôle Melek Héritage
                </p>
            </header>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                {STATS.map((stat) => (
                    <div key={stat.label} style={{ background: '#0a0a0a', border: '1px solid var(--border)', padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <stat.icon size={20} style={{ color: 'var(--accent)' }} strokeWidth={1} />
                            <span style={{ fontSize: '0.6rem', color: '#00ff00' }}>{stat.trend}</span>
                        </div>
                        <p style={{ fontSize: '2rem', fontFamily: 'Bodoni Moda', marginBottom: '0.5rem' }}>{stat.value}</p>
                        <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5 }}>{stat.label}</p>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                {/* Recent Activities */}
                <div>
                    <h2 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2.5rem', fontWeight: 'bold' }}>
                        Traces Récentes
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {ACTIVITIES.map((log) => (
                            <div key={log.id} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                                <div style={{ width: '40px', height: '40px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <History size={16} style={{ color: 'var(--accent)' }} strokeWidth={1} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.2rem' }}>{log.action}: {log.target}</p>
                                    <p style={{ fontSize: '0.6rem', opacity: 0.4 }}>{log.admin} • {log.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link href="/admin/activites" style={{ display: 'inline-block', marginTop: '2rem', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>
                        Voir tout l'historique
                    </Link>
                </div>

                {/* Quick Actions */}
                <div style={{ background: 'var(--accent)', padding: '3rem', color: 'white' }}>
                    <h2 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2.5rem', fontWeight: 'bold' }}>
                        Actions Rapides
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Link href="/admin/produits/nouveau" style={{ background: 'white', color: 'black', padding: '1.5rem', textAlign: 'center', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Ajouter un produit
                        </Link>
                        <Link href="/admin/categories" style={{ border: '1px solid white', color: 'white', padding: '1.5rem', textAlign: 'center', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Gérer les catégories
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
