import React, { useRef, useState } from 'react';
import { User, History, QrCode, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroVisual = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -6; // Max -6 to 6 deg
        const rotateYValue = ((x - centerX) / centerX) * 6;  // Max -6 to 6 deg

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div
            className="relative perspective-1000 py-10"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Backing Elements (Glow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-r from-emerald-100 to-amber-50 rounded-[3rem] blur-3xl opacity-60 animate-pulse"></div>

            {/* Main Card */}
            <motion.div
                ref={cardRef}
                className="relative w-[380px] h-[600px] mx-auto rounded-[2.5rem] bg-white shadow-2xl p-6 flex flex-col justify-between border border-slate-100 overflow-hidden"
                style={{
                    transformStyle: 'preserve-3d',
                }}
                animate={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                {/* Flashlight/Sheen Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none z-30" />

                {/* App Header */}
                <div className="flex justify-between items-center mb-6 relative z-20">
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Health Wallet</p>
                        <h3 className="text-lg font-bold text-slate-900">Hello, Chioma</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center">
                        <User className="w-5 h-5 text-slate-400" />
                    </div>
                </div>

                {/* Insurance Balance Card */}
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-5 text-white mb-6 shadow-lg relative z-20 group cursor-default">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-medium opacity-80">Active Policy</span>
                        <span className="bg-white/20 text-xs px-2 py-0.5 rounded backdrop-blur-sm">Gold</span>
                    </div>
                    <div className="text-3xl font-mono font-medium mb-1">₦450,000</div>
                    <p className="text-[10px] opacity-70 mb-4">Coverage Balance</p>

                    <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                        <div className="bg-amber-400 w-3/4 h-full rounded-full group-hover:w-full transition-all duration-1000"></div>
                    </div>
                    <p className="text-[10px] mt-2 text-right">No co-pay surprises</p>
                </div>

                {/* Timeline Feed */}
                <div className="flex-1 overflow-hidden relative z-20">
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="text-sm font-bold text-slate-800">Recent Timeline</h4>
                        <History className="w-4 h-4 text-slate-400" />
                    </div>

                    <div className="space-y-3 relative">
                        {/* Timeline Line */}
                        <div className="absolute left-3 top-2 bottom-0 w-0.5 bg-slate-100"></div>

                        {/* Item 1 */}
                        <div className="relative pl-8">
                            <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-emerald-500 z-10"></div>
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 hover:bg-emerald-50/50 transition-colors cursor-pointer">
                                <div className="flex justify-between mb-1">
                                    <span className="text-xs font-semibold text-slate-700">Lab Results</span>
                                    <span className="text-[10px] text-slate-400">Today</span>
                                </div>
                                <p className="text-xs text-slate-500">Malaria parasite screening negative.</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="relative pl-8">
                            <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-slate-300 z-10"></div>
                            <div className="bg-white p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
                                <div className="flex justify-between mb-1">
                                    <span className="text-xs font-semibold text-slate-700">Pharmacy</span>
                                    <span className="text-[10px] text-slate-400">Oct 24</span>
                                </div>
                                <p className="text-xs text-slate-500">Refill: Amoxicillin 500mg</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-4 gap-2 relative z-20">
                    <div className="flex flex-col items-center gap-1 cursor-pointer group">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                            <QrCode className="w-5 h-5" />
                        </div>
                        <span className="text-[9px] font-medium text-slate-500">Emergency</span>
                    </div>
                    <div className="col-span-3 bg-slate-900 rounded-full flex items-center justify-center gap-2 text-white cursor-pointer hover:opacity-90 transition-opacity shadow-lg shadow-slate-900/20">
                        <span className="text-xs font-semibold">Book Appointment</span>
                        <ArrowRight className="w-3 h-3" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroVisual;
