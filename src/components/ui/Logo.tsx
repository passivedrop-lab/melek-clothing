"use client"

import { motion } from 'framer-motion'

export default function Logo() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
                position: 'relative', width: '40px', height: '40px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid var(--accent)', transform: 'rotate(45deg)'
            }}>
                <span style={{
                    transform: 'rotate(-45deg)', color: 'white',
                    fontFamily: 'Bodoni Moda', fontWeight: 'bold', fontSize: '1.2rem'
                }}>M</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
                <span style={{
                    fontFamily: 'Bodoni Moda', fontSize: '1.5rem',
                    letterSpacing: '0.2em', fontWeight: '500'
                }}>MELEK</span>
                <span style={{
                    fontSize: '0.5rem', letterSpacing: '0.5em',
                    color: 'var(--accent)', textTransform: 'uppercase', marginTop: '0.2rem'
                }}>Héritage</span>
            </div>
        </div>
    )
}
