import React from 'react';
import { UserPlus, Link as LinkIcon, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: UserPlus,
        title: "Sign Up & Profile",
        description: "Create your free account and complete your health profile. Add your basic details, chronic conditions, and allergies to start your health story.",
        color: "bg-blue-100 dark:bg-blue-900/50",
        textColor: "text-primary"
    },
    {
        icon: LinkIcon,
        title: "Connect & Collect",
        description: "Securely link your records from providers and wearables. Snap photos of old prescriptions or discharge summaries to digitize them instantly.",
        color: "bg-green-100 dark:bg-green-900/50",
        textColor: "text-green-600 dark:text-green-400"
    },
    {
        icon: BarChart3,
        title: "Manage & Improve",
        description: "Track your health trends, book services, and get personalized recommendations. Receive alerts for checkups and medication refills.",
        color: "bg-indigo-100 dark:bg-indigo-900/50",
        textColor: "text-indigo-600 dark:text-indigo-400"
    }
];

const HowItWorks = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 font-display">How It Works</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">Get started with MeddyPal in three simple steps and take control of your health journey.</p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 transform md:-translate-x-1/2" />

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 md:text-right">
                                    {index % 2 === 0 && (
                                        <div className="hidden md:block">
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{step.title}</h3>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                                        </div>
                                    )}
                                    {index % 2 !== 0 && (
                                        <div className="md:hidden pl-20">
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{step.title}</h3>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="relative flex-shrink-0 z-10">
                                    <div className={`${step.color} p-4 rounded-full border-4 border-white dark:border-slate-900 shadow-lg`}>
                                        <step.icon className={`w-8 h-8 ${step.textColor}`} />
                                    </div>
                                    <span className="absolute -top-2 -right-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900">
                                        {index + 1}
                                    </span>
                                </div>

                                <div className="flex-1">
                                    {index % 2 !== 0 && (
                                        <div className="hidden md:block">
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{step.title}</h3>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                                        </div>
                                    )}
                                    {index % 2 === 0 && (
                                        <div className="md:hidden pl-20 -mt-20">
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{step.title}</h3>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
