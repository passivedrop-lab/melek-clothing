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
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-[70] flex flex-col shadow-2xl"
                    >
                        <div className="p-6 border-b border-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <ShoppingBag size={20} className="text-accent" />
                                <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Votre Panier ({totalItems})</h2>
                            </div>
                            <button onClick={onClose} className="hover:text-accent transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                    <ShoppingBag size={48} className="mb-4" />
                                    <p className="text-xs uppercase tracking-widest">Votre panier est vide</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={`${item.id}-${item.size}`} className="flex gap-4 group">
                                        <div className="w-20 h-24 bg-secondary flex-shrink-0">
                                            <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <h4 className="text-sm font-medium mb-1">{item.name}</h4>
                                                <p className="text-[10px] text-muted uppercase tracking-widest">Taille: {item.size} • Qté: {item.quantity}</p>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <p className="text-sm font-serif">{formatPrice(item.price * item.quantity)}</p>
                                                <button
                                                    onClick={() => removeFromCart(item.id, item.size)}
                                                    className="text-muted hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="p-6 border-t border-white/5 bg-secondary/30">
                                <div className="flex justify-between items-end mb-6">
                                    <span className="text-xs uppercase tracking-widest text-muted">Total</span>
                                    <span className="text-xl font-serif text-accent">{formatPrice(totalPrice)}</span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="btn-premium w-full py-4 text-sm"
                                >
                                    Passer la commande via WhatsApp
                                </button>
                                <p className="text-[10px] text-center text-muted mt-4 uppercase tracking-[0.1em]">
                                    Livraison partout au Bénin
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
