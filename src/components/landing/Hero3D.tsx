import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { use3DRotation, useParallax } from "@/lib/3d-utils";
import { FutureButton } from "@/components/ui/FutureButton";
import { ArrowRight, Shield, Activity, Stethoscope, Pill, QrCode, WifiOff } from "lucide-react";
import { ParticleField } from "@/components/ui/ParticleField";

export const Hero3D = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Keep parallax for vertical movement only
    const y = useParallax(scrollYProgress, 50);

    // Floating Elements Parallax
    const floatY1 = useParallax(scrollYProgress, -50);
    const floatY2 = useParallax(scrollYProgress, -100);
    const floatY3 = useParallax(scrollYProgress, -75);

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden bg-white pt-12 pb-0">
            <ParticleField />

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-[20%] -right-[10%] h-[800px] w-[800px] rounded-full bg-blue-50/50 blur-3xl" />
                <div className="absolute top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-teal-50/50 blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto grid min-h-[70vh] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">

                {/* Text Content */}
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-sm font-medium mb-6 border border-blue-100 dark:border-blue-800">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            #1 Healthcare Platform in Nigeria
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-heading text-5xl font-bold leading-tight text-[#0F172A] lg:text-7xl"
                    >
                        Your Lifelong Health Partner: <br />
                        <span className="text-primary">
                            Access, Manage, and Thrive
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-xl text-lg text-slate-600"
                    >
                        MeddyPal empowers you with comprehensive patient-owned health data, affordable insurance, and instant telemedicine—all in one ecosystem.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <FutureButton size="lg" className="relative gap-2 bg-[#0066FF] hover:bg-[#0055DD] border-none text-white shadow-xl">
                            Join MeddyPal Today <ArrowRight className="h-4 w-4" />
                        </FutureButton>
                        <FutureButton variant="ghost" size="lg" className="gap-2">
                            Explore Our Solutions
                        </FutureButton>
                    </motion.div>

                    {/* Secure & Private Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-8 flex items-center gap-6 text-xs text-slate-500 font-medium py-4 border-t border-slate-100"
                    >
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-emerald-500" />
                            Secure & Private
                        </div>
                        <div className="flex items-center gap-2">
                            <WifiOff className="w-4 h-4 text-emerald-500" />
                            Works Offline
                        </div>
                        <div className="flex items-center gap-2">
                            <QrCode className="w-4 h-4 text-emerald-500" />
                            Emergency QR Sharing
                        </div>
                    </motion.div>
                </div>

                {/* 3D Phone Mockup - Single Phone with Dashboard */}
                <div className="relative flex items-center justify-center perspective-1000 py-20">
                    <motion.div
                        style={{ y }}
                        animate={{
                            y: [0, -15, 0], // Gentle floating
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        whileHover={{
                            scale: 1.05,
                            y: -25, // Lift up on hover
                            transition: { duration: 0.4, ease: "easeOut" }
                        }}
                        className="relative z-20 w-[300px] md:w-[340px] cursor-pointer"
                    >
                        <img
                            src="/hero-dashboard-app.png"
                            alt="MeddyPal Dashboard Interface"
                            className="w-full h-auto shadow-2xl rounded-[3rem] transition-shadow duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,102,255,0.25)]"
                        />
                    </motion.div>

                    {/* Floating Elements - Adjusted positions to be closer */}

                    {/* Top Right - Vitals */}
                    <motion.div
                        style={{ y: floatY1, z: 50 }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-20 -right-2 md:-right-4 z-30 rounded-xl bg-white p-3 shadow-[0_20px_40px_-10px_rgba(0,102,255,0.15)] border border-slate-100 pointer-events-none"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <Activity className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Vitals Updated</p>
                                <p className="font-bold text-slate-900 text-sm">Just now</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Left - Insurance */}
                    <motion.div
                        style={{ y: floatY2, z: 40 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-32 -left-2 md:-left-8 z-30 rounded-xl bg-white p-3 shadow-[0_20px_40px_-10px_rgba(0,102,255,0.15)] border border-slate-100 pointer-events-none"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <Shield className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Insurance Active</p>
                                <p className="font-bold text-slate-900 text-sm">Hygeia HMO</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Top Left - Appointment */}
                    <motion.div
                        style={{ y: floatY3, z: 30 }}
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        className="absolute top-40 -left-4 md:-left-12 z-20 rounded-xl bg-white p-3 shadow-[0_20px_40px_-10px_rgba(0,102,255,0.15)] border border-slate-100 pointer-events-none"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                <Stethoscope className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Next Appt</p>
                                <p className="font-bold text-slate-900 text-sm">Dr. Okonjo</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Right - Meds */}
                    <motion.div
                        style={{ y: floatY1, z: 60 }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-20 -right-4 md:-right-8 z-20 rounded-xl bg-white p-3 shadow-[0_20px_40px_-10px_rgba(0,102,255,0.15)] border border-slate-100 pointer-events-none"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                                <Pill className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Meds Taken</p>
                                <p className="font-bold text-slate-900 text-sm">2/2 Today</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
