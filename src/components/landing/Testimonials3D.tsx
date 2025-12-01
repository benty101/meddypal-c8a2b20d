import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Mrs. Adewale",
        role: "Mother of 3",
        location: "Lagos",
        quote: "I used to carry 3 different hospital cards for my kids. Now everything is in one place. The emergency QR code gives me peace of mind when they go to school.",
        avatarColor: "bg-orange-100",
        textColor: "text-orange-600"
    },
    {
        id: 2,
        name: "Chidi Okonkwo",
        role: "Software Engineer",
        location: "Abuja",
        quote: "The insurance comparison was a lifesaver. I found a plan that covers my dental for just ₦5,000 a month. The 3D interface is super slick too!",
        avatarColor: "bg-blue-100",
        textColor: "text-blue-600"
    },
    {
        id: 3,
        name: "Dr. Ibrahim",
        role: "Cardiologist",
        location: "Kano",
        quote: "As a doctor, seeing a patient's full history instantly makes my job so much easier. MeddyPal is solving the fragmentation problem in our healthcare.",
        avatarColor: "bg-teal-100",
        textColor: "text-teal-600"
    }
];

export const Testimonials3D = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl font-bold text-slate-900 mb-4">
                        Trusted by Nigerians Like You
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Join thousands who have taken control of their health story.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 opacity-10">
                        <Quote className="w-32 h-32 text-[#0066FF]" />
                    </div>

                    <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 lg:p-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col lg:flex-row gap-8 items-center"
                            >
                                {/* Avatar Placeholder (Cartoon Style) */}
                                <div className={`w-24 h-24 rounded-full ${testimonials[currentIndex].avatarColor} flex items-center justify-center flex-shrink-0`}>
                                    <span className={`text-2xl font-bold ${testimonials[currentIndex].textColor}`}>
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </span>
                                </div>

                                <div className="flex-1 text-center lg:text-left">
                                    <p className="text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed mb-6">
                                        "{testimonials[currentIndex].quote}"
                                    </p>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-slate-500">
                                            {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="flex justify-center lg:justify-end gap-4 mt-8 lg:mt-0 lg:absolute lg:bottom-12 lg:right-12">
                            <button
                                onClick={prev}
                                className="p-3 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={next}
                                className="p-3 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white transition-colors shadow-lg shadow-blue-200"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
