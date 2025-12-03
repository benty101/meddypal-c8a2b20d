import React, { useState, useEffect } from 'react';
import { Menu, Activity } from 'lucide-react';
import DashboardSidebar from '@/components/dashboard-new/DashboardSidebar';
import StatusBand from '@/components/dashboard-new/StatusBand';
import CareHub from '@/components/dashboard-new/CareHub';
import InsuranceHub from '@/components/dashboard-new/InsuranceHub';
import HealthStoryTabs from '@/components/dashboard-new/HealthStoryTabs';
import InsightsRecommendations from '@/components/dashboard-new/InsightsRecommendations';
import AIAssistantCard from '@/components/dashboard-new/AIAssistantCard';
import GenomicTeaser from '@/components/dashboard-new/GenomicTeaser';
import QuickActionsGrid from '@/components/dashboard-new/QuickActionsGrid';
import EmergencyContactCardNew from '@/components/dashboard-new/EmergencyContactCardNew';
import PremiumUpsellCardNew from '@/components/dashboard-new/PremiumUpsellCardNew';
import { useAuth } from '@/contexts/AuthContext';
import { PersonalizationService } from '@/services/PersonalizationService';
import { ProfileDataService } from '@/services/ProfileDataService';

const DashboardNew = () => {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [onboardingData, setOnboardingData] = useState<any>(null);
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Development mode bypass
  const isDevelopment = import.meta.env.DEV;

  useEffect(() => {
    if (isDevelopment && !user) {
      const mockData = PersonalizationService.getOnboardingData() || {
        lifeStage: 'general',
        healthGoals: ['Preventive care'],
        location: 'Lagos'
      };
      setOnboardingData(mockData);
      setIsLoading(false);
      return;
    }

    if (user) {
      initializeProfile();
    }
  }, [user, isDevelopment]);

  const initializeProfile = async () => {
    setIsLoading(true);
    try {
      const uniqueProfile = await ProfileDataService.generateUniqueProfileData(user.id);
      if (uniqueProfile) {
        setProfileData(uniqueProfile);
        const currentOnboarding = PersonalizationService.getOnboardingData() || {};
        const hasInsurance = !!(uniqueProfile.insurance_provider && uniqueProfile.insurance_number);
        
        const updatedOnboarding = {
          ...currentOnboarding,
          hasInsurance,
          insurance_provider: uniqueProfile.insurance_provider,
          full_name: uniqueProfile.full_name,
          phone_number: uniqueProfile.phone_number,
          state_of_residence: uniqueProfile.state_of_residence
        };
        
        localStorage.setItem('userOnboardingData', JSON.stringify(updatedOnboarding));
        setOnboardingData(updatedOnboarding);
      } else {
        const data = PersonalizationService.getOnboardingData();
        setOnboardingData(data);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      const data = PersonalizationService.getOnboardingData();
      setOnboardingData(data);
    } finally {
      setIsLoading(false);
    }
  };

  // Derived data
  const userName = profileData?.full_name?.split(' ')[0] || onboardingData?.full_name?.split(' ')[0] || 'there';
  const location = onboardingData?.state_of_residence || onboardingData?.location || 'Your Area';
  const hasInsurance = onboardingData?.hasInsurance || false;
  const lifeStage = onboardingData?.lifeStage || 'general';
  const emergencyContactName = profileData?.emergency_contact_name;
  const emergencyContactPhone = profileData?.emergency_contact_phone;

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-muted/30 text-foreground h-screen flex overflow-hidden">
      {/* Sidebar */}
      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-card border-b border-border">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <Activity className="w-5 h-5" />
            <span>MeddyPal</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(true)}
            className="text-muted-foreground hover:text-foreground"
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Scrollable Dashboard Area */}
        <div className="flex-1 overflow-y-auto bg-muted/30">
          {/* Status Band */}
          <StatusBand 
            userName={userName}
            location={location}
            hasInsurance={hasInsurance}
            lifeStage={lifeStage}
            profileCompletion={75}
            healthScore={65}
          />

          {/* Dashboard Layout */}
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Column (2/3) */}
              <div className="lg:col-span-2 space-y-8">
                <CareHub />
                <InsuranceHub 
                  hasInsurance={hasInsurance}
                  location={location}
                />
                <HealthStoryTabs profileCompletion={75} />
                <InsightsRecommendations healthScore={65} />
              </div>

              {/* Context Rail (1/3) */}
              <div className="lg:col-span-1 space-y-6">
                <AIAssistantCard />
                <GenomicTeaser kitStatus="ordered" />
                <QuickActionsGrid />
                <EmergencyContactCardNew 
                  contactName={emergencyContactName}
                  contactPhone={emergencyContactPhone}
                />
                <PremiumUpsellCardNew isPremium={false} />
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-card border-t border-border py-4 px-6 mt-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
              <p>© 2025 MeddyPal. Your health, simplified.</p>
              <div className="flex items-center gap-4">
                <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
                <a href="/support" className="hover:text-foreground transition-colors">Support</a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default DashboardNew;
