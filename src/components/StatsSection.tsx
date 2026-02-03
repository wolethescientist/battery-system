'use client'

import { motion } from 'framer-motion'
import { BatteryCharging, Leaf, Recycle, Zap } from 'lucide-react'

const stats = [
    {
        icon: BatteryCharging,
        value: "50,000+",
        label: "Batteries Processed",
        desc: "Safe disposal and material recovery."
    },
    {
        icon: Leaf,
        value: "120 Tons",
        label: "Lead Recovered",
        desc: "Preventing toxic environmental leakage."
    },
    {
        icon: Zap,
        value: "85%",
        label: "Energy Saved",
        desc: "Compared to mining virgin materials."
    },
    {
        icon: Recycle,
        value: "100%",
        label: "Local Impact",
        desc: "Creating jobs within Nigeria."
    }
]

export default function StatsSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-zinc-900 border-t border-white/5">
            <div className="absolute inset-0 bg-[url('/factory-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="text-center group p-6 rounded-2xl transition-colors hover:bg-white/5"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:scale-110 transition-transform">
                                <stat.icon size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-foreground mb-2">{stat.value}</h3>
                            <p className="text-[var(--primary)] font-medium mb-2">{stat.label}</p>
                            <p className="text-foreground/60 text-sm">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
