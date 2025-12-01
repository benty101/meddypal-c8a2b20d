import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Award, Server } from "lucide-react";

const badges = [
    {
        icon: ShieldCheck,
        label: "NDPR Compliant",
        color: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-100"
    },
    {
        icon: Lock,
        label: "Bank-Grade Security",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100"
    },
    {
        icon: Server,
        label: "Data Residency in Nigeria",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100"
    },
    {
        icon: Award,
        label: "NBRDA Partner",
        color: "text-teal-600",
        bg: "bg-teal-50",
        border: "border-teal-100"
    }
];

export const TrustIndicators = () => {
    return (
        <section className="py-12 bg-white border-y border-slate-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex items-center gap-3 px-6 py-3 rounded-full border ${badge.bg} ${badge.border}`}
                        >
                            <badge.icon className={`w-5 h-5 ${badge.color}`} />
                            <span className={`font-medium text-sm ${badge.color}`}>
                                {badge.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
