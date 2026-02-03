'use client'

import { motion } from 'framer-motion'
import MetricCard from '@/components/MetricCard'
import RecentTransactions from '@/components/RecentTransactions'
import { Battery, BatteryCharging, Factory, TrendingUp, AlertCircle, DollarSign, Zap, Recycle } from 'lucide-react'

export default function Dashboard() {
    return (
        <div className="space-y-8">
            {/* Welcome Banner */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative overflow-hidden rounded-3xl p-8 text-white min-h-[200px] flex items-center"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-900 z-0" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 z-0 mix-blend-overlay" />
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full" />

                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-4xl font-bold mb-2">Welcome back, Admin 👋</h1>
                    <p className="text-green-100 text-lg">
                        System performance is optimal. You have processed <span className="font-bold text-white">1,248</span> batteries this month.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-white text-green-700 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg">
                        View Detailed Report
                    </button>
                </div>
            </motion.div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                    title="Total Batteries"
                    value="12,450"
                    icon={Battery}
                    trend="+12%"
                    isPositive={true}
                    delay={0.1}
                    color="from-green-500 to-emerald-700"
                />
                <MetricCard
                    title="Refurbished"
                    value="8,230"
                    icon={Zap}
                    trend="+8.5%"
                    isPositive={true}
                    delay={0.2}
                    color="from-blue-500 to-indigo-700"
                />
                <MetricCard
                    title="Recycled"
                    value="3,890"
                    icon={Recycle}
                    trend="-2.1%"
                    isPositive={false}
                    delay={0.3}
                    color="from-orange-500 to-red-600"
                />
                <MetricCard
                    title="Revenue"
                    value="₦45.2M"
                    icon={TrendingUp}
                    trend="+15.3%"
                    isPositive={true}
                    delay={0.4}
                    color="from-purple-500 to-pink-600"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <RecentTransactions />
                </div>
                <div className="glass-card rounded-2xl p-6">
                    <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                        <span className="w-2 h-6 bg-[var(--primary)] rounded-full" />
                        System Health
                    </h3>
                    <div className="space-y-6">
                        {['Processing Unit A', 'Conveyor Belt 2', 'Sorting Mechanism'].map((item, i) => (
                            <div key={i} className="group">
                                <div className="flex justify-between text-sm mb-2 text-gray-400 group-hover:text-foreground transition-colors">
                                    <span>{item}</span>
                                    <span className="text-[var(--primary)]">98%</span>
                                </div>
                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '98%' }}
                                        transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                                        className="h-full bg-gradient-to-r from-[var(--primary)] to-emerald-600 rounded-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
