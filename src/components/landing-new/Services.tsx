import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Maternal Care",
        description: "Comprehensive services for pregnancy, delivery, postnatal support, and health mentoring.",
        link: "#"
    },
    {
        title: "Child Health & Vaccinations",
        description: "Pediatric care, immunization scheduling, child growth monitoring, and development tracking.",
        link: "#"
    },
    {
        title: "Maternal & Family Insurance",
        description: "Specialized insurance plans covering pregnancy, childbirth, child health, and family wellness.",
        link: "#"
    },
    {
        title: "Specialist Appointments",
        description: "Book online with gynecologists, lactation consultants, and child development specialists.",
        link: "#"
    },
    {
        title: "Maternal & Child Pharmacy",
        description: "Prenatal vitamins, pediatric medications, baby formula, and health supplements with delivery.",
        link: "#"
    },
    {
        title: "Family Health Records",
        description: "Secure storage of maternal, paternal, and child immunization cards, charts, and family history.",
        link: "#"
    }
];

const Services = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white font-display">Specialized Maternal & Child Healthcare Services</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-3xl mx-auto">Everything mothers and children need for comprehensive healthcare management</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-xl text-left shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group"
                        >
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">{service.description}</p>
                            <a href={service.link} className="inline-flex items-center font-semibold text-primary hover:underline group-hover:translate-x-1 transition-transform">
                                Learn more <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
