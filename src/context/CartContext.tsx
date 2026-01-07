"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface CartItem {
    id: string
    name: string
    price: number
    image_url: string
    size: string
    quantity: number
}

interface CartContextType {
    items: CartItem[]
    addToCart: (item: Omit<CartItem, 'quantity'>) => void
    removeFromCart: (id: string, size: string) => void
    clearCart: () => void
    totalPrice: number
    totalItems: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])

    // Load from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('melek-cart')
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart))
            } catch (e) {
                console.error("Failed to parse cart", e)
            }
        }
    }, [])

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('melek-cart', JSON.stringify(items))
    }, [items])

    const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
        setItems((prev) => {
            const existing = prev.find(i => i.id === newItem.id && i.size === newItem.size)
            if (existing) {
                return prev.map(i =>
                    (i.id === newItem.id && i.size === newItem.size)
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                )
            }
            return [...prev, { ...newItem, quantity: 1 }]
        })
    }

    const removeFromCart = (id: string, size: string) => {
        setItems((prev) => prev.filter(i => !(i.id === id && i.size === size)))
    }

    const clearCart = () => setItems([])

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
    const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, totalPrice, totalItems }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
