import React from 'react';
import { Lock, Heart, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const features = [
    {
        icon: Lock,
        title: "Your Complete Health Story, from Childhood Onward",
        description: "Your health is not a series of isolated events. It's a continuous story. MeddyPal gives you a personal health record (PHR) system where you own your longitudinal health data from birth to death. Connect vaccinations, checkups, and surgeries into one timeline.",
        color: "bg-blue-100 dark:bg-blue-900/50",
        textColor: "text-primary",
        image: "/feature-patient-data.png", // Using the generated image
        link: "#"
    },
    {
        icon: Heart,
        title: "Unlock Your DNA for Preventive Care",
        description: "Healthcare should be predictive, not just reactive. We integrate genomics into your health story to predict disease risks before they happen. From carrier screening to pharmacogenomics, understand your body better.",
        color: "bg-green-100 dark:bg-green-900/50",
        textColor: "text-green-600 dark:text-green-400",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXdq-0_TyWdOdIaMabBM4YoSHMESQVmBOnhGCnKTAi4Koxe0SuuzIwQduZoqCOTcRU-CXwPUCGNjhWtvrZNI5CitBQCFzN84KyLmrTJrej_oVXLLol8i9yrw7mUE4k_6YW_uBVHK2aLz1HlS9NbnSF-SpZrN3U8Igk0j-gLda1CLNRK8GozRef0zX2jUvmevYg5W0O9BWbBBJzOf2DtIXvPNG_QwwDAaHE9uAaXdnHZMDJQufk1EGBEJ1UGQ_hu6ojDsf6bLnNEVg", // Placeholder/Fallback
        link: "#"
    },
    {
        icon: Search,
        title: "Instant Access When It Matters Most",
        description: "Finding care shouldn't be a maze. Easily find and book appointments with verified Nigerian doctors and facilities. In emergencies, first responders can scan your QR code for critical allergy and condition info.",
        color: "bg-indigo-100 dark:bg-indigo-900/50",
        textColor: "text-indigo-600 dark:text-indigo-400",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv6c4l1Hd9H_mplh9riCbsQSUrmStF-Et2gefF8QzR-KLI5JuCdFanD2UUs8mGVJPCiU8Yi6zBHY5PXUywFVLmAS0BQIEM2PUnDVNQhZmJ4YiPNdxNh8HC3Rg9UUbm6zSzaX-GXNyZZ7k6zdhFtqvNMm4CbSz9thBa8GBUNNEdlQYruMIXqbPg_bUhQzU96Jm8ea-chU_3MiGfg1vwLUfS4F5xcC0g0Z4IGyNZVp1jm4Tmne2v8Q8qLAMJNqdqS2lbDCtDCIhwxtk", // Placeholder/Fallback
        link: "#"
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-6">
                <div className="flex flex-col space-y-32">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
                        >
                            <div className="lg:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 aspect-[4/3] group">
                                    <div className={`absolute inset-0 opacity-10 ${feature.color.replace('bg-', 'bg-gradient-to-br from-white to-')}`} />
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            <div className="lg:w-1/2">
                                <div className={`${feature.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                                    <feature.icon className={`w-8 h-8 ${feature.textColor}`} />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 font-display leading-tight">{feature.title}</h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">{feature.description}</p>
                                <Button variant="link" className={`p-0 h-auto font-semibold text-lg ${feature.textColor} hover:no-underline group`}>
                                    Learn more <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
