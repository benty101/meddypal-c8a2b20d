import React, { useEffect, useState } from 'react';
import Navbar from '@/components/landing-new/Navbar';
import Footer from '@/components/landing-new/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MapPin,
    Search,
    Filter,
    Star,
    Shield,
    Clock,
    ChevronDown,
    Plus,
    Minus,
    Stethoscope,
    Pill,
    TestTube,
    Home,
    Video,
    Smartphone,
    CalendarCheck,
    Navigation,
    Hospital,
    Activity
} from 'lucide-react';

const Providers = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [activeFilter, setActiveFilter] = useState('All');

    // Preloader effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800);
        return () => clearTimeout(timer);
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
    }, [isLoading]);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const providers = [
        {
            name: "Lagoon Hospitals",
            type: "Hospital",
            location: "17B Bourdillon Rd, Ikoyi",
            rating: 4.8,
            tags: "General • 24hrs",
            accepts: ["A", "R", "H"], // AXA, Reliance, Hygeia
            isOpen: true,
            isFeatured: true
        },
        {
            name: "Reddington Hospital",
            type: "Hospital",
            location: "Victoria Island, Lagos",
            rating: 4.5,
            tags: "Multi-specialist",
            accepts: ["A", "+4"],
            isOpen: true,
            isFeatured: false
        },
        {
            name: "Medplus Pharmacy",
            type: "Pharmacy",
            location: "Lekki Phase 1",
            rating: 4.9,
            tags: "Pharmacy",
            accepts: [],
            isOpen: true,
            isFeatured: false
        }
    ];

    const faqs = [
        {
            q: "Do hospitals need internet to see my records?",
            a: "No. MeddyPal's offline-first architecture ensures that your critical health data, insurance eligibility, and emergency info are accessible even when the hospital's network is down."
        },
        {
            q: "Can I share my history before booking?",
            a: "Yes. You can generate a temporary, secure link or QR code to share specific parts of your medical history with a provider before you even step foot in their facility."
        },
        {
            q: "How do I know if a provider is truly verified?",
            a: "We conduct physical site inspections every 6 months. We verify MDCN licenses, check equipment functionality, and assess hygiene standards before listing any provider."
        },
        {
            q: "What HMOs are accepted?",
            a: "Our providers accept over 40+ HMO plans including Hygeia, Reliance, AXA Mansard, and Avon. You can filter the provider list specifically by your insurance plan."
        },
        {
            q: "Can I check my wallet eligibility at the point of care?",
            a: "Absolutely. Your MeddyPal wallet shows real-time insurance balance and eligibility, so you know exactly what is covered before you receive treatment."
        },
        {
            q: "Who owns the data in my timeline?",
            a: "You do. MeddyPal is a custodian, not an owner. You have full control to export, share, or delete your health data at any time."
        },
        {
            q: "Can I delete my story?",
            a: "Yes. In compliance with NDPR, you have the right to the 'erasure' of your data. You can permanently delete your account and all associated records from your settings."
        }
    ];

    return (
        <div className="min-h-screen font-display bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-[60] bg-white flex items-center justify-center"
                    >
                        <div className="relative">
                            <div className="w-16 h-16 rounded-full border-4 border-emerald-100 border-t-emerald-600 animate-spin"></div>
                            <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(5,150,105,0.4)] animate-pulse"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-48 pb-24 md:pt-64 md:pb-32 bg-gradient-to-b from-slate-50/50 to-white border-b border-slate-100 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-50 rounded-full mix-blend-multiply blur-3xl animate-spin-slow opacity-60"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-50 rounded-full mix-blend-multiply blur-3xl animate-spin-slow opacity-60" style={{ animationDirection: 'reverse' }}></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wide mb-8 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Find Care. Keep Your Story. Share in Seconds.
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                        Find Local <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">Healthcare Providers</span>
                    </h1>

                    <div className="max-w-2xl mx-auto space-y-6 mb-12 text-slate-500 text-lg leading-relaxed">
                        <p>
                            For too long, Nigerian patients have carried multiple brown folders from hospital to hospital, only to find that their providers don't communicate. Your medical history gets lost with every new admission, forcing you to start from scratch.
                        </p>
                        <p>
                            We are changing that. Search for verified providers near you, and when you arrive, share your unified health story in seconds. No more lost records, no more fragmented care.
                        </p>
                    </div>

                    {/* Search Block (Hero) */}
                    <div className="max-w-3xl mx-auto bg-white p-2 rounded-full shadow-lg border border-slate-200 flex flex-col md:flex-row items-center gap-2 mb-8 relative z-20">
                        <div className="flex-1 flex items-center px-4 w-full">
                            <MapPin className="text-slate-400 w-5 h-5 flex-shrink-0" />
                            <input
                                type="text"
                                placeholder="Allow location access?"
                                className="w-full bg-transparent border-none focus:ring-0 text-slate-800 px-4 py-3 outline-none placeholder:text-slate-400"
                            />
                        </div>
                        <div className="hidden md:block w-px h-8 bg-slate-100"></div>
                        <div className="flex-1 flex items-center px-4 w-full border-t md:border-t-0 border-slate-100">
                            <Search className="text-slate-400 w-5 h-5 flex-shrink-0" />
                            <input
                                type="text"
                                placeholder="See providers near you."
                                className="w-full bg-transparent border-none focus:ring-0 text-slate-800 px-4 py-3 outline-none placeholder:text-slate-400"
                            />
                        </div>
                        <button className="w-full md:w-auto px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20 whitespace-nowrap">
                            Allow Booking
                        </button>
                    </div>

                    {/* Filter Micro-block */}
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                            Filter by Provider Type → Specialty → Insurance → At-Home e-services
                        </p>
                    </div>
                </div>
            </section>

            {/* E-SERVICES SECTION */}
            <section id="e-services" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16 reveal-up">
                        <div className="md:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide mb-6">
                                <Home className="w-3 h-3" /> At-Home Care
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Healthcare Comes Home</h2>
                            <div className="space-y-4 text-slate-500 text-lg leading-relaxed">
                                <p>
                                    Why wait in traffic or crowded waiting rooms? Our E-services unlock faster care by bringing certified professionals directly to your doorstep. Whether it's a doctor's visit, nursing care, or lab sample collection, you get quality treatment in the comfort of your home.
                                </p>
                                <p>
                                    Best of all, every interaction, diagnosis, and result from these at-home services is automatically synced to your unified health timeline. Your data lives in one place, ensuring continuity of care regardless of where the service is delivered.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: Stethoscope, label: "Doctor Visit at Home" },
                                { icon: Activity, label: "Nurse Care at Home" },
                                { icon: TestTube, label: "Sample Collection at Home" },
                                { icon: Pill, label: "Medication Delivery" }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 hover:border-emerald-200 hover:shadow-sm transition-all group">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold text-slate-700 text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PROVIDERS LIST & MAP SECTION (New Design) */}
            <section id="providers" className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16 reveal-up">
                        <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-4 block">Network</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Find Care Near You</h2>

                        <div className="text-slate-500 text-lg space-y-4 leading-relaxed bg-white/50 backdrop-blur rounded-3xl p-6 border border-slate-100 shadow-sm inline-block">
                            <p>
                                Too often, medical histories are lost when changing hospitals, leading to repetitive tests and dangerous gaps in care.
                            </p>
                            <p className="text-base">
                                A disconnected test result today can become a disconnected cancer diagnosis later. MeddyPal changes this by giving you ownership of your data while providing real-time availability for hospitals, clinics, and pharmacies nearby.
                            </p>
                        </div>
                    </div>

                    {/* Provider Interface */}
                    <div className="bg-white rounded-[2rem] shadow-soft border border-slate-200 overflow-hidden min-h-[700px] flex flex-col md:flex-row reveal-up">

                        {/* Sidebar / Search */}
                        <div className="w-full md:w-[420px] border-b md:border-b-0 md:border-r border-slate-100 flex flex-col bg-white z-10 relative">
                            <div className="p-8 border-b border-slate-100 bg-white z-20">
                                <div className="relative group">
                                    <Search className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                                    <input type="text" placeholder="Search doctors, hospitals..." className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all outline-none placeholder:text-slate-400" />
                                </div>

                                {/* Filters */}
                                <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
                                    {['All', 'Hospitals', 'Clinics', 'Pharmacies'].map((filter) => (
                                        <button
                                            key={filter}
                                            onClick={() => setActiveFilter(filter)}
                                            className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${activeFilter === filter
                                                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                                                : 'bg-white border border-slate-200 text-slate-600 hover:border-emerald-500 hover:text-emerald-600'
                                                }`}
                                        >
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Results List */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {providers.map((provider, index) => (
                                    <div
                                        key={index}
                                        className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 reveal-up ${provider.isFeatured
                                            ? 'border-emerald-500 bg-emerald-50/40 shadow-card-active'
                                            : 'border-slate-100 hover:bg-slate-50 hover:border-slate-200'
                                            }`}
                                        style={{ transitionDelay: `${index * 70}ms` }}
                                    >
                                        {provider.isOpen && (
                                            <div className="flex justify-end mb-2">
                                                <span className="flex items-center gap-1.5 px-2 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Open
                                                </span>
                                            </div>
                                        )}
                                        <h4 className="font-bold text-slate-900 text-base mb-1">{provider.name}</h4>
                                        <p className="text-xs text-slate-500 mb-3 font-medium">{provider.location}</p>

                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="flex text-[10px] bg-white border border-slate-200 px-2 py-1 rounded-md text-slate-600 font-semibold shadow-sm">
                                                <Star className="w-3 h-3 text-amber-400 fill-amber-400 mr-1.5" /> {provider.rating}
                                            </span>
                                            <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">{provider.tags}</span>
                                        </div>

                                        {provider.accepts.length > 0 && (
                                            <div className="flex items-center gap-2 pt-4 border-t border-slate-200/50">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">Accepts:</span>
                                                {provider.accepts.map((hmo, i) => (
                                                    <div key={i} className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ring-2 ring-white ${hmo === 'A' ? 'bg-blue-100 text-blue-700' :
                                                        hmo === 'R' ? 'bg-purple-100 text-purple-700' :
                                                            hmo === 'H' ? 'bg-orange-100 text-orange-700' :
                                                                'bg-slate-100 text-slate-500'
                                                        }`}>
                                                        {hmo}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Visualization Area */}
                        <div className="flex-1 bg-slate-100 relative hidden md:block group overflow-hidden">
                            <div className="absolute inset-0 opacity-20" style={{
                                backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
                                backgroundSize: '24px 24px'
                            }}></div>

                            {/* Map Pin 1 (Active) */}
                            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                                <div className="bg-white px-4 py-2 rounded-xl shadow-lg mb-3 text-xs font-bold text-slate-900 whitespace-nowrap animate-bounce-soft">
                                    Lagoon Hospitals
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-emerald-600 border-[3px] border-white shadow-xl flex items-center justify-center text-white relative">
                                    <Hospital className="w-5 h-5 relative z-10" />
                                    <div className="absolute inset-0 rounded-full animate-pulse-slow bg-emerald-500 opacity-50 z-0"></div>
                                </div>
                            </div>

                            {/* Map Pin 2 */}
                            <div className="absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer z-10 hover:z-30 hover:scale-110 duration-200">
                                <div className="w-8 h-8 rounded-full bg-slate-800 border-[3px] border-white shadow-xl flex items-center justify-center text-white">
                                    <Hospital className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Map Pin 3 */}
                            <div className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer z-10 hover:z-30 hover:scale-110 duration-200">
                                <div className="w-8 h-8 rounded-full bg-amber-500 border-[3px] border-white shadow-xl flex items-center justify-center text-white">
                                    <Pill className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Expanded Bottom CTA / Explainer */}
                            <div className="absolute bottom-8 left-8 right-8 z-30">
                                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-soft border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                                            <Navigation className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 mb-0.5">Use your location?</p>
                                            <p className="text-xs text-slate-500 leading-snug">See wait times for clinics nearby.</p>
                                        </div>
                                    </div>
                                    <button className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                        Allow
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Provider Features */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="flex items-start gap-5 p-6 rounded-3xl hover:bg-white hover:shadow-soft transition-all duration-300 reveal-up border border-transparent hover:border-slate-100">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600">
                                <CalendarCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-slate-900 mb-2">Instant Booking</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">Book slots directly. No phone calls required.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5 p-6 rounded-3xl hover:bg-white hover:shadow-soft transition-all duration-300 reveal-up border border-transparent hover:border-slate-100" style={{ transitionDelay: '100ms' }}>
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-slate-900 mb-2">Live Wait Times</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">See how busy the ER is before you leave home.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5 p-6 rounded-3xl hover:bg-white hover:shadow-soft transition-all duration-300 reveal-up border border-transparent hover:border-slate-100" style={{ transitionDelay: '200ms' }}>
                            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0 text-purple-600">
                                <Star className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-slate-900 mb-2">Verified Reviews</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">Feedback from verified patients only.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section id="faq" className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6 reveal-up">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-emerald-200">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-bold text-slate-900">{faq.q}</span>
                                    {activeFaq === index ? (
                                        <Minus className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {activeFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Providers;
