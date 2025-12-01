import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useParallax } from "@/lib/3d-utils";
import { TextEffect } from "@/components/ui/TextEffect";
import { FutureButton } from "@/components/ui/FutureButton";
import { ShieldAlert, FileWarning, ArrowRight, CheckCircle2, Activity } from "lucide-react";

export const ProblemSection3D = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useParallax(scrollYProgress, 100);
    const y2 = useParallax(scrollYProgress, -100);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    return (
        <section ref={containerRef} className="relative py-32 overflow-hidden bg-slate-50">
            <div className="container mx-auto px-4">

                {/* Section 1: The 95% Problem (Insurance) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="order-2 lg:order-1 relative">
                        {/* 3D Visual */}
                        <div className="relative h-[500px] w-full perspective-1000">
                            <motion.div
                                style={{ y: y1, rotateY: rotate }}
                                className="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col items-center justify-center z-10"
                            >
                                <div className="w-48 h-48 rounded-full bg-red-50 flex items-center justify-center mb-6">
                                    <ShieldAlert className="w-24 h-24 text-red-500" />
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-2">95%</h3>
                                <p className="text-slate-500 text-lg text-center">of Nigerians are one emergency away from debt.</p>

                                {/* Floating Expense Cards */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-lg border border-red-100"
                                >
                                    <p className="text-xs text-slate-400">Emergency C-Section</p>
                                    <p className="font-bold text-red-600">-₦450,000</p>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-20 left-10 bg-white p-4 rounded-xl shadow-lg border border-red-100"
                                >
                                    <p className="text-xs text-slate-400">Typhoid Treatment</p>
                                    <p className="font-bold text-red-600">-₦85,000</p>
                                </motion.div>
                            </motion.div>

                            {/* Background Blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-600 mb-6">
                            <ShieldAlert className="mr-2 h-4 w-4" />
                            Financial Protection
                        </div>
                        <TextEffect
                            text="Don't let a hospital bill destroy your future."
                            tag="h2"
                            className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight"
                            perWord
                        />
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We've all heard the stories. A sudden illness, a frantic call for donations.
                            MeddyPal stops the cycle. Get comprehensive HMO coverage starting from just ₦3,500/month.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {["Instant Activation (No Waiting Period)", "Covers Surgeries & Emergencies", "Plans for Families & Seniors"].map((item, i) => (
                                <li key={i} className="flex items-center text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <FutureButton className="gap-2">
                            View Affordable Plans <ArrowRight className="w-4 h-4" />
                        </FutureButton>
                    </div>
                </div>

                {/* Section 2: Fragmented Records */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-[#0066FF] mb-6">
                            <FileWarning className="mr-2 h-4 w-4" />
                            Unified Records
                        </div>
                        <TextEffect
                            text="Stop carrying that dusty file folder."
                            tag="h2"
                            className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight"
                            perWord
                        />
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            "What drugs did you take last year?" If you can't remember, your doctor is guessing.
                            MeddyPal unifies your history from every hospital, lab, and pharmacy into one secure timeline.
                        </p>
                        <FutureButton variant="secondary" className="gap-2">
                            Start Your Digital Record <ArrowRight className="w-4 h-4" />
                        </FutureButton>
                    </div>

                    <div className="relative">
                        {/* 3D Visual */}
                        <div className="relative h-[500px] w-full perspective-1000">
                            <motion.div
                                style={{ y: y2 }}
                                className="absolute inset-0 z-10"
                            >
                                {/* Stack of Records */}
                                <motion.div
                                    initial={{ rotate: -5, y: 0 }}
                                    whileInView={{ rotate: -15, y: -20, x: -20 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute top-1/4 left-1/4 w-64 h-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-6 flex flex-col"
                                >
                                    <div className="w-12 h-12 rounded-full bg-slate-100 mb-4" />
                                    <div className="h-4 w-3/4 bg-slate-100 rounded mb-2" />
                                    <div className="h-4 w-1/2 bg-slate-100 rounded" />
                                    <div className="mt-auto pt-4 border-t border-slate-100">
                                        <p className="text-xs text-slate-400">General Hospital Ikeja</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ rotate: 5, y: 0 }}
                                    whileInView={{ rotate: 15, y: -20, x: 20 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                    className="absolute top-1/4 right-1/4 w-64 h-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-6 flex flex-col z-20"
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-50 mb-4 flex items-center justify-center">
                                        <Activity className="w-6 h-6 text-[#0066FF]" />
                                    </div>
                                    <div className="h-4 w-3/4 bg-slate-100 rounded mb-2" />
                                    <div className="h-4 w-1/2 bg-slate-100 rounded" />
                                    <div className="mt-auto pt-4 border-t border-slate-100">
                                        <p className="text-xs text-slate-400">MeddyPal Unified Record</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Background Blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
