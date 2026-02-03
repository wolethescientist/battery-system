'use client'

import { motion } from 'framer-motion'
import { Car, Recycle, Battery, ShoppingCart } from 'lucide-react'

const steps = [
    {
        icon: Car,
        title: "Collection",
        desc: "We collect faulty and worn-out car batteries from users across the region."
    },
    {
        icon: Recycle,
        title: "Recycle & Process",
        desc: "Utilizing advanced Chinese technology in our Nigerian factory to reclaim materials."
    },
    {
        icon: Battery,
        title: "Refurbish",
        desc: "Transforming reclaimed components into high-performance, refurbished batteries."
    },
    {
        icon: ShoppingCart,
        title: "Market",
        desc: "Selling affordable, refurbished batteries back to the Nigerian market."
    }
]

export default function ProcessSection() {
    return (
        <section id="process" className="py-32 bg-surface relative overflow-hidden">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--primary)] to-transparent -translate-x-1/2 hidden md:block" />

            <div className="container relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 relative z-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Circular Process</h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
                        We've optimized every step of the battery lifecycle to ensure maximum efficiency and minimal environmental impact.
                    </p>
                </motion.div>

                <div className="space-y-12 md:space-y-24">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                        >
                            {/* Text Content */}
                            <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <h3 className="text-3xl font-bold mb-4 text-foreground">{step.title}</h3>
                                <p className="text-lg text-foreground/60">{step.desc}</p>
                            </div>

                            {/* Icon Center */}
                            <div className="relative flex items-center justify-center z-10">
                                <div className="w-20 h-20 rounded-full bg-[var(--primary)] flex items-center justify-center text-black shadow-[0_0_30px_rgba(0,230,118,0.4)]">
                                    <step.icon size={32} />
                                </div>
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-[var(--primary)] blur-xl opacity-20 animate-pulse" />
                            </div>

                            {/* Empty Space for Grid Balance */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
