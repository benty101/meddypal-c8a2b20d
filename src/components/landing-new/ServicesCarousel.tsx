import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, LayoutGrid, Dna, Check } from 'lucide-react';

const cards = [
    {
        id: 0,
        icon: BookOpen,
        title: "Your Health Story",
        description: "A longitudinal PHR (Personal Health Record) owned by you. Vitals, documents, allergies, and family history in one secure vault.",
        features: ["Lifetime Timeline", "Emergency QR Access"],
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        checkColor: "text-indigo-600"
    },
    {
        id: 1,
        icon: LayoutGrid,
        title: "Access to Care",
        description: "Marketplace for insurance, hospital directories, and telemedicine. Verify coverage and book appointments instantly.",
        features: ["Compare & Buy HMO Plans", "Telemed Consultations"],
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        checkColor: "text-cyan-600"
    },
    {
        id: 2,
        icon: Dna,
        title: "Predict & Prevent",
        description: "Leveraging genomics to move from reactive to preventive care. Maternal screenings and pharmacogenomics tailored for Nigerians.",
        features: ["Nigerian Allele Database", "Disease Risk Prediction"],
        color: "text-blue-600",
        bg: "bg-blue-50",
        checkColor: "text-blue-600"
    }
];

const ServicesCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const rotateCarousel = (index: number) => {
        setActiveIndex(index);
    };

    // Auto-play functionality
    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % cards.length);
        }, 8000); // Rotate every 8 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[800px] flex flex-col items-center justify-center perspective-1000 overflow-visible">
            <div className="relative w-full max-w-[1400px] h-[600px] flex items-center justify-center">
                {cards.map((card, index) => {
                    // Calculate position relative to active index
                    const isActive = index === activeIndex;

                    let position = 0; // 0 = active, -1 = left, 1 = right
                    if (index === activeIndex) position = 0;
                    else if (index === (activeIndex - 1 + cards.length) % cards.length) position = -1;
                    else if (index === (activeIndex + 1) % cards.length) position = 1;

                    const isLeft = position === -1;
                    const isRight = position === 1;

                    return (
                        <motion.div
                            key={card.id}
                            className={`absolute w-[400px] md:w-[600px] p-12 rounded-[2.5rem] border cursor-pointer transition-all duration-700 ease-in-out
                                ${isActive
                                    ? 'bg-white border-slate-200 shadow-2xl z-30 opacity-100'
                                    : 'bg-slate-50 border-slate-100 shadow-xl z-10 opacity-60'
                                }
                            `}
                            initial={false}
                            animate={{
                                x: isActive ? 0 : isLeft ? -550 : 550, // Much wider spread
                                scale: isActive ? 1 : 0.85,
                                opacity: isActive ? 1 : 0.6,
                                zIndex: isActive ? 30 : 10,
                                rotateY: isActive ? 0 : isLeft ? -10 : 10, // Reduced rotation
                                rotateZ: isActive ? 0 : isLeft ? -2 : 2
                            }}
                            onClick={() => rotateCarousel(index)}
                        >
                            <div className={`w-20 h-20 rounded-2xl ${card.bg} flex items-center justify-center mb-8`}>
                                <card.icon className={`w-10 h-10 ${card.color}`} />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 text-slate-900">{card.title}</h3>
                            <p className="text-lg leading-relaxed mb-8 text-slate-600">
                                {card.description}
                            </p>
                            <ul className="space-y-4 text-base text-slate-500">
                                {card.features.map((feature, i) => (
                                    <li key={i} className="flex gap-3 items-center">
                                        <div className={`p-1.5 rounded-full ${card.bg.replace('/10', '/20')}`}>
                                            <Check className={`w-4 h-4 ${card.checkColor}`} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-3 mt-16 z-40">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 rounded-full transition-all duration-500 ${index === activeIndex ? 'bg-emerald-600 w-10' : 'bg-slate-300 w-3 hover:bg-slate-400'
                            }`}
                        onClick={() => rotateCarousel(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesCarousel;
