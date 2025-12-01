import { useState } from 'react';
import { Shield } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import SessionWarning from '@/components/auth/SessionWarning';
import AuthHeader from '@/components/auth/AuthHeader';
import AuthTabs from '@/components/auth/AuthTabs';
import AuthFooter from '@/components/auth/AuthFooter';
import Navbar from '@/components/landing-new/Navbar';
import Footer from '@/components/landing-new/Footer';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

const Auth = () => {
  const { loading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { showSessionWarning } = useAuthRedirect();

  if (loading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-display bg-background-light dark:bg-background-dark text-slate-700 dark:text-slate-300 antialiased selection:bg-primary/20 selection:text-primary flex flex-col">
      <Navbar />

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-100/50 dark:bg-green-900/20 rounded-full blur-3xl" />
      </div>

      <div className="flex-1 flex items-center justify-center p-4 pt-32 pb-24 relative z-10">
        <div className="w-full max-w-md">
          <SessionWarning show={showSessionWarning} />

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <AuthHeader />

            <AuthTabs
              error={error}
              success={success}
              isLoading={isLoading}
              setError={setError}
              setSuccess={setSuccess}
              setIsLoading={setIsLoading}
            />

            <AuthFooter />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;
