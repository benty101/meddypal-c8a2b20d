import React from 'react';
import { Shield, Check, CreditCard, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const InsuranceSection = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl" />
                        <div className="glass-card p-8 rounded-2xl border border-blue-100 dark:border-blue-800 shadow-xl relative z-10 bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-md">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Health Insurance</p>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">Premium Family Plan</h3>
                                </div>
                                <Shield className="w-10 h-10 text-primary" />
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">Coverage Limit</span>
                                    </div>
                                    <span className="font-bold text-slate-900 dark:text-white">₦5,000,000</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                            <CreditCard className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">Co-pay</span>
                                    </div>
                                    <span className="font-bold text-slate-900 dark:text-white">₦0</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
                                <span>Valid until Dec 2025</span>
                                <span className="flex items-center text-green-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>Active</span>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 max-w-[180px]"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Approvals</p>
                                    <p className="text-sm font-bold text-slate-800 dark:text-white">Instant</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-sm font-medium mb-6 border border-blue-100 dark:border-blue-800">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                            Compare, Enroll, Use
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-display leading-tight">
                            Your Insurance, <span className="text-primary">Seamlessly Accepted</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            No more second-guessing your coverage. Verify your insurance eligibility at any partner hospital instantly with your digital card. Know exactly what you can afford before you walk into a hospital.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Compare 40+ plans from top Nigerian HMOs",
                                "Instant digital card generation",
                                "Real-time eligibility verification",
                                "Transparent coverage limits and co-pays"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button size="lg" className="bg-primary hover:bg-blue-700 text-white px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all">
                            Compare Plans Now
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InsuranceSection;
