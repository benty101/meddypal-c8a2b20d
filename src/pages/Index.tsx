import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import ContextualNavbar from '@/components/navbar/ContextualNavbar';
import { Hero3D } from "@/components/landing/Hero3D";
import TrustMarquee from "@/components/landing/TrustMarquee";
import { TrustIndicators } from "@/components/landing/TrustIndicators";
import { ProblemSection3D } from "@/components/landing/ProblemSection3D";
import { Testimonials3D } from "@/components/landing/Testimonials3D";
import InsuranceFeature from "@/components/landing/InsuranceFeature";

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect authenticated users to appropriate dashboard
    if (!loading && user) {
      const onboardingCompleted = localStorage.getItem('onboardingCompleted');
      const userOnboardingData = localStorage.getItem('userOnboardingData');

      if (!onboardingCompleted || !userOnboardingData) {
        // New user - redirect to onboarding
        navigate('/onboarding', { replace: true });
      } else {
        // Existing user - redirect to dashboard
        navigate('/dashboard', { replace: true });
      }
    }
  }, [user, loading, navigate]);

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0066FF] mx-auto"></div>
          <p className="mt-4 text-slate-500">Loading...</p>
        </div>
      </div>
    );
  }

  // Only show public landing page to unauthenticated users
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <ContextualNavbar />

      <main>
        <Hero3D />
        <TrustMarquee />
        <TrustIndicators />
        <ProblemSection3D />
        <InsuranceFeature />
        <Testimonials3D />

        {/* Footer Placeholder */}
        <footer className="py-12 bg-slate-900 text-slate-400 text-center">
          <p>© 2025 MeddyPal. Built for Nigeria 🇳🇬</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
