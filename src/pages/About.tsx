import React, { useState } from 'react';
import Navbar from '@/components/landing-new/Navbar';
import Footer from '@/components/landing-new/Footer';
import { motion } from 'framer-motion';
import { FileX, Lock, Map, Check, ArrowRight, PlayCircle, Shield, Stethoscope, Building2, Heart, RefreshCw, Signal, Wifi, Battery, WifiOff, MessageSquare, HeartPulse, ShieldCheck, Landmark } from 'lucide-react';
import PhoneSwitcher from '@/components/landing-new/PhoneSwitcher';
import ServicesCarousel from '@/components/landing-new/ServicesCarousel';
import HeroVisual from '@/components/landing-new/HeroVisual';
import { Button } from '@/components/ui/button';

const About = () => {
    return (
        <div className="min-h-screen font-display bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
            <Navbar />

            <main className="pt-32 pb-0">
                {/* 1. Hero Section - Mission Statement */}
                <section className="relative pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 max-w-2xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-emerald-950">Our Mission</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 text-slate-900">
                                To democratize healthcare access for every Nigerian.
                            </h1>

                            <p className="text-lg leading-relaxed mb-8 max-w-lg text-slate-500">
                                We are building the operating system for African health—connecting patients, providers, and payers in one seamless, transparent ecosystem.
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <Button className="rounded-full px-8 py-6 bg-emerald-600 hover:bg-emerald-700 text-white text-base shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all">
                                    Join the Mission
                                </Button>
                                <Button variant="outline" className="rounded-full px-8 py-6 border-slate-200 text-slate-700 hover:bg-slate-50 text-base">
                                    Read Our Vision
                                </Button>
                            </div>

                            <div className="mt-8 flex items-center gap-6 text-xs text-slate-400 font-medium">
                                <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-500" /> Patient-First</span>
                                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Data Sovereignty</span>
                            </div>
                        </motion.div>

                        {/* Hero Visual */}
                        <div className="relative z-10 hidden lg:block">
                            <HeroVisual />
                        </div>
                    </div>
                </section>

                {/* 2. The Problem Section (Timeline) */}
                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Left: Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Healthcare is broken because <span className="text-slate-400">your story is broken.</span></h2>
                                <p className="mb-8 leading-relaxed text-slate-500 text-lg">
                                    In Nigeria, you are the only thread connecting your health events. Records get lost. Hospitals don't talk to each other. Access is a maze.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                            <FileX className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1 text-slate-900">Longitudinal data doesn't exist</h4>
                                            <p className="text-sm text-slate-500">Visits are isolated. No history follows you from childhood to adulthood.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                            <Lock className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1 text-slate-900">Patients don't own their data</h4>
                                            <p className="text-sm text-slate-500">Paper files rot in storage. You have no digital proof of your medical past.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                                            <Map className="w-5 h-5 text-cyan-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1 text-slate-900">Access is fragmented</h4>
                                            <p className="text-sm text-slate-500">Finding insurance, labs, or specialists is a disconnected nightmare.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right: Visual Timeline Story */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-8 border-l-2 border-slate-100 py-4"
                            >
                                {/* Timeline Item 1 */}
                                <div className="mb-12 relative group">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-slate-300 group-hover:bg-emerald-500 transition-colors shadow-sm"></div>
                                    <span className="text-xs font-mono text-slate-400 mb-2 block">2010 • Age 17</span>
                                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                                        <h4 className="text-sm font-bold mb-1 text-slate-900">Insect bite treated at School Clinic</h4>
                                        <p className="text-xs text-slate-500">Hand swollen. Treated, drained, bandaged. No permanent record created.</p>
                                    </div>
                                </div>

                                {/* Timeline Item 2 */}
                                <div className="mb-12 relative group">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-slate-300 group-hover:bg-red-500 transition-colors shadow-sm"></div>
                                    <span className="text-xs font-mono text-slate-400 mb-2 block">2014 - 2018</span>
                                    <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm opacity-75">
                                        <h4 className="text-sm font-bold mb-1 text-slate-700">The Gap Years</h4>
                                        <p className="text-xs text-slate-500">New city, new hospitals. Records lost. "What happened to your hand?" "I don't remember exactly."</p>
                                    </div>
                                </div>

                                {/* Timeline Item 3 */}
                                <div className="relative group">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-emerald-500 shadow-sm"></div>
                                    <span className="text-xs font-mono text-slate-400 mb-2 block">Today • Age 31</span>
                                    <div className="p-5 rounded-xl bg-white border-l-4 border-l-emerald-500 shadow-lg border-y border-r border-slate-100">
                                        <h4 className="text-sm font-bold mb-1 text-slate-900">Lipoma Diagnosis</h4>
                                        <p className="text-xs text-slate-500">Mass found in exact same spot. Connection missed for years due to fragmented data. <span className="mt-2 block text-emerald-600 font-semibold">MeddyPal prevents this.</span></p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 3. Carousel Section */}
                <section className="py-24 bg-slate-50 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">One home for your health. <br /> Three powerful layers.</h2>
                            <p className="text-slate-500">MeddyPal isn't just an app. It's an operating system connecting your past, present, and future health.</p>
                        </div>
                        <ServicesCarousel />
                    </div>
                </section>

                {/* 4. Genomics Section (Moved Up) */}
                <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                        {/* Left: Text */}
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider mb-2 block text-blue-600">Practical Genomics</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">From maternal health to lifelong insights.</h2>
                            <p className="mb-8 text-slate-500 text-lg">
                                Partnering with government to integrate genomics into routine care. We collect samples safely, analyze ethically, and provide actionable reports.
                            </p>

                            <div className="rounded-xl p-4 border inline-block bg-blue-50 border-blue-100">
                                <div className="flex items-center gap-3">
                                    <RefreshCw className="w-4 h-4 text-blue-600" />
                                    <span className="text-sm font-bold text-slate-900">Dynamic Reports</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-2 max-w-xs">
                                    "As science evolves, your genomic report evolves too." Old data gets re-annotated with new findings.
                                </p>
                            </div>
                        </div>

                        {/* Right: Pipeline Visual */}
                        <div className="relative pl-6 md:pl-12">
                            {/* Connecting Line */}
                            <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-slate-200"></div>

                            {/* Step 1 */}
                            <div className="relative flex items-center gap-6 mb-12">
                                <div className="w-6 h-6 rounded-full bg-white border-4 border-blue-600 z-10"></div>
                                <div className="bg-white border p-5 rounded-xl flex-1 shadow-sm border-slate-200">
                                    <h4 className="font-bold text-slate-900">Enroll & Consent</h4>
                                    <p className="text-xs text-slate-500 mt-1">Tiered consent on blockchain. Starts with maternal care.</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative flex items-center gap-6 mb-12">
                                <div className="w-6 h-6 rounded-full bg-white border-4 border-blue-600 z-10"></div>
                                <div className="bg-white border p-5 rounded-xl flex-1 shadow-sm border-slate-200">
                                    <h4 className="font-bold text-slate-900">Sample & Sequencing</h4>
                                    <p className="text-xs text-slate-500 mt-1">Non-invasive collection. VCF generation. African-specific annotation.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative flex items-center gap-6">
                                <div className="w-6 h-6 rounded-full bg-white border-4 border-blue-600 z-10"></div>
                                <div className="bg-blue-50 border p-5 rounded-xl flex-1 shadow-md border-blue-100">
                                    <h4 className="font-bold text-slate-900">Actionable Insights</h4>
                                    <p className="text-xs text-slate-500 mt-1">Disease risk, pharmacogenomics, and family screening alerts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Nigeria First Section (Phone Switcher) */}
                <section className="py-24 bg-slate-50 border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <div className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-100 mb-6">
                                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Nigeria-First Design</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Built for Lagos, Kano, and everywhere in between.</h2>
                            <p className="mb-8 text-slate-500 text-lg">
                                Silicon Valley apps don't work when the network is down. MeddyPal is built for the reality of Nigeria.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-white border border-slate-100">
                                    <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">USSD Codes</div>
                                    <p className="text-xs text-slate-500">Dial *347# to check insurance balance or find hospitals. Works on any phone.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white border border-slate-100">
                                    <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">Offline-First</div>
                                    <p className="text-xs text-slate-500">View records and queue appointments without internet. Syncs when online.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white border border-slate-100">
                                    <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">SMS Reminders</div>
                                    <p className="text-xs text-slate-500">Universal alerts for medications and appointments via standard SMS.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white border border-slate-100">
                                    <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">Multi-Lingual</div>
                                    <p className="text-xs text-slate-500">English, Pidgin, Yoruba, Igbo, Hausa. Health in your language.</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Toggle (Phone Switcher) */}
                        <div className="order-1 lg:order-2 flex justify-center relative min-h-[500px] items-center">
                            <PhoneSwitcher />
                        </div>
                    </div>
                </section>

                {/* 6. Platform Stakeholders (Four Wins) */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">One platform. Four wins.</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Card 1 */}
                            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-emerald-50 text-emerald-600">
                                    <HeartPulse className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Patients</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Own your entire health story. Access care instantly. Never lose a record again.</p>
                            </div>
                            {/* Card 2 */}
                            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-cyan-50 text-cyan-600">
                                    <Stethoscope className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Providers</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Multi-HMO billing in one place. Instant patient history via QR check-in.</p>
                            </div>
                            {/* Card 3 */}
                            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-blue-50 text-blue-600">
                                    <ShieldCheck className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Insurers</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Digital front door. Easy enrollment and transparency for claims.</p>
                            </div>
                            {/* Card 4 */}
                            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-orange-50 text-orange-600">
                                    <Landmark className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Government</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Population health analytics & genomic insights for policy planning.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
