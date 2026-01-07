"use client"

import Link from 'next/link'
import Logo from './Logo'
import { ShoppingBag, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'
import CartSheet from '../cart/CartSheet'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const { totalItems } = useCart()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Collections', href: '/boutique' },
        { name: 'Homme', href: '/boutique?cat=Homme' },
        { name: 'Femme', href: '/boutique?cat=Femme' },
        { name: 'Héritage', href: '/' },
    ]

    return (
        <>
            <nav className={`nav-fixed ${isScrolled ? 'nav-scrolled' : ''}`}>
                <div className="container nav-content">
                    <Link href="/">
                        <Logo />
                    </Link>

                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="hover:opacity-60 transition-opacity">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            style={{ position: 'relative' }}
                        >
                            <ShoppingBag size={20} strokeWidth={1.5} />
                            {totalItems > 0 && (
                                <span style={{
                                    position: 'absolute', top: '-5px', right: '-5px',
                                    background: 'var(--accent)', fontSize: '0.5rem',
                                    width: '12px', height: '12px', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 'bold'
                                }}>
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <button className="md:hidden">
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </nav>

            <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    )
}
