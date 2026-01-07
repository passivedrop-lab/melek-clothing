"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Package, Tag, Eye, TrendingUp, History, Plus, Settings } from 'lucide-react'

const STATS = [
    { label: 'Curations', value: '12', icon: Package, trend: '+0%' },
    { label: 'Catégories', value: '5', icon: Tag, trend: 'stable' },
    { label: 'Passages', value: '0', icon: Eye, trend: '-' },
    { label: 'Désirs', value: '0', icon: TrendingUp, trend: '-' },
]

export default function AdminDashboard() {
    return (
        <div style={{ minHeight: '100vh' }}>
            <header style={{ marginBottom: '6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>Espace <span className="serif-italic">Prestige</span></h1>
                    <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.5em', color: 'var(--accent)' }}>
                        Direction Artistique & Gestion
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link href="/admin/reglages" style={{ opacity: 0.4 }}>
                        <Settings size={20} strokeWidth={1} />
                    </Link>
                </div>
            </header>

            {/* Stats - Grid of Light */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>
                {STATS.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        style={{
                            background: 'linear-gradient(135deg, #0a0a0a 0%, #050505 100%)',
                            border: '1px solid var(--border)',
                            padding: '3rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            position: 'absolute', top: '-20px', right: '-20px',
                            opacity: 0.05, transform: 'rotate(-20deg)'
                        }}>
                            <stat.icon size={100} strokeWidth={1} />
                        </div>

                        <stat.icon size={20} style={{ color: 'var(--accent)', marginBottom: '2.5rem' }} strokeWidth={1} />
                        <p style={{ fontSize: '2.5rem', fontFamily: 'Bodoni Moda', marginBottom: '0.5rem', color: 'white' }}>{stat.value}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.4 }}>{stat.label}</p>
                            <span style={{ fontSize: '0.55rem', color: stat.trend === '+' ? '#00ff00' : 'var(--muted)', opacity: 0.6 }}>{stat.trend}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem' }}>
                {/* Gallery Readiness */}
                <div>
                    <h2 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '3rem', color: 'var(--accent)' }}>
                        État de la Galerie
                    </h2>
                    <div style={{ padding: '6rem 3rem', border: '1px dashed var(--border)', textAlign: 'center' }}>
                        <History size={32} strokeWidth={1} style={{ opacity: 0.2, marginBottom: '2.5rem' }} />
                        <p style={{ fontSize: '1rem', fontFamily: 'Bodoni Moda', fontStyle: 'italic', opacity: 0.5, marginBottom: '2.5rem' }}>
                            "Le silence est l'ultime luxe."
                        </p>
                        <Link href="/admin/produits/nouveau" className="btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '0.6rem' }}>
                            <Plus size={14} style={{ marginRight: '1rem' }} />
                            Initier une Curation
                        </Link>
                    </div>
                </div>

                {/* Global Overview */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <h2 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--accent)' }}>
                        Système & Accès
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {['Vérification Sécurité', 'Bases de Données Supabase', 'Passerelle WhatsApp'].map((sys) => (
                            <div key={sys} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: '#080808', border: '1px solid var(--border)' }}>
                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{sys}</span>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ff00', boxShadow: '0 0 10px #00ff00' }}></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
