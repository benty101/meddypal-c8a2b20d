import React from 'react';
import Navbar from '@/components/landing-new/Navbar';
import { Hero3D } from '@/components/landing/Hero3D';
import TrustMarquee from '@/components/landing/TrustMarquee';
import HealthStoryFeature from '@/components/landing/HealthStoryFeature';
import GenomicsFeature from '@/components/landing/GenomicsFeature';
import TelemedicineFeature from '@/components/landing/TelemedicineFeature';
import InsuranceFeature from '@/components/landing/InsuranceFeature';
import HowItWorks from '@/components/landing-new/HowItWorks';
import ServicesSection from '@/components/hero/ServicesSection';
import Stats from '@/components/landing-new/Stats';
import WorldClassFeatures from '@/components/WorldClassFeatures';
import Testimonials from '@/components/landing-new/Testimonials';
import Footer from '@/components/landing-new/Footer';

// Home page component
const HomeNew = () => {
    return (
        <div className="min-h-screen font-display bg-background-light dark:bg-background-dark text-slate-700 dark:text-slate-300 antialiased selection:bg-primary/20 selection:text-primary">
            <Navbar />
            <main>
                <Hero3D />
                <TrustMarquee />
                <HealthStoryFeature />
                <GenomicsFeature />
                <TelemedicineFeature />
                <InsuranceFeature />
                <HowItWorks />
                <ServicesSection onServiceNavigation={() => { }} />
                <Stats />
                <WorldClassFeatures />
                {/* <Testimonials /> */}
            </main>
            <Footer />
        </div>
    );
};

export default HomeNew;
