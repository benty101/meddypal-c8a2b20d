import { motion } from "framer-motion";
import { UrgentActionsBanner } from "./UrgentActionsBanner";
import { HealthTimelineWidget } from "./HealthTimelineWidget";
import { FutureButton } from "@/components/ui/FutureButton";
import { Shield, Activity, Users, Plus } from "lucide-react";

export const Dashboard3D = () => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark p-6 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white font-display">Good Afternoon, Chidi</h1>
                        <p className="text-slate-600 dark:text-slate-400">Here's your health story for today.</p>
                    </div>
                    <FutureButton className="gap-2 shadow-lg">
                        <Plus className="h-4 w-4" /> New Entry
                    </FutureButton>
                </div>

                {/* Urgent Actions */}
                <UrgentActionsBanner />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Main Column (Timeline & Vitals) */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Vitals Overview Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { label: "Blood Pressure", value: "120/80", unit: "mmHg", color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
                                { label: "Heart Rate", value: "72", unit: "bpm", color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
                                { label: "Weight", value: "75", unit: "kg", color: "text-primary", bg: "bg-blue-50 dark:bg-blue-900/20" },
                            ].map((vital, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">{vital.label}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-2xl font-bold ${vital.color} font-display`}>{vital.value}</span>
                                        <span className="text-xs text-slate-400">{vital.unit}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Timeline Section */}
                        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-100 dark:border-slate-800 shadow-lg">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display">Your Health Timeline</h2>
                                <button className="text-sm font-medium text-primary hover:underline">Filter</button>
                            </div>
                            <HealthTimelineWidget />
                        </div>
                    </div>

                    {/* Sidebar (Insurance & Family) */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Insurance Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-hover p-6 text-white shadow-xl"
                        >
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <Shield className="h-6 w-6 opacity-80" />
                                    <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">ACTIVE</span>
                                </div>
                                <p className="text-sm opacity-80 mb-1">Hygeia HMO</p>
                                <p className="text-2xl font-bold tracking-wider mb-8 font-display">•••• •••• 4582</p>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xs opacity-60">Plan</p>
                                        <p className="font-medium">Gold Flex</p>
                                    </div>
                                    <FutureButton size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 text-white border-none">
                                        View Details
                                    </FutureButton>
                                </div>
                            </div>

                            {/* Decorative Circles */}
                            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-black/5 blur-xl" />
                        </motion.div>

                        {/* Family Hub Preview */}
                        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 font-display">
                                    <Users className="h-4 w-4 text-slate-400" /> Family Hub
                                </h3>
                            </div>
                            <div className="space-y-3">
                                {["Nneka (Wife)", "Junior (Son)"].map((member, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs">
                                                {member.charAt(0)}
                                            </div>
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{member}</span>
                                        </div>
                                        <div className="h-2 w-2 rounded-full bg-green-500" />
                                    </div>
                                ))}
                                <button className="w-full py-2 text-sm text-slate-400 hover:text-primary border border-dashed border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary transition-all">
                                    + Add Member
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
