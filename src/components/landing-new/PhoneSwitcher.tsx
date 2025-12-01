import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, Hash, MessageSquare, Battery, Signal, Wifi } from 'lucide-react';

const PhoneSwitcher = () => {
    const [activePhone, setActivePhone] = useState<'smart' | 'feature'>('smart');

    return (
        <div className="relative min-h-[600px] flex flex-col items-center justify-center py-12">
            <div className="relative w-[300px] h-[600px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {activePhone === 'smart' ? (
                        <motion.div
                            key="smart"
                            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-white rounded-[3rem] border-4 border-slate-200 p-2 shadow-2xl overflow-hidden"
                        >
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-white rounded-b-2xl z-20 shadow-sm border-b border-x border-slate-100"></div>

                            {/* Screen */}
                            <div className="w-full h-full bg-slate-50 rounded-[2.5rem] overflow-hidden flex flex-col relative text-slate-900">
                                {/* Status Bar */}
                                <div className="px-6 pt-3 flex justify-between text-[10px] opacity-70 text-slate-900">
                                    <span>9:41</span>
                                    <div className="flex gap-1">
                                        <Signal className="w-3 h-3" />
                                        <Wifi className="w-3 h-3" />
                                        <Battery className="w-3 h-3" />
                                    </div>
                                </div>

                                {/* App UI */}
                                <div className="p-6 pt-8">
                                    <div className="flex justify-between items-center mb-8">
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900">Hello, Sarah</h4>
                                            <p className="text-xs text-slate-500">ID: #MP-2024</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">S</div>
                                    </div>

                                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-5 rounded-2xl mb-6 shadow-lg text-white">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="text-xs font-medium opacity-80">Reliance HMO</div>
                                            <div className="bg-white/20 px-2 py-1 rounded text-[10px]">Active</div>
                                        </div>
                                        <div className="text-2xl font-bold mb-2">₦450,000</div>
                                        <div className="text-xs opacity-80">Coverage Remaining</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white border border-slate-100 p-4 rounded-xl flex flex-col items-center gap-2 shadow-sm">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                                <WifiOff className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-medium text-slate-700">Offline Mode</span>
                                        </div>
                                        <div className="bg-white border border-slate-100 p-4 rounded-xl flex flex-col items-center gap-2 shadow-sm">
                                            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                                                <MessageSquare className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-medium text-slate-700">Chat Doctor</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="feature"
                            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-slate-200 rounded-[2rem] border-4 border-slate-300 p-4 shadow-2xl flex flex-col"
                        >
                            {/* Speaker */}
                            <div className="h-1 w-12 bg-slate-400 rounded-full mx-auto mb-6"></div>

                            {/* Screen */}
                            <div className="bg-[#9ca3af] h-[200px] w-full rounded-lg mb-6 p-3 font-mono text-xs flex flex-col text-black shadow-inner border-4 border-slate-400">
                                <div className="border-b border-black/20 pb-1 mb-2 font-bold">MeddyPal USSD</div>
                                <div className="space-y-1">
                                    <div>1. Check Balance</div>
                                    <div>2. Find Hospital</div>
                                    <div>3. Refill Meds</div>
                                    <div>4. Speak to Doctor</div>
                                </div>
                                <div className="mt-auto pt-2">&gt; _</div>
                            </div>

                            {/* Keypad */}
                            <div className="grid grid-cols-3 gap-3 mt-auto">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((key) => (
                                    <div key={key} className="h-10 rounded bg-white shadow-sm flex items-center justify-center text-slate-900 font-bold hover:bg-slate-50 active:scale-95 transition-all cursor-pointer border-b-2 border-slate-300">
                                        {key}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex gap-4 mt-12 bg-slate-100 p-2 rounded-full">
                <button
                    onClick={() => setActivePhone('smart')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activePhone === 'smart' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-900'
                        }`}
                >
                    Smartphone App
                </button>
                <button
                    onClick={() => setActivePhone('feature')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activePhone === 'feature' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-900'
                        }`}
                >
                    Feature Phone (USSD)
                </button>
            </div>
        </div>
    );
};

export default PhoneSwitcher;
