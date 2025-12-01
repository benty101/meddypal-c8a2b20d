import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/landing-new/Navbar';
import Footer from '@/components/landing-new/Footer';
import ServicesCarousel from '@/components/landing-new/ServicesCarousel';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Activity,
    FolderHeart,
    Video,
    Pill,
    FlaskConical,
    History,
    Wallet,
    Dna,
    QrCode,
    Sparkles,
    Star,
    Shield
} from 'lucide-react';

const Services = () => {
    const parallaxRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Mouse parallax effect for hero floating cards
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const layers = document.querySelectorAll('.parallax-layer');
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            layers.forEach((layer) => {
                const depth = parseFloat((layer as HTMLElement).getAttribute('data-depth') || '0.1');
                const moveX = x * depth * 20;
                const moveY = y * depth * 20;
                (layer as HTMLElement).style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            });
        };

        if (window.matchMedia("(min-width: 1024px)").matches) {
            document.addEventListener('mousemove', handleMouseMove);
            return () => document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    // Scroll reveal observer
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={parallaxRef} className="min-h-screen font-display bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 bg-gradient-to-b from-slate-50/50 to-white border-b border-slate-100 overflow-hidden">
                {/* Parallax Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-emerald-50 rounded-full mix-blend-multiply blur-3xl animate-spin-slow opacity-60"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-50 rounded-full mix-blend-multiply blur-3xl animate-spin-slow opacity-60" style={{ animationDirection: 'reverse' }}></div>

                    {/* Floating Abstract Cards (Parallax) - SPACED TO AVOID TEXT OVERLAP */}
                    <div data-depth="0.15" className="parallax-layer absolute top-[10%] left-[5%] hidden xl:block z-20 transition-transform duration-100 ease-out">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-3 rounded-2xl bg-white shadow-soft border border-slate-100 flex items-center gap-3 rotate-[-6deg]"
                        >
                            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                <History className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold text-slate-700">Patient-Owned Timeline</span>
                        </motion.div>
                    </div>

                    <div data-depth="0.25" className="parallax-layer absolute top-[15%] right-[5%] hidden xl:block z-20 transition-transform duration-100 ease-out">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-3 rounded-2xl bg-white shadow-soft border border-slate-100 flex items-center gap-3 rotate-[8deg]"
                        >
                            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                                <Wallet className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold text-slate-700">Insurance Wallet & Eligibility</span>
                        </motion.div>
                    </div>

                    <div data-depth="0.1" className="parallax-layer absolute bottom-[15%] left-[10%] hidden xl:block z-20 transition-transform duration-100 ease-out">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-3 rounded-2xl bg-white shadow-soft border border-slate-100 flex items-center gap-3 rotate-[3deg]"
                        >
                            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                                <Dna className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold text-slate-700">Genomics that Updates with Science</span>
                        </motion.div>
                    </div>

                    <div data-depth="0.3" className="parallax-layer absolute bottom-[20%] right-[8%] hidden xl:block z-20 transition-transform duration-100 ease-out">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-3 rounded-2xl bg-white shadow-soft border border-slate-100 flex items-center gap-3 rotate-[-4deg]"
                        >
                            <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                                <QrCode className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold text-slate-700">Emergency QR Share for Any Hospital</span>
                        </motion.div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wide mb-8 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        One Story. Lifelong Care. Owned by You.
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                        Ecosystem of <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">Care</span>
                    </h1>

                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
                        Explore our integrated services and connect with top-rated providers across Nigeria. We connect the dots between your history, your providers, and your future health.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5">
                            Start Your Timeline
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 hover:border-emerald-200 hover:text-emerald-700 hover:bg-emerald-50/50 transition-all">
                            Find Providers
                        </button>
                    </div>

                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-80">
                        Built for Nigeria. Ready for Real Care.
                    </p>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section id="services" className="py-32 bg-white relative">
                {/* Beam Animation */}
                <div className="absolute top-0 left-0 w-full h-px bg-slate-100 overflow-hidden">
                    <div className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-beam"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start mb-24 reveal-up">
                        <div className="max-w-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wide">Unified Health OS</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Comprehensive Health OS</h2>
                        </div>
                        <div className="md:w-1/2 md:pl-10 space-y-6">
                            <p className="text-slate-500 text-lg leading-relaxed">
                                In a landscape where patient records are fragmented across clinics, MeddyPal acts as your central nervous system. We do not simply store documents; we structure your life's data into a coherent narrative.
                            </p>
                            <p className="text-slate-500 text-base leading-relaxed">
                                We build a longitudinal history that helps providers spot risk signals earlier. From managing diagnostics to simplifying daily wellness, finding care shouldn't be a puzzle—it should be a clear picture.
                            </p>
                        </div>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(240px,auto)] mb-24">

                        {/* Card 1: EMR (Patient Owned Records) */}
                        <div className="md:col-span-2 row-span-2 bg-slate-50 rounded-4xl p-10 border border-slate-100 group relative overflow-hidden reveal-up hover:border-emerald-200 transition-colors duration-500">
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 text-slate-400 group-hover:text-emerald-600 group-hover:scale-110 transition-all duration-300">
                                    <FolderHeart className="w-7 h-7" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Universal Medical Records</h3>
                                <div className="space-y-4 mb-8 max-w-lg">
                                    <p className="text-slate-500 text-lg leading-relaxed">
                                        Securely store and share your history, allergies, and lab results. We consolidate fragmented paper trails into one searchable digital timeline that you essentially own.
                                    </p>
                                    <p className="text-slate-500 text-base leading-relaxed">
                                        Accessible by authorized doctors via OTP, even if you change hospitals. This ensures your medical story travels with you, preventing dangerous gaps in care when you move between providers.
                                    </p>
                                </div>
                                <div className="mt-auto flex gap-3 flex-wrap">
                                    <span className="px-4 py-1.5 bg-white rounded-full text-xs font-semibold text-slate-600 border border-slate-200 shadow-sm">Encryption AES-256</span>
                                    <span className="px-4 py-1.5 bg-white rounded-full text-xs font-semibold text-slate-600 border border-slate-200 shadow-sm">Instant Sharing</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Compare Insurance (CHANGED FROM TELEMEDICINE) */}
                        <div className="bg-white rounded-4xl p-8 border border-slate-100 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 reveal-up" style={{ transitionDelay: '100ms' }}>
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Compare Insurance</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Side-by-side comparison of 40+ HMO plans. Real-time eligibility checks, transparent pricing, instant digital enrollment.
                            </p>
                        </div>

                        {/* Card 3: Pharmacy */}
                        <div className="bg-white rounded-4xl p-8 border border-slate-100 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 reveal-up" style={{ transitionDelay: '150ms' }}>
                            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 text-amber-600 transition-transform duration-300 group-hover:scale-110">
                                <Pill className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Pharmacy Wallet</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Compare drug prices across the city. Order refills. We verify stock availability in real-time to save you the trip.
                            </p>
                        </div>

                        {/* Card 4: Diagnostics */}
                        <div className="md:col-span-1 bg-white rounded-4xl p-8 border border-slate-100 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 reveal-up" style={{ transitionDelay: '200ms' }}>
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                                <FlaskConical className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Lab Diagnostics</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Book tests at partner labs like Synlab. Results auto-sync to your timeline instantly, notifying your doctor automatically.
                            </p>
                        </div>

                        {/* Card 5: Vitals (Wide) */}
                        <div className="md:col-span-2 bg-slate-900 text-white rounded-4xl p-10 border border-slate-800 hover:border-slate-700 transition-colors duration-300 reveal-up flex flex-col sm:flex-row items-center gap-10" style={{ transitionDelay: '250ms' }}>
                            <div className="flex-1">
                                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 text-emerald-400">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Vitals & Lifestyle Tracking</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Connect wearables or log manually. Monitor long-term trends in BP, Glucose, and BMI. We help you prevent chronic conditions before they start by visualizing your daily patterns.
                                </p>
                            </div>
                            {/* Chart Graphic */}
                            <div className="w-full sm:w-64 h-32 flex items-end justify-between gap-1.5 px-4 pb-2 border-b border-slate-700">
                                <div className="w-full bg-emerald-500/20 hover:bg-emerald-500 transition-all duration-300 rounded-t-sm h-[40%]"></div>
                                <div className="w-full bg-emerald-500/20 hover:bg-emerald-500 transition-all duration-300 rounded-t-sm h-[60%]"></div>
                                <div className="w-full bg-emerald-500/20 hover:bg-emerald-500 transition-all duration-300 rounded-t-sm h-[45%]"></div>
                                <div className="w-full bg-emerald-500/20 hover:bg-emerald-500 transition-all duration-300 rounded-t-sm h-[80%]"></div>
                                <div className="w-full bg-emerald-500/20 hover:bg-emerald-500 transition-all duration-300 rounded-t-sm h-[55%]"></div>
                                <div className="w-full bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 rounded-t-sm h-[70%] relative group cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap -translate-y-2 group-hover:translate-y-0">
                                        120/80
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GENOMICS SUBSECTION */}
                    <div id="genomics" className="py-20 border-t border-slate-100 reveal-up">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-4 block">Precision Medicine</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Genomics for the Future</h3>
                                <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                    Understand your body at the deepest level. Our genomics module doesn't just give you a static report; it offers a dynamic biological profile that evolves.
                                </p>
                                <p className="text-slate-500 text-base leading-relaxed mb-8">
                                    We sequence your DNA once and store the VCF data securely. As global scientific research advances, we re-analyze your data to provide new insights into drug sensitivities and disease risks without requiring a new sample.
                                </p>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-lg text-blue-700 text-xs font-bold">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    VCF Reports That Update As Science Updates
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full relative">
                                {/* Pipeline Graphic */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="absolute h-full w-1/3 bg-emerald-500/50 blur-[2px] animate-beam"></div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                                    <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 text-center relative group hover:border-emerald-200 transition-colors">
                                        <div className="w-10 h-10 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-slate-400 mb-4 group-hover:text-emerald-600 transition-colors">1</div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-2">Consent & Enroll</h4>
                                        <p className="text-xs text-slate-500">Digital consent with granular privacy controls.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 text-center relative group hover:border-emerald-200 transition-colors">
                                        <div className="w-10 h-10 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-slate-400 mb-4 group-hover:text-emerald-600 transition-colors">2</div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-2">Sample Collection</h4>
                                        <p className="text-xs text-slate-500">At-home kit or partner lab visit for sequencing.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 text-center relative group hover:border-emerald-200 transition-colors">
                                        <div className="w-10 h-10 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-slate-400 mb-4 group-hover:text-emerald-600 transition-colors">3</div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-2">Evolving Insights</h4>
                                        <p className="text-xs text-slate-500">Longitudinal updates as medical science grows.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BUILT FOR NIGERIA SUBSECTION */}
                    <div className="py-20 border-t border-slate-100 reveal-up">
                        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                            <div className="relative z-10 max-w-3xl">
                                <div className="flex flex-wrap gap-3 mb-8">
                                    <span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">SMS & USSD Access</span>
                                    <span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">Offline-First Clinics</span>
                                    <span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">Local Languages Support</span>
                                    <span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">Emergency QR Share</span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Engineered for Our Reality</h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    We understand the context of healthcare in Nigeria. Unreliable data networks and power outages should not compromise patient safety. Our platform uses offline-first architecture to ensure data capture happens regardless of connectivity.
                                </p>
                                <p className="text-slate-400 text-base leading-relaxed">
                                    From robust USSD interfaces for feature phone users to low-bandwidth modes for rural clinics, we bridge the infrastructure gap. We ensure that quality care is accessible whether you are in Lagos or a remote outpost.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SERVICES CAROUSEL - PLACED BELOW "ENGINEERED FOR OUR REALITY" */}
                    <div className="py-20 reveal-up">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Explore All Our Services</h3>
                            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Comprehensive healthcare solutions designed for every aspect of your health journey</p>
                        </div>
                        <ServicesCarousel />
                    </div>

                    {/* TESTIMONIALS */}
                    <div className="py-20 reveal-up">
                        <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Trusted by Patients & Providers</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                                    ))}
                                </div>
                                <p className="text-slate-600 text-sm mb-6 leading-relaxed">"Having my entire family's medical history in one secure place has been a lifesaver during emergencies. No more explaining the same story ten times."</p>
                                <p className="text-xs font-bold text-slate-900">Chioma A.</p>
                                <p className="text-[10px] text-slate-500 uppercase">Lagos, Patient</p>
                            </div>

                            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow reveal-up" style={{ transitionDelay: '100ms' }}>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                                    ))}
                                </div>
                                <p className="text-slate-600 text-sm mb-6 leading-relaxed">"The offline-first feature means my clinic runs smoothly even when the network is down. The interface is intuitive and truly built for our needs."</p>
                                <p className="text-xs font-bold text-slate-900">Dr. Ibrahim K.</p>
                                <p className="text-[10px] text-slate-500 uppercase">Abuja, Chief Medical Director</p>
                            </div>

                            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow reveal-up" style={{ transitionDelay: '200ms' }}>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(4)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                                    ))}
                                    <Star className="w-4 h-4 text-slate-300 fill-slate-300" />
                                </div>
                                <p className="text-slate-600 text-sm mb-6 leading-relaxed">"Managing my parents' chronic conditions remotely was impossible before. Now I get alerts and can order their refills instantly."</p>
                                <p className="text-xs font-bold text-slate-900">David O.</p>
                                <p className="text-[10px] text-slate-500 uppercase">Port Harcourt, Caregiver</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-6 text-center reveal-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Healthcare Works When Stories Connect.</h2>
                    <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
                        Join the network that puts you in control. Secure, unified, and accessible anywhere.
                    </p>
                    <button className="px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-xl shadow-slate-900/20 mb-8">
                        Join Early Access
                    </button>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Patients • Providers • HMOs • Labs • Government — One Unified Story
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;
