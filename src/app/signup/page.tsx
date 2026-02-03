'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
            {/* Background Animation Elements */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md p-8 bg-surface/80 backdrop-blur-xl border border-border rounded-2xl relative z-10"
            >
                <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Home
                </Link>

                <h1 className="text-3xl font-bold text-center mb-2">Join Connexxion</h1>
                <p className="text-gray-400 text-center mb-8">Start your sustainable journey</p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                        <input
                            type="text"
                            className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition-colors text-foreground"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition-colors text-foreground"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition-colors text-foreground"
                            placeholder="Create a strong password"
                        />
                    </div>
                    <Link href="/dashboard">
                        <button type="button" className="w-full btn btn-primary py-3 rounded-lg mt-4">
                            Create Account
                        </button>
                    </Link>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account? <Link href="/login" className="text-[var(--primary)] hover:underline">Log in</Link>
                </p>
            </motion.div>
        </div>
    )
}
