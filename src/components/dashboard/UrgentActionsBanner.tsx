import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, X } from "lucide-react";
import { FutureButton } from "@/components/ui/FutureButton";

export const UrgentActionsBanner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-50 to-white border border-orange-100 p-6 shadow-sm"
        >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 flex-shrink-0">
                        <AlertTriangle className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">Complete Your Emergency Profile</h3>
                        <p className="text-slate-600">
                            First responders need your blood type and allergies. It takes 2 minutes.
                        </p>
                    </div>
                </div>

                <FutureButton size="sm" className="bg-orange-500 hover:bg-orange-600 text-white border-none shadow-orange-200">
                    Complete Now <ArrowRight className="ml-2 h-4 w-4" />
                </FutureButton>
            </div>

            {/* Decorative Background */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-100/50 blur-2xl" />
        </motion.div>
    );
};
