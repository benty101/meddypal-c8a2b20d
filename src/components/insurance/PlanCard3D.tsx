import React from "react";
import { motion } from "framer-motion";
import { Check, Shield, Zap } from "lucide-react";
import { FutureButton } from "@/components/ui/FutureButton";

interface PlanProps {
    name: string;
    price: string;
    features: string[];
    recommended?: boolean;
    color: string;
    delay: number;
}

export const PlanCard3D = ({ name, price, features, recommended, color, delay }: PlanProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            className="relative group"
        >
            {/* 3D Tilt Container */}
            <motion.div
                whileHover={{ y: -10, rotateX: 5, rotateY: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-8 shadow-xl transition-all duration-300 ${recommended ? "ring-2 ring-offset-2 ring-[#0066FF]" : ""
                    }`}
            >
                {/* Recommended Badge */}
                {recommended && (
                    <div className="absolute top-0 right-0 bg-[#0066FF] text-white text-xs font-bold px-4 py-1 rounded-bl-xl shadow-lg">
                        MOST POPULAR
                    </div>
                )}

                {/* Background Gradient Blob */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl ${color}`} />

                {/* Header */}
                <div className="relative z-10 mb-8">
                    <div className={`w-12 h-12 rounded-2xl ${color} bg-opacity-10 flex items-center justify-center mb-4`}>
                        <Shield className={`w-6 h-6 ${color.replace("bg-", "text-")}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{name}</h3>
                    <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-4xl font-bold text-slate-900">{price}</span>
                        <span className="text-sm text-slate-500">/month</span>
                    </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 relative z-10">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                            <div className="mt-0.5 min-w-[18px]">
                                <Check className="w-4.5 h-4.5 text-green-500" />
                            </div>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="relative z-10">
                    <FutureButton
                        variant={recommended ? "primary" : "outline"}
                        className="w-full justify-center"
                    >
                        Choose {name}
                    </FutureButton>
                </div>
            </motion.div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 ${color}`} />
        </motion.div>
    );
};
