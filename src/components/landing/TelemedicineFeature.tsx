import React from 'react';
import { motion } from 'framer-motion';
import { Video, Calendar, MessageSquare, Clock } from 'lucide-react';

const TelemedicineFeature = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Instant Health Access. Anytime, Anywhere.</h2>
                    <p className="text-lg text-slate-500 mb-8">
                        Skip the waiting room. Connect with top Nigerian doctors via video or chat in minutes.
                    </p>
                    <ul className="space-y-5 text-slate-600">
                        <li className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
                            <span>24/7 Doctor availability</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Video className="w-5 h-5 text-emerald-600 shrink-0" />
                            <span>HD Video consultations</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0" />
                            <span>Instant chat for quick questions</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-white rounded-[2.5rem] p-4 border border-slate-200 shadow-xl max-w-md mx-auto w-full h-[400px] overflow-hidden"
                >
                    <div className="absolute inset-0 bg-slate-900">
                        {/* Fake Video Call UI */}
                        <div className="relative h-full w-full">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                                alt="Doctor"
                                className="w-full h-full object-cover opacity-80"
                            />

                            <div className="absolute top-4 right-4 w-24 h-32 bg-slate-800 rounded-xl border-2 border-slate-700 overflow-hidden shadow-lg">
                                {/* Self view placeholder */}
                                <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                                    <span className="text-[10px] text-slate-400">You</span>
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-red-600 transition-colors">
                                    <Video className="w-6 h-6" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-slate-700/80 backdrop-blur flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-slate-600 transition-colors">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="absolute top-6 left-6 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full text-white text-xs flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                Dr. Amina Okon
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TelemedicineFeature;
