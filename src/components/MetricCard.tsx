'use client'

import { motion } from 'framer-motion'
import { LucideIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react'

interface MetricCardProps {
    title: string
    value: string | number
    icon: LucideIcon
    trend?: string
    color?: string
    delay?: number
    isPositive?: boolean
}

export default function MetricCard({ title, value, icon: Icon, trend, color = "text-[var(--primary)]", delay = 0, isPositive }: MetricCardProps) {
    const finalIsPositive = isPositive !== undefined ? isPositive : (trend ? trend.startsWith('+') : false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-6 glass-card rounded-2xl relative overflow-hidden group transition-all duration-300"
        >
            <div className={`absolute top-0 right-0 p-32 bg-[var(--primary)]/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100`} />

            <div className="flex items-center justify-between mb-4 relative z-10">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg`}>
                    <Icon size={24} />
                </div>
                {trend && (
                    <div className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full ${finalIsPositive ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                        }`}>
                        {finalIsPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                        {trend}
                    </div>
                )}
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
            <div className="text-2xl md:text-3xl font-bold tracking-tight">{value}</div>
        </motion.div>
    )
}
