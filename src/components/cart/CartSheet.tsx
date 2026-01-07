"use client"

import { useCart } from '@/context/CartContext'
import { X, Trash2, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { generateWhatsAppLink } from '@/lib/whatsapp'

export default function CartSheet({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const { items, removeFromCart, totalPrice, totalItems } = useCart()

    const formatPrice = (p: number) => {
        return new Intl.NumberFormat('fr-BJ', {
            style: 'currency',
            currency: 'XOF',
            maximumFractionDigits: 0
        }).format(p)
    }

    const handleCheckout = () => {
        if (items.length === 0) return
        const whatsappUrl = generateWhatsAppLink(items, totalPrice)
        window.open(whatsappUrl, '_blank')
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 110, backdropFilter: 'blur(5px)' }}
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                        style={{
                            position: 'fixed', top: 0, right: 0, bottom: 0,
                            width: '100%', maxWidth: '500px', background: '#050505',
                            zIndex: 120, display: 'flex', flexDirection: 'column',
                            borderLeft: '1px solid var(--border)', boxShadow: '-20px 0 50px rgba(0,0,0,0.5)'
                        }}
                    >
                        <div style={{ padding: '3rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <ShoppingBag size={20} style={{ color: 'var(--accent)' }} />
                                <h2 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.4em' }}>
                                    Le Panier ({totalItems})
                                </h2>
                            </div>
                            <button onClick={onClose} style={{ opacity: 0.6 }} className="hover:opacity-100 transition-opacity">
                                <X size={24} />
                            </button>
                        </div>

                        <div style={{ flex: 1, overflowY: 'auto', padding: '3rem' }}>
                            {items.length === 0 ? (
                                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
                                    <ShoppingBag size={48} strokeWidth={1} style={{ marginBottom: '2rem' }} />
                                    <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Votre écrin est vide</p>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                                    {items.map((item) => (
                                        <div key={`${item.id}-${item.size}`} style={{ display: 'flex', gap: '2rem' }}>
                                            <div style={{ width: '80px', aspectRatio: '3/4', background: '#111', overflow: 'hidden', flexShrink: 0 }}>
                                                <img src={item.image_url} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{item.name}</h4>
                                                    <p style={{ fontSize: '0.6rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                                                        Taille: {item.size} • Qté: {item.quantity}
                                                    </p>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <p style={{ fontSize: '1rem', fontFamily: 'Bodoni Moda', fontStyle: 'italic' }}>{formatPrice(item.price * item.quantity)}</p>
                                                    <button onClick={() => removeFromCart(item.id, item.size)} style={{ fontSize: '0.6rem', textTransform: 'uppercase', opacity: 0.4 }} className="hover:opacity-100 hover:text-red-400 transition-all">
                                                        Retirer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {items.length > 0 && (
                            <div style={{ padding: '3rem', borderTop: '1px solid var(--border)', background: '#080808' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>Total</span>
                                    <span style={{ fontSize: '1.8rem', fontFamily: 'Bodoni Moda', fontStyle: 'italic', color: 'var(--accent)' }}>{formatPrice(totalPrice)}</span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="btn-primary"
                                    style={{ width: '100%', padding: '1.8rem' }}
                                >
                                    Passer la commande (WhatsApp)
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
