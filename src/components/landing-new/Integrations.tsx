import React from 'react';
import { FileText, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Integrations = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-green-600 to-green-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl font-bold mb-6 font-display">Seamless Integration with Nigerian Healthcare</h2>
                <p className="text-lg text-green-100 mb-10 max-w-3xl mx-auto">
                    Built to work perfectly with clinics, major hospitals, HMOs, and local healthcare providers across all 36 states.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 border-none h-14 px-8 text-base font-semibold">
                        <FileText className="mr-2 w-5 h-5" />
                        View API Documentation
                    </Button>
                    <Button size="lg" variant="outline" className="bg-green-700/50 border-green-400 text-white hover:bg-green-700 h-14 px-8 text-base font-semibold backdrop-blur-sm">
                        <Layers className="mr-2 w-5 h-5" />
                        View All Integrations
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
