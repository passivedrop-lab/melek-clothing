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
                        className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-full max-w-xl bg-background z-[70] flex flex-col shadow-2xl border-l border-white/5"
                    >
                        <div className="p-10 border-b border-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-6">
                                <ShoppingBag size={20} className="text-accent" strokeWidth={1} />
                                <h2 className="text-xs-caps font-bold">La Sélection ({totalItems})</h2>
                            </div>
                            <button onClick={onClose} className="hover:text-accent transition-colors">
                                <X size={24} strokeWidth={1} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-10 space-y-12">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                                    <div className="w-20 h-20 border border-white/10 rotate-45 flex items-center justify-center mb-10">
                                        <ShoppingBag size={32} strokeWidth={1} className="-rotate-45" />
                                    </div>
                                    <p className="text-xs-caps italic">L'écrin est vide</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={`${item.id}-${item.size}`} className="flex gap-8 group">
                                        <div className="w-24 aspect-[3/4] bg-secondary flex-shrink-0 overflow-hidden">
                                            <img src={item.image_url} alt={item.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-2">
                                            <div>
                                                <h4 className="text-sm font-light uppercase tracking-widest mb-2">{item.name}</h4>
                                                <p className="text-[10px] text-accent uppercase tracking-[0.2em] font-bold">Mesure: {item.size} • Qté: {item.quantity}</p>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <p className="text-sm font-serif italic text-white/90">{formatPrice(item.price * item.quantity)}</p>
                                                <button
                                                    onClick={() => removeFromCart(item.id, item.size)}
                                                    className="text-muted hover:text-white transition-colors pb-1 border-b border-transparent hover:border-white"
                                                >
                                                    <span className="text-[8px] uppercase tracking-widest">Retirer</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="p-10 border-t border-white/5 bg-secondary/20">
                                <div className="flex justify-between items-baseline mb-10">
                                    <span className="text-xs-caps text-muted">Investissement Total</span>
                                    <span className="text-3xl font-serif italic text-accent">{formatPrice(totalPrice)}</span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="btn-melek w-full py-6 text-[10px]"
                                >
                                    <span>Confirmer l'Acquisition (WhatsApp)</span>
                                </button>
                                <div className="flex justify-center gap-4 mt-8 opacity-40">
                                    <p className="text-[7px] uppercase tracking-[0.4em]">Melek</p>
                                    <div className="w-1 h-1 bg-accent rotate-45" />
                                    <p className="text-[7px] uppercase tracking-[0.4em]">Heritage</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
