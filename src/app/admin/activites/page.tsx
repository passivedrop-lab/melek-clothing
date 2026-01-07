"use client"

import { History, User, Clock, ArrowRight } from 'lucide-react'

const LOGS = [
    { id: 1, admin: 'Deo', action: 'AJOUT_PRODUIT', target: 'Veste Vintage en Cuir', date: '07 Jan 2026', time: '14:20' },
    { id: 2, admin: 'Admin Mel', action: 'MODIF_PRIX', target: 'Robe en Soie Italienne', date: '07 Jan 2026', time: '12:05' },
    { id: 3, admin: 'Deo', action: 'AJOUT_CATEGORIE', target: 'Jeans', date: '06 Jan 2026', time: '18:45' },
    { id: 4, admin: 'Admin Mel', action: 'SUPPR_PRODUIT', target: 'Chemise à Carreaux (Old)', date: '06 Jan 2026', time: '10:30' },
]

export default function AdminActivitiesPage() {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-serif mb-2">Historique des Activités</h1>
                <p className="text-xs uppercase tracking-widest text-muted">Traçabilité complète de toutes les opérations</p>
            </header>

            <div className="space-y-4">
                {LOGS.map((log) => (
                    <div key={log.id} className="bg-secondary/20 p-6 border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-white/20 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm">
                                <History size={16} className="text-accent" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-accent/10 text-accent rounded-full">
                                        {log.action.replace('_', ' ')}
                                    </span>
                                    <ArrowRight size={10} className="text-muted" />
                                    <span className="text-xs font-medium">{log.target}</span>
                                </div>
                                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-muted">
                                    <span className="flex items-center gap-1"><User size={10} /> {log.admin}</span>
                                    <span className="flex items-center gap-1"><Clock size={10} /> {log.date} à {log.time}</span>
                                </div>
                            </div>
                        </div>
                        <button className="text-[9px] uppercase tracking-widest text-muted hover:text-white transition-colors border-b border-transparent hover:border-white">
                            Détails techniques
                        </button>
                    </div>
                ))}
            </div>

            <div className="pt-10 text-center">
                <button className="btn-outline text-[10px] px-8">Charger plus d'activités</button>
            </div>
        </div>
    )
}
