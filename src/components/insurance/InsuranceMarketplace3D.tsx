import { motion } from "framer-motion";
import { PlanCard3D } from "./PlanCard3D";
import { TextEffect } from "@/components/ui/TextEffect";
import { ShieldCheck, Zap, Heart } from "lucide-react";

export const InsuranceMarketplace3D = () => {
    const plans = [
        {
            name: "Bronze Starter",
            price: "₦3,500",
            color: "bg-orange-500",
            features: [
                "General Consultations (Unlimited)",
                "Malaria Treatment",
                "Basic X-Rays & Labs",
                "Accident & Emergency Care"
            ],
            delay: 0.1
        },
        {
            name: "Silver Flex",
            price: "₦7,500",
            color: "bg-slate-500",
            recommended: true,
            features: [
                "Everything in Bronze",
                "Specialist Consultations",
                "Dental Care (Basic)",
                "Eye Care & Glasses",
                "Minor Surgeries"
            ],
            delay: 0.2
        },
        {
            name: "Gold Premium",
            price: "₦15,000",
            color: "bg-yellow-500",
            features: [
                "Everything in Silver",
                "Antenatal & Delivery",
                "Physiotherapy",
                "Advanced Surgeries",
                "Annual Health Checkup",
                "Gym Membership Discounts"
            ],
            delay: 0.3
        }
    ];

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark relative overflow-hidden">

            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -50, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                    animate={{ y: [0, 50, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-100/30 dark:bg-green-900/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
                />
            </div>

            <div className="container mx-auto px-4 py-12 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-sm font-bold mb-6 border border-blue-100 dark:border-blue-800"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        <span className="tracking-wide">MEDDYPAL PROTECT</span>
                    </motion.div>

                    <TextEffect
                        text="Health Insurance that actually works."
                        tag="h1"
                        className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight font-display"
                        perWord
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
                    >
                        No paperwork. No waiting periods. Just instant coverage for you and your loved ones.
                    </motion.p>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <PlanCard3D key={index} {...plan} />
                    ))}
                </div>

                {/* Trust/Enrichment Section */}
                <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: Zap, title: "Instant Activation", desc: "Pay now, start using it in 5 minutes." },
                        { icon: Heart, title: "No Hidden Fees", desc: "What you see is exactly what you pay." },
                        { icon: ShieldCheck, title: "Trusted Providers", desc: "Access to 2,000+ top hospitals." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            viewport={{ once: true }}
                            className="p-6"
                        >
                            <div className="w-12 h-12 mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-4 text-primary">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2 font-display">{item.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};
