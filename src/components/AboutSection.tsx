'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import MapWrapper to avoid SSR issues
const MapWrapper = dynamic(() => import('./MapWrapper'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-surface animate-pulse flex items-center justify-center">
            <span className="text-[var(--primary)] font-bold">Loading Map...</span>
        </div>
    )
})

export default function AboutSection() {
    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden">
            {/* Background map decoration */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--primary)] rounded-full blur-[150px]" />
            </div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground leading-tight">
                            Localized Power. <br />
                            <span className="text-[var(--primary)]">Global Standards.</span>
                        </h2>
                        <p className="text-foreground/80 text-xl mb-10 leading-relaxed max-w-xl">
                            Connexxion Energy is building the critical infrastructure needed to power Nigeria's electric future.
                            By processing and refurbishing batteries locally, we reduce waste, lower costs, and ensure reliable energy storage solutions for our unique environment.
                        </p>

                        <div className="grid grid-cols-2 gap-10">
                            {[
                                { val: "500+", label: "Batteries Processed" },
                                { val: "95%", label: "Efficiency Rate" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                >
                                    <h4 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{stat.val}</h4>
                                    <p className="text-lg text-foreground/60 font-medium">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[500px] w-full bg-surface rounded-3xl border border-border overflow-hidden relative shadow-2xl z-0"
                    >
                        <MapWrapper />

                        {/* Overlay Card */}
                        <div className="absolute bottom-6 left-6 right-6 bg-surface/90 backdrop-blur-md p-4 rounded-xl border border-border/50 shadow-lg z-[1000]">
                            <div className="flex items-center gap-4">
                                <div className="bg-[var(--primary)]/20 p-3 rounded-full text-[var(--primary)]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-lg text-foreground">Abuja Operations Center</h5>
                                    <p className="text-foreground/60 text-sm">2a Iller Crescent, Maitama, Abuja</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
