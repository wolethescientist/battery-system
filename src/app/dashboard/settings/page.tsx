'use client'

import { motion } from 'framer-motion'
import { User, Bell, Shield, Lock, Save, Moon, Sun, Mail } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from 'next-themes'

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile')
    const { theme, setTheme } = useTheme()

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        // { id: 'notifications', label: 'Notifications', icon: Bell }, // Removed for simplicity if needed, but keeping for now
        { id: 'preferences', label: 'Preferences', icon: Moon },
        { id: 'security', label: 'Security', icon: Shield },
    ]

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="text-gray-400">Manage your account and system preferences</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Settings Sidebar */}
                <div className="md:col-span-1 space-y-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${activeTab === tab.id
                                    ? 'bg-[var(--primary)] text-black'
                                    : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-900 hover:text-foreground dark:hover:text-white'
                                }
              `}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="md:col-span-3 bg-surface border border-border rounded-2xl p-8"
                >
                    {activeTab === 'profile' && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold mb-6">Profile Information</h2>

                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-24 h-24 rounded-full bg-background border-2 border-[var(--primary)] flex items-center justify-center text-4xl font-bold text-gray-400">
                                    A
                                </div>
                                <div>
                                    <button className="btn btn-primary text-sm px-4 py-2 rounded-lg">Change Avatar</button>
                                    <p className="text-xs text-gray-500 mt-2">Recommended: 400x400px</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">First Name</label>
                                    <input type="text" defaultValue="Admin" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-[var(--primary)]" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                                    <input type="text" defaultValue="User" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-[var(--primary)]" />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                                    <div className="relative">
                                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                        <input type="email" defaultValue="admin@connexxion-energy.com" className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-[var(--primary)]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'preferences' && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold mb-6">System Preferences</h2>

                            <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-border">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Bell size={20} /></div>
                                    <div>
                                        <p className="font-medium">Email Notifications</p>
                                        <p className="text-sm text-gray-400">Receive daily summaries</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-zinc-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-border">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500"><Moon size={20} /></div>
                                    <div>
                                        <p className="font-medium">Dark Mode</p>
                                        <p className="text-sm text-gray-400">Toggle application theme</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={theme === 'dark'}
                                        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                                    />
                                    <div className="w-11 h-6 bg-zinc-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                                </label>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold mb-6">Security Settings</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Current Password</label>
                                    <div className="relative">
                                        <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                        <input type="password" placeholder="••••••••" className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-[var(--primary)]" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">New Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-[var(--primary)]" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Confirm New Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-[var(--primary)]" />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-8 pt-6 border-t border-border flex justify-end">
                        <button className="btn btn-primary px-6 py-2 rounded-lg flex items-center gap-2">
                            <Save size={18} />
                            Save Changes
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
