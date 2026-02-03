'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, BatteryCharging } from 'lucide-react'

export default function LoginPage() {
    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Auto-redirect as requested
        router.push('/dashboard')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
            {/* Background Animation Elements */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[100px]"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md p-8 bg-surface/80 backdrop-blur-xl border border-border rounded-2xl relative z-10"
            >
                <div className="flex justify-center mb-8">
                    <BatteryCharging size={48} className="text-[var(--primary)]" />
                </div>

                <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
                <p className="text-gray-400 text-center mb-8">Sign in to manage your operations</p>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition-colors text-foreground"
                            placeholder="admin@connexxion.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition-colors text-foreground"
                            placeholder="••••••••"
                        />
                    </div>
                    <button type="submit" className="w-full btn btn-primary py-3 rounded-lg mt-4">
                        Log In
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account? <Link href="/signup" className="text-[var(--primary)] hover:underline">Sign up</Link>
                </p>
            </motion.div>
        </div>
    )
}
