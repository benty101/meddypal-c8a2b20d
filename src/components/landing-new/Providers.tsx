import React from 'react';
import { ShieldCheck, Zap, Users, Building2 } from 'lucide-react';

const Providers = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold text-sm bg-blue-100 dark:bg-blue-900/50 py-1 px-3 rounded-full">
                        FOR CARE PROVIDERS
                    </span>
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-6 font-display">Built for Excellence in Healthcare</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-3xl mx-auto">
                        Enterprise-grade features designed specifically for the Nigerian healthcare ecosystem
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: ShieldCheck,
                            title: "Patient-Owned Security",
                            description: "HIPAA-compliant, encrypted health data, and secure care-bonding for all health records."
                        },
                        {
                            icon: Zap,
                            title: "Lightning Fast",
                            description: "Access critical health data with sub-second response times even 99.5% uptime ecosystem."
                        },
                        {
                            icon: Users,
                            title: "Multi-User Access",
                            description: "Secure user roles, access management, and collaborative healthcare management."
                        },
                        {
                            icon: Building2,
                            title: "Certified Providers",
                            description: "A vetted network of providers ensures decentralized tender, coordinated treatments, and better outcomes."
                        }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-start p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors">
                            <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mb-4">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Providers;
