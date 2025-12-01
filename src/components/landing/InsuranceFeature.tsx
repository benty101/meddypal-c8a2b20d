import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Shield, CheckCircle } from 'lucide-react';

const InsuranceFeature = () => {
    const [activeTab, setActiveTab] = useState<'coverage' | 'eligibility'>('coverage');

    return (
        <section id="insurance" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Your Insurance, Seamlessly Accepted</h2>
                    <p className="text-lg text-slate-500 mb-8">
                        No co-pay surprises. You always know your coverage before care.
                    </p>
                    <ul className="space-y-5 text-slate-600">
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                            <span>View remaining balances instantly</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                            <span>Confirm coverage before treatment</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                            <span>Digital HMO ID card accepted nationwide</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                            <span>Real-time eligibility check for Nigerian hospitals</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Insurance Card UI */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-slate-50 rounded-[2.5rem] p-3 border border-slate-200 shadow-xl max-w-md mx-auto w-full"
                >
                    {/* Toggle */}
                    <div className="flex bg-white rounded-full p-1.5 mb-6 border border-slate-100 shadow-sm">
                        <button
                            onClick={() => setActiveTab('coverage')}
                            className={`flex-1 py-3 rounded-full text-xs font-bold transition-all ${activeTab === 'coverage' ? 'text-slate-900 bg-slate-100' : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            Coverage
                        </button>
                        <button
                            onClick={() => setActiveTab('eligibility')}
                            className={`flex-1 py-3 rounded-full text-xs font-bold transition-all ${activeTab === 'eligibility' ? 'text-slate-900 bg-slate-100' : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            Eligibility
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="relative overflow-hidden h-[340px] bg-white rounded-[2rem] border border-slate-100 shadow-sm">

                        <AnimatePresence mode="wait">
                            {activeTab === 'coverage' ? (
                                <motion.div
                                    key="coverage"
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -50, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 p-8 flex flex-col"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h4 className="text-3xl font-mono font-bold text-slate-900">₦1,200,000</h4>
                                            <p className="text-xs text-slate-500 mt-1">AXA Gold • Individual</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                            <Shield className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex justify-between text-xs mb-2 font-medium text-slate-700">
                                                <span>Outpatient</span>
                                                <span>75% Remaining</span>
                                            </div>
                                            <div className="h-2.5 w-full bg-slate-100 rounded-full">
                                                <div className="h-full bg-emerald-500 rounded-full w-3/4"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs mb-2 font-medium text-slate-700">
                                                <span>Dental & Optical</span>
                                                <span className="text-amber-600">Low Balance</span>
                                            </div>
                                            <div className="h-2.5 w-full bg-slate-100 rounded-full">
                                                <div className="h-full bg-amber-500 rounded-full w-[15%]"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-slate-50">
                                        <p className="text-[10px] text-center text-slate-400">No co-pay surprises, you always know what you're covered for.</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="eligibility"
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 50, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center"
                                >
                                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 animate-pulse">
                                        <CheckCircle className="w-10 h-10 text-emerald-600" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Eligible for Care</h4>
                                    <p className="text-sm text-slate-500 mb-8 max-w-[200px]">Lagoon Hospitals, Ikoyi accepts your active policy.</p>
                                    <button className="w-full py-3.5 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-colors">
                                        Generate Auth Code
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InsuranceFeature;
