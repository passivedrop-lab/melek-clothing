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
        { name: 'Collections', href: '/boutique' },
        { name: 'Homme', href: '/boutique?cat=homme' },
        { name: 'Femme', href: '/boutique?cat=femme' },
        { name: 'L\'Héritage', href: '/' },
    ]

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'glass py-4' : 'bg-transparent py-10'}`}>
                <div className="container flex justify-between items-center">
                    <Link href="/" className="hover:opacity-80 transition-opacity">
                        <Logo />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-12 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs-caps hover:text-accent transition-colors tracking-[0.3em]"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 hover:text-accent transition-colors"
                        >
                            <ShoppingBag size={18} strokeWidth={1.5} />
                            <AnimatePresence>
                                {totalItems > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute -top-1 -right-1 bg-accent text-[8px] font-bold w-3.5 h-3.5 flex items-center justify-center text-white"
                                    >
                                        {totalItems}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex md:hidden gap-6 items-center">
                        <button onClick={() => setIsCartOpen(true)} className="relative p-2">
                            <ShoppingBag size={18} strokeWidth={1.5} />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-accent text-[8px] font-bold w-3.5 h-3.5 flex items-center justify-center text-white">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                            {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                            className="fixed inset-0 bg-background/98 z-40 md:hidden flex flex-col items-center justify-center gap-10"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-serif italic tracking-widest hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-10 pt-10 border-t border-white/5 w-40 text-center">
                                <Logo />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    )
}
