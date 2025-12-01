import React from 'react';
import Navbar from '@/components/landing-new/Navbar';
import Footer from '@/components/landing-new/Footer';
import { motion } from 'framer-motion';
import { BookOpen, Users, MessageCircle } from 'lucide-react';

const Community = () => {
    return (
        <div className="min-h-screen font-display bg-background-light dark:bg-background-dark text-slate-700 dark:text-slate-300 antialiased selection:bg-primary/20 selection:text-primary">
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            MeddyPal <span className="text-primary">Knowledge Hub</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Join the community, access health resources, and stay informed.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: BookOpen, title: "Health Articles", desc: "Expert-reviewed articles on common conditions and wellness tips." },
                            { icon: Users, title: "Support Groups", desc: "Connect with others facing similar health challenges." },
                            { icon: MessageCircle, title: "Forums", desc: "Ask questions and share experiences in our moderated forums." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center"
                            >
                                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Community;
