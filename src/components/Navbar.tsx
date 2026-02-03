'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BatteryCharging } from 'lucide-react'

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/80"
        >
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
                <BatteryCharging className="text-[var(--primary)]" />
                <span>Connexxion<span className="text-[var(--primary)]">Energy</span></span>
            </Link>

            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70 dark:text-foreground/80">
                <a href="#process" className="hover:text-[var(--primary)] transition-colors">Our Process</a>
                <a href="#about" className="hover:text-[var(--primary)] transition-colors">About Us</a>
            </div>

            <div className="flex items-center gap-4">
                <Link href="/login">
                    <button className="btn btn-primary text-sm px-6 py-2 rounded-full">
                        Login
                    </button>
                </Link>
            </div>
        </motion.nav>
    )
}
