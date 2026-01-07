"use client"

import Link from 'next/link'
import Logo from './Logo'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/context/CartContext'
import CartSheet from '../cart/CartSheet'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const { totalItems } = useCart()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'Boutique', href: '/boutique' },
        { name: 'Homme', href: '/boutique?cat=homme' },
        { name: 'Femme', href: '/boutique?cat=femme' },
    ]

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-dark py-4' : 'bg-transparent py-6'}`}>
                <div className="container flex justify-between items-center">
                    <Link href="/">
                        <Logo />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs uppercase tracking-widest hover:text-accent transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 hover:text-accent transition-colors"
                        >
                            <ShoppingBag size={20} />
                            <AnimatePresence>
                                {totalItems > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute top-0 right-0 bg-accent text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                                    >
                                        {totalItems}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex md:hidden gap-4 items-center">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2"
                        >
                            <ShoppingBag size={20} />
                            {totalItems > 0 && (
                                <span className="absolute top-0 right-0 bg-accent text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 glass-dark border-t border-white/5 py-8 px-6 md:hidden"
                        >
                            <div className="flex flex-col gap-6 items-center">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-sm uppercase tracking-widest"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    )
}
