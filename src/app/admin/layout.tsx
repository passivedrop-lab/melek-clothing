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
        { name: 'Aperçu', href: '/admin', icon: LayoutDashboard },
        { name: 'Curations', href: '/admin/produits', icon: Package },
        { name: 'Archives', href: '/admin/categories', icon: Tag },
        { name: 'Traces', href: '/admin/activites', icon: History },
    ]

    return (
        <div className="min-h-screen bg-background flex">
            {/* Editorial Admin Sidebar */}
            <aside className="w-80 bg-background border-r border-white/5 flex flex-col hidden lg:flex">
                <div className="p-12 mb-10">
                    <Logo />
                </div>

                <nav className="flex-1 px-8 space-y-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-6 px-6 py-4 text-xs-caps transition-all ${pathname === item.href ? 'bg-white text-black font-bold' : 'hover:bg-white/5 text-muted hover:text-white'
                                }`}
                        >
                            <item.icon size={16} strokeWidth={1} />
                            <span className="tracking-[0.3em]">{item.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-8 mt-auto">
                    <button className="flex items-center gap-6 px-6 py-4 text-xs-caps text-muted hover:text-red-400 transition-colors w-full group">
                        <LogOut size={16} strokeWidth={1} />
                        <span className="tracking-[0.3em] group-hover:translate-x-1 transition-transform">Déconnexion</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto bg-melek">
                <header className="h-24 border-b border-white/5 flex items-center justify-between px-12 glass sticky top-0 z-40 lg:hidden">
                    <Logo />
                    <button className="text-white"><Menu size={24} strokeWidth={1} /></button>
                </header>
                <div className="p-8 lg:p-20">
                    {children}
                </div>
            </main>
        </div>
    )
}
