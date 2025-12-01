import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Stats = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-display tracking-tight leading-tight">
                        Be one of the first 1,000 <br className="hidden md:block" />
                        Nigerians to own their <br className="hidden md:block" />
                        health story.
                    </h2>

                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                        No credit card required. Your story starts here. Secure. Portable. <br className="hidden md:block" />
                        Always evolving.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <Button
                            size="lg"
                            className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 rounded-full"
                        >
                            Join the first 1,000—Get Early Access
                        </Button>

                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                            Hospitals, HMOs, and Government bodies: <a href="#" className="text-[#10B981] hover:underline font-medium">Partner with MeddyPal.</a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
