import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Heart, MapPin, Target } from 'lucide-react';

const OnboardingPrompt = () => {
  const navigate = useNavigate();

  const handleStartOnboarding = () => {
    navigate('/onboarding');
  };

  return (
    <Card className="border-2 border-dashed border-primary/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-xl">
      <CardContent className="p-8 text-center">
        <div className="mx-auto w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6">
          <User className="w-10 h-10 text-primary" />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
          Welcome to MeddyPal!
        </h3>

        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          To provide you with personalized health recommendations and insights,
          we need to learn a bit about your health journey and preferences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center space-y-2">
            <Heart className="w-8 h-8 text-pink-500 dark:text-pink-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Life Stage</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Target className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Health Goals</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <MapPin className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Location</span>
          </div>
        </div>

        <Button
          onClick={handleStartOnboarding}
          size="lg"
          className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-dark hover:to-primary-hover"
        >
          Complete Your Health Profile
        </Button>

        <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
          Takes less than 2 minutes • Your data is secure and private
        </p>
      </CardContent>
    </Card>
  );
};

export default OnboardingPrompt;