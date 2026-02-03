'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, BarChart3, BatteryCharging, LogOut, Settings } from 'lucide-react'
import { clsx } from 'clsx'

const links = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="fixed left-4 top-4 bottom-4 w-64 glass rounded-2xl flex flex-col z-40 border-r-0 shadow-2xl">
            <div className="p-8 border-b border-white/5">
                <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity group">
                    <div className="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-black transition-colors">
                        <BatteryCharging size={24} />
                    </div>
                    <span>Connexxion</span>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {links.map((link) => {
                    const isActive = pathname === link.href
                    return (
                        <Link key={link.href} href={link.href}>
                            <div className={clsx(
                                "flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 relative overflow-hidden group",
                                isActive
                                    ? "bg-[var(--primary)] text-black font-semibold shadow-[0_0_20px_rgba(0,230,118,0.3)]"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                            )}>
                                <link.icon size={20} className={clsx("transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")} />
                                <span className="relative z-10">{link.name}</span>
                                {isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-100%] animate-shimmer" />
                                )}
                            </div>
                        </Link>
                    )
                })}
            </nav>

            <div className="p-6 border-t border-white/5">
                <Link href="/login">
                    <button className="flex items-center gap-3 px-4 py-3.5 w-full text-left text-red-400 hover:bg-red-500/10 rounded-xl transition-all hover:pl-6 group">
                        <LogOut size={20} className="group-hover:rotate-12 transition-transform" />
                        <span className="font-medium">Logout</span>
                    </button>
                </Link>
            </div>
        </aside>
    )
}
