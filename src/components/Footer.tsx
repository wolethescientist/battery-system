'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Battery, Twitter, Linkedin, Facebook, Instagram, Send, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-surface relative pt-20 pb-10 overflow-hidden border-t border-border">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-[var(--primary)]/10 p-2 rounded-lg group-hover:bg-[var(--primary)]/20 transition-colors">
                                <Battery className="text-[var(--primary)]" size={24} />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-foreground">
                                Connexxion<span className="text-[var(--primary)]">Energy</span>
                            </span>
                        </Link>
                        <p className="text-foreground/60 leading-relaxed">
                            Pioneering sustainable battery recycling solutions in Nigeria. Transforming waste into renewable power for a greener future.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground/60 hover:text-[var(--primary)] hover:border-[var(--primary)] hover:scale-110 transition-all">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Our Process', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-foreground/60 hover:text-[var(--primary)] transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] scale-0 group-hover:scale-100 transition-transform" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3 text-foreground/60">
                                <MapPin className="text-[var(--primary)] shrink-0 mt-1" size={18} />
                                <span>2a Iller Crescent,<br />Maitama,<br />Abuja</span>
                            </li>
                            <li className="flex items-center gap-3 text-foreground/60">
                                <Phone className="text-[var(--primary)] shrink-0" size={18} />
                                <span>+234 800 BATTERY</span>
                            </li>
                            <li className="flex items-center gap-3 text-foreground/60">
                                <Mail className="text-[var(--primary)] shrink-0" size={18} />
                                <span>info@connexxion.ng</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Newsletter</h4>
                        <p className="text-foreground/60 mb-4">Stay updated with our latest sustainability reports and news.</p>
                        <form className="relative" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[var(--primary)] transition-colors pr-12"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center text-black hover:scale-105 transition-transform">
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40">
                    <p>© {new Date().getFullYear()} Connexxion Energy. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
