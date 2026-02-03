'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDownLeft, RefreshCcw, AlertOctagon } from 'lucide-react'

// Mock Data for Transactions
const transactions = [
    {
        id: 'TX-1024',
        type: 'Incoming',
        source: 'Lagos Collection Center',
        amount: '450 Batteries',
        status: 'Pending',
        date: 'Today, 10:23 AM',
        icon: ArrowDownLeft,
        iconColor: 'text-blue-400',
        bgColor: 'bg-blue-400/10'
    },
    {
        id: 'TX-1023',
        type: 'Sale',
        source: 'AutoFix Mechanics Ltd',
        amount: '₦ 1,250,000',
        status: 'Completed',
        date: 'Today, 09:12 AM',
        icon: ArrowUpRight,
        iconColor: 'text-green-400',
        bgColor: 'bg-green-400/10'
    },
    {
        id: 'TX-1022',
        type: 'Refurbished',
        source: 'Factory Line A',
        amount: '120 Units',
        status: 'Completed',
        date: 'Yesterday, 04:45 PM',
        icon: RefreshCcw,
        iconColor: 'text-purple-400',
        bgColor: 'bg-purple-400/10'
    },
    {
        id: 'TX-1021',
        type: 'Faulty',
        source: 'Quality Control',
        amount: '12 Units',
        status: 'Rejected',
        date: 'Yesterday, 02:30 PM',
        icon: AlertOctagon,
        iconColor: 'text-red-400',
        bgColor: 'bg-red-400/10'
    },
    {
        id: 'TX-1020',
        type: 'Incoming',
        source: 'Abuja Hub',
        amount: '800 Batteries',
        status: 'Processing',
        date: 'Oct 24, 11:00 AM',
        icon: ArrowDownLeft,
        iconColor: 'text-blue-400',
        bgColor: 'bg-blue-400/10'
    }
]

export default function RecentTransactions() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-surface border border-border rounded-2xl overflow-hidden"
        >
            <div className="p-6 border-b border-border flex items-center justify-between">
                <h3 className="font-bold text-lg">Recent Activity</h3>
                <button className="text-sm text-[var(--primary)] hover:underline">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-background/50 text-gray-400">
                        <tr>
                            <th className="px-6 py-4 font-medium">Transaction ID</th>
                            <th className="px-6 py-4 font-medium">Type</th>
                            <th className="px-6 py-4 font-medium">Source/Destination</th>
                            <th className="px-6 py-4 font-medium">Amount/Volume</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {transactions.map((tx) => (
                            <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-300">{tx.id}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`p-1.5 rounded-lg ${tx.bgColor} ${tx.iconColor}`}>
                                            <tx.icon size={14} />
                                        </div>
                                        <span>{tx.type}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-400">{tx.source}</td>
                                <td className="px-6 py-4 font-medium">{tx.amount}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium 
                    ${tx.status === 'Completed' ? 'bg-green-400/10 text-green-400' :
                                            tx.status === 'Pending' ? 'bg-yellow-400/10 text-yellow-400' :
                                                tx.status === 'Processing' ? 'bg-blue-400/10 text-blue-400' :
                                                    'bg-red-400/10 text-red-400'
                                        }
                  `}>
                                        {tx.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500">{tx.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    )
}
