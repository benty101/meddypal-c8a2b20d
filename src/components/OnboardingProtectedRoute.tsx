
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface OnboardingProtectedRouteProps {
  children: React.ReactNode;
}

const OnboardingProtectedRoute = ({ children }: OnboardingProtectedRouteProps) => {
  const { user, loading } = useAuth();

  // DEVELOPMENT MODE: Skip all checks for easier testing
  const isDevelopment = import.meta.env.DEV;
  const BYPASS_ONBOARDING_CHECK = true; // Toggle this to enforce onboarding in dev

  console.log('OnboardingProtectedRoute: Auth state', { user: user?.id, loading, isDevelopment });

  // In development mode with bypass enabled, allow access without onboarding
  if (isDevelopment && BYPASS_ONBOARDING_CHECK) {
    console.log('OnboardingProtectedRoute: Development mode - bypassing all checks');
    return <>{children}</>;
  }

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Require authentication
  if (!user) {
    console.log('OnboardingProtectedRoute: No user, redirecting to auth');
    return <Navigate to="/auth" replace />;
  }

  // Check if user has completed onboarding
  const onboardingCompleted = localStorage.getItem('onboardingCompleted');
  const userOnboardingData = localStorage.getItem('userOnboardingData');

  console.log('OnboardingProtectedRoute: Onboarding check', {
    onboardingCompleted,
    userOnboardingData: !!userOnboardingData,
    userId: user.id
  });

  // Require onboarding completion
  if (!onboardingCompleted || !userOnboardingData) {
    console.log('OnboardingProtectedRoute: Redirecting to onboarding - user has not completed setup');
    return <Navigate to="/onboarding" replace />;
  }

  console.log('OnboardingProtectedRoute: User authenticated and onboarded, rendering children');
  return <>{children}</>;
};

export default OnboardingProtectedRoute;
