import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Microscope, FileSearch } from 'lucide-react';

const GenomicsFeature = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Visual (Left Side for alternation) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-2 lg:order-1 relative bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 shadow-xl max-w-md mx-auto w-full h-[400px] flex flex-col justify-center items-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1000&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                    <div className="relative z-10 text-center">
                        <div className="w-20 h-20 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                            <Dna className="w-10 h-10 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Genomic Profile</h3>
                        <p className="text-slate-400 text-sm mb-6">Analysis Complete</p>

                        <div className="grid grid-cols-2 gap-4 text-left w-full max-w-xs mx-auto">
                            <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Risk Factor</p>
                                <p className="text-white font-bold">Low</p>
                            </div>
                            <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Traits</p>
                                <p className="text-white font-bold">12 Markers</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-1 lg:order-2"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Unlocked DNA. Personalized Care.</h2>
                    <p className="text-lg text-slate-500 mb-8">
                        Understand your body at a molecular level. Get personalized treatment plans based on your unique genetic makeup.
                    </p>
                    <ul className="space-y-5 text-slate-600">
                        <li className="flex items-center gap-3">
                            <Microscope className="w-5 h-5 text-purple-600 shrink-0" />
                            <span>Advanced genomic screening</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FileSearch className="w-5 h-5 text-purple-600 shrink-0" />
                            <span>Pharmacogenomics for drug compatibility</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Dna className="w-5 h-5 text-purple-600 shrink-0" />
                            <span>Hereditary disease risk assessment</span>
                        </li>
                    </ul>
                </motion.div>

            </div>
        </section>
    );
};

export default GenomicsFeature;
