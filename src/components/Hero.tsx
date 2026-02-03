'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-20">
            {/* Background Image & Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-background/90 to-background pointer-events-none" />
            </div>

            {/* Animated Circle Backdrop */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute w-[800px] h-[800px] rounded-full bg-green-500/10 blur-3xl -z-10"
            />

            <div className="container relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[var(--primary)] font-bold tracking-widest uppercase text-sm mb-6 block">Sustainable Energy Solutions</span>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none text-foreground">
                        Revitalizing <br />
                        <span className="text-[var(--primary)]">Batteries.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                        We bridge the gap between waste and energy. Bringing advanced recycling technology from global leaders directly to Nigerian soil.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/login">
                            <button className="btn btn-primary text-lg px-10 py-4 rounded-full flex items-center gap-2 group hover:bg-[var(--primary-dark)]">
                                <span className="text-black group-hover:text-black">Get Started</span>
                                <ArrowRight size={20} className="text-black" />
                            </button>
                        </Link>
                        <a href="#process">
                            <button className="btn btn-outline text-lg px-10 py-4 rounded-full group hover:bg-[var(--primary)] hover:border-[var(--primary)] border-foreground/20">
                                <span className="text-foreground group-hover:text-black transition-colors">How It Works</span>
                            </button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
