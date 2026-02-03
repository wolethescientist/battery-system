'use client'

import { motion } from 'framer-motion'
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts'

const monthlyData = [
    { name: 'Jan', processed: 4000, revenue: 2400000, cost: 1800000 },
    { name: 'Feb', processed: 3000, revenue: 1398000, cost: 1200000 },
    { name: 'Mar', processed: 2000, revenue: 9800000, cost: 7500000 },
    { name: 'Apr', processed: 2780, revenue: 3908000, cost: 2900000 },
    { name: 'May', processed: 1890, revenue: 4800000, cost: 3800000 },
    { name: 'Jun', processed: 2390, revenue: 3800000, cost: 3000000 },
    { name: 'Jul', processed: 3490, revenue: 4300000, cost: 3200000 },
    { name: 'Aug', processed: 4200, revenue: 5400000, cost: 4000000 },
    { name: 'Sep', processed: 3800, revenue: 4900000, cost: 3600000 },
    { name: 'Oct', processed: 5100, revenue: 6200000, cost: 4500000 },
    { name: 'Nov', processed: 4800, revenue: 5800000, cost: 4100000 },
    { name: 'Dec', processed: 6500, revenue: 8100000, cost: 5800000 },
]

const statusData = [
    { name: 'Refurbished', value: 400 },
    { name: 'Recycled', value: 300 },
    { name: 'Faulty', value: 100 },
    { name: 'Pending', value: 200 },
]

const COLORS = ['#00E676', '#2979FF', '#FF5252', '#FFC400'];

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-3xl font-bold">Performance Analytics</h1>
                <p className="text-gray-400">Detailed insights into battery lifecycle and revenue</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Processing Volume */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-surface p-6 rounded-2xl border border-border h-[400px]"
                >
                    <h3 className="text-lg font-bold mb-6">Processing Volume Trends</h3>
                    <ResponsiveContainer width="100%" height="90%">
                        <AreaChart data={monthlyData}>
                            <defs>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#00E676" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#00E676" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                            <XAxis dataKey="name" stroke="#666" />
                            <YAxis stroke="#666" />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Area type="monotone" dataKey="processed" stroke="#00E676" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Revenue Chart */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-surface p-6 rounded-2xl border border-border h-[400px]"
                >
                    <h3 className="text-lg font-bold mb-6">Revenue vs Cost Analysis (NGN)</h3>
                    <ResponsiveContainer width="100%" height="90%">
                        <BarChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                            <XAxis dataKey="name" stroke="#666" />
                            <YAxis stroke="#666" />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Legend />
                            <Bar dataKey="revenue" fill="#2979FF" name="Revenue" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="cost" fill="#FFC400" name="Operational Cost" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Status Distribution */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-surface p-6 rounded-2xl border border-border h-[400px] lg:col-span-2"
                >
                    <h3 className="text-lg font-bold mb-6">Battery Status Distribution</h3>
                    <div className="flex items-center justify-center h-[90%]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={statusData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {statusData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
