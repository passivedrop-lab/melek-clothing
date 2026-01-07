"use client"

import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import { LayoutDashboard, Package, Tag, History, LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const isLoginPage = pathname === '/admin/login'
    if (isLoginPage) return <>{children}</>

    const menuItems = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Produits', href: '/admin/produits', icon: Package },
        { name: 'Catégories', href: '/admin/categories', icon: Tag },
        { name: 'Activités', href: '/admin/activites', icon: History },
    ]

    return (
        <div className="min-h-screen bg-background flex">
            {/* Admin Sidebar */}
            <aside className="w-64 bg-secondary border-r border-white/5 flex flex-col hidden md:flex">
                <div className="p-8 border-b border-white/5">
                    <Logo />
                    <p className="text-[9px] uppercase tracking-[0.2em] text-accent mt-2 font-bold">Admin Panel</p>
                </div>

                <nav className="flex-1 p-6 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-4 px-4 py-3 text-xs uppercase tracking-widest transition-all ${pathname === item.href ? 'bg-white text-black' : 'hover:bg-white/5 text-muted hover:text-white'
                                }`}
                        >
                            <item.icon size={16} />
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-6 border-t border-white/5">
                    <button className="flex items-center gap-4 px-4 py-3 text-xs uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors w-full">
                        <LogOut size={16} />
                        Déconnexion
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 glass-dark sticky top-0 z-40 md:hidden">
                    <Logo />
                    {/* Mobile menu toggle would go here */}
                </header>
                <div className="p-10">
                    {children}
                </div>
            </main>
        </div>
    )
}
