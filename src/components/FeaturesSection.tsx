'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="py-32 relative">
            <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-[0.03] pointer-events-none" />
            <div className="container space-y-32 relative z-10">

                {/* The Problem */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 font-medium mb-6">
                            <AlertTriangle size={18} />
                            The Silent Crisis
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            Nigeria's Mounting <span className="text-red-500">Toxic Waste</span>
                        </h2>
                        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                            Every year, thousands of tons of lead-acid batteries are discarded improperly. This leads to severe soil contamination, water pollution, and health risks for our communities. The traditional informal recycling methods are inefficient and dangerous.
                        </p>
                        <ul className="space-y-4">
                            {['Soil Contamination', 'Water Supply Poisoning', 'Health Hazards'].map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-center gap-3 text-foreground font-medium"
                                >
                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-red-900/20 to-black/50 border border-red-500/20"
                    >
                        {/* Placeholder for an image - using abstract gradient for now */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <AlertTriangle className="text-red-500/20" size={200} />
                        </div>
                    </motion.div>
                </div>

                {/* The Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-1 relative h-[500px] rounded-3xl overflow-hidden bg-black border border-[var(--primary)]/20"
                    >
                        <div className="absolute inset-0 bg-[url('/factory-bg.png')] bg-cover bg-center opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <CheckCircle2 className="text-[var(--primary)] relative z-10 drop-shadow-glow" size={80} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="order-1 md:order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-medium mb-6">
                            <CheckCircle2 size={18} />
                            The Connexxion Solution
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            Advanced Technology,<br /><span className="text-[var(--primary)]">Sustainable Future.</span>
                        </h2>
                        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                            We bring state-of-the-art battery recycling infrastructure to Nigeria. Our closed-loop system ensures 99% material recovery, transforming waste into valuable energy storage solutions for homes and businesses.
                        </p>
                        <ul className="space-y-4">
                            {['99% Material Recovery', 'Zero-Emission Process', 'Certified Safety Standards'].map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-center gap-3 text-foreground font-medium group hover:text-[var(--primary)] transition-colors"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)]">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    <span className="group-hover:text-foreground transition-colors cursor-default">
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
