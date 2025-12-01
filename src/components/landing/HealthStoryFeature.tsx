import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Share2, Lock, History } from 'lucide-react';

const HealthStoryFeature = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Your Health Story. One Complete Timeline.</h2>
                    <p className="text-lg text-slate-500 mb-8">
                        No more fragmented records. Access your entire medical history, from vaccinations to surgeries, in one secure place.
                    </p>
                    <ul className="space-y-5 text-slate-600">
                        <li className="flex items-center gap-3">
                            <History className="w-5 h-5 text-blue-600 shrink-0" />
                            <span>Consolidated history from all providers</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Share2 className="w-5 h-5 text-blue-600 shrink-0" />
                            <span>Share instantly with new doctors</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Lock className="w-5 h-5 text-blue-600 shrink-0" />
                            <span>Bank-grade security & NDPR compliant</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl max-w-md mx-auto w-full h-[400px] flex flex-col"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-lg text-slate-900">Medical Timeline</h3>
                        <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">Live Updates</span>
                    </div>

                    <div className="space-y-6 relative pl-4 border-l-2 border-slate-100">
                        <div className="relative">
                            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-white ring-2 ring-blue-100"></div>
                            <p className="text-xs text-slate-400 mb-1">Today, 10:30 AM</p>
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <p className="font-bold text-slate-800 text-sm">General Checkup</p>
                                <p className="text-xs text-slate-500">Lagoon Hospitals, Ikoyi</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></div>
                            <p className="text-xs text-slate-400 mb-1">Oct 15, 2024</p>
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <p className="font-bold text-slate-800 text-sm">Malaria Treatment</p>
                                <p className="text-xs text-slate-500">Reddington Hospital</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></div>
                            <p className="text-xs text-slate-400 mb-1">Aug 02, 2024</p>
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <p className="font-bold text-slate-800 text-sm">Annual Vaccination</p>
                                <p className="text-xs text-slate-500">LUTH</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HealthStoryFeature;
