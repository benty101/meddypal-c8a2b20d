import React from 'react';
import { motion } from 'framer-motion';

const TrustMarquee = () => {
    return (
        <section className="py-6 border-y bg-white overflow-hidden border-slate-100">
            <div className="text-center mb-6">
                <span className="text-xs font-mono uppercase text-slate-500 tracking-widest">Built with Nigeria's Healthcare Ecosystem</span>
            </div>

            <div className="relative flex w-full overflow-hidden">
                {/* First Set */}
                <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-16 px-8">
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">RELIANCE HMO</span>
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">AXA MANSARD</span>
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">LUTH</span>
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">SYNLAB</span>
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">HYGEIA</span>
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">ROCHE</span>
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">LAGOON HOSPITALS</span>
                </div>

                {/* Second Set (Duplicate) */}
                <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-16 px-8" aria-hidden="true">
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">RELIANCE HMO</span>
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">AXA MANSARD</span>
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">LUTH</span>
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">SYNLAB</span>
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">HYGEIA</span>
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">ROCHE</span>
                    <span className="text-xl font-bold font-display text-slate-800 whitespace-nowrap">LAGOON HOSPITALS</span>
                </div>

                {/* Gradient Masks for edges */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default TrustMarquee;
