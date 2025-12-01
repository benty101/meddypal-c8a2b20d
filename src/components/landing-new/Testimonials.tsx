import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Ngozi A.",
        location: "Lagos",
        quote: "MeddyPal gave me control over my health. No more lost records!",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADtSj42DFbkZkI1oDxVQLWsJYy2dI_fYxXTaS-KBcEEMrGGa3im8yf11KQaceur1Ujb1u2hQ9sFtw_NSGdssrR_IBNe4dVGSG3Y4gsgO5n84tzByLHVMh4Bgc15XDSM9N7dRp_Xdmdq1KkJGzRNOr2Ru8ejwO2_FagTIbv6hhpmmBvVeInyhBvI1cf6d5kEIDzKvQoC1VbEbejUEps_Ffcrb75kRNKDfmg__ZLSOXCtU0aWQ74MTxKjzV84r7h3ndR2_sQJ-iPUO0"
    },
    {
        name: "Michael K.",
        location: "Abuja",
        quote: "The insurance options are a game-changer. Affordable and easy to understand.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv6c4l1Hd9H_mplh9riCbsQSUrmStF-Et2gefF8QzR-KLI5JuCdFanD2UUs8mGVJPCiU8Yi6zBHY5PXUywFVLmAS0BQIEM2PUnDVNQhZmJ4YiPNdxNh8HC3Rg9UUbm6zSzaX-GXNyZZ7k6zdhFtqvNMm4CbSz9thBa8GBUNNEdlQYruMIXqbPg_bUhQzU96Jm8ea-chU_3MiGfg1vwLUfS4F5xcC0g0Z4IGyNZVp1jm4Tmne2v8Q8qLAMJNqdqS2lbDCtDCIhwxtk"
    },
    {
        name: "Adebayo T.",
        location: "Port Harcourt",
        quote: "Speaking to a doctor at 2 AM was a lifesaver. So grateful.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUr8oQByBWaDSNfUtdHy1CIJ6wzd-yKG2_oXWSORgW05LNPfzACStdWMDB_XmXAF_Cl_r09mT5kDA4PB3CrR3f1uuqLeN-NqV0bC9ldzl0LuJa4O7Siw1urRJwMWcFoThbDlxmMgAHnQpDBPNoEM2S59XY9k3fdUO4tT_h8YsY3zblQ2xF3LPfGghw3DZ38ypYEpak8cAeGNgVE-n73WDuPaEeJB4sPvOgRPvMOkZ70kWm6vGadrs6xB_A4khHtJShv12Gkt9Jko0"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 relative">
            <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXdq-0_TyWdOdIaMabBM4YoSHMESQVmBOnhGCnKTAi4Koxe0SuuzIwQduZoqCOTcRU-CXwPUCGNjhWtvrZNI5CitBQCFzN84KyLmrTJrej_oVXLLol8i9yrw7mUE4k_6YW_uBVHK2aLz1HlS9NbnSF-SpZrN3U8Igk0j-gLda1CLNRK8GozRef0zX2jUvmevYg5W0O9BWbBBJzOf2DtIXvPNG_QwwDAaHE9uAaXdnHZMDJQufk1EGBEJ1UGQ_hu6ojDsf6bLnNEVg')] bg-cover bg-bottom opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 font-display">Trusted by Our Community</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 mt-12"
                        >
                            <div className="relative">
                                <img
                                    src={testimonial.image}
                                    alt={`Portrait of ${testimonial.name}`}
                                    className="w-20 h-20 rounded-full mx-auto -mt-16 mb-6 border-4 border-white dark:border-slate-800 shadow-md object-cover"
                                />
                                <Quote className="absolute top-0 right-0 w-8 h-8 text-primary/20" />
                            </div>
                            <p className="text-lg text-slate-600 dark:text-slate-300 italic mb-6 text-center">"{testimonial.quote}"</p>
                            <div className="text-center">
                                <p className="font-bold text-slate-800 dark:text-white">{testimonial.name}</p>
                                <p className="text-sm text-slate-500">{testimonial.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
