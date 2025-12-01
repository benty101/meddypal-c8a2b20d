import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Baby, Users, User, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface OnboardingData {
  lifeStage: string;
  healthGoals: string[];
  location: string;
}

interface OnboardingFlowProps {
  onComplete: (data: OnboardingData) => void;
}

const OnboardingFlow = ({ onComplete }: OnboardingFlowProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingData>({
    lifeStage: '',
    healthGoals: [],
    location: ''
  });

  const lifeStages = [
    {
      id: 'pregnant',
      title: 'Expecting Mother',
      description: 'Get personalized care for your pregnancy journey',
      icon: Baby,
      color: 'from-pink-100 to-rose-200',
      iconColor: 'text-pink-600'
    },
    {
      id: 'mother',
      title: 'Mother with Children',
      description: 'Manage your family\'s health and wellbeing',
      icon: Heart,
      color: 'from-purple-100 to-pink-200',
      iconColor: 'text-purple-600'
    },
    {
      id: 'elderly',
      title: 'Elderly Care',
      description: 'Healthcare support for seniors and caregivers',
      icon: Users,
      color: 'from-blue-100 to-teal-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 'general',
      title: 'General Health',
      description: 'Comprehensive healthcare for everyday wellness',
      icon: User,
      color: 'from-emerald-100 to-teal-200',
      iconColor: 'text-emerald-600'
    }
  ];

  const healthGoalsByStage = {
    pregnant: [
      'Antenatal care tracking',
      'Nutrition guidance',
      'Birth preparation',
      'Postnatal planning',
      'Emergency contacts'
    ],
    mother: [
      'Child vaccination schedules',
      'Family health records',
      'Pediatric care',
      'Preventive screenings',
      'Nutrition for family'
    ],
    elderly: [
      'Chronic condition management',
      'Medication reminders',
      'Regular health check-ups',
      'Emergency preparedness',
      'Mental health support'
    ],
    general: [
      'Preventive care',
      'Health screenings',
      'Fitness tracking',
      'Mental wellness',
      'Insurance planning'
    ]
  };

  // All 36 Nigerian states
  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
    'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
    'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
    'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
    'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT (Abuja)'
  ];

  const handleLifeStageSelect = (stage: string) => {
    setFormData({ ...formData, lifeStage: stage, healthGoals: [] });
  };

  const handleHealthGoalToggle = (goal: string) => {
    const isSelected = formData.healthGoals.includes(goal);
    const updatedGoals = isSelected 
      ? formData.healthGoals.filter(g => g !== goal)
      : [...formData.healthGoals, goal];
    
    setFormData({ ...formData, healthGoals: updatedGoals });
  };

  const handleLocationSelect = (location: string) => {
    setFormData({ ...formData, location });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.lifeStage !== '';
      case 2: return formData.healthGoals.length > 0;
      case 3: return formData.location !== '';
      default: return false;
    }
  };

  return (
    <div className="min-h-screen font-display bg-background-light dark:bg-background-dark flex items-center justify-center p-4">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-100/50 dark:bg-green-900/20 rounded-full blur-3xl" />
      </div>

      <Card className="w-full max-w-4xl shadow-2xl border-0 animate-fade-in relative z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50">
        <CardHeader className="text-center bg-gradient-to-r from-primary to-primary-hover text-white rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl font-bold font-display">
            Welcome to MeddyPal
          </CardTitle>
          <p className="text-white/80 mt-2">
            Let's personalize your healthcare experience
          </p>
          <div className="flex justify-center mt-4 space-x-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  step <= currentStep ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </CardHeader>

        <CardContent className="p-8">
          {/* Step 1: Life Stage Selection */}
          {currentStep === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 text-center font-display">
                What describes you best?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-center mb-8">
                This helps us provide you with the most relevant healthcare services
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lifeStages.map((stage) => {
                  const IconComponent = stage.icon;
                  return (
                    <div
                      key={stage.id}
                      onClick={() => handleLifeStageSelect(stage.id)}
                      className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg transform ${
                        formData.lifeStage === stage.id
                          ? 'border-primary bg-gradient-to-br ' + stage.color + ' shadow-lg dark:border-primary-hover'
                          : 'border-slate-200 dark:border-slate-700 hover:border-primary/50 bg-white dark:bg-slate-800'
                      }`}
                    >
                      {formData.lifeStage === stage.id && (
                        <CheckCircle className="absolute top-4 right-4 h-6 w-6 text-primary animate-pulse" />
                      )}
                      <div className={`w-12 h-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center mb-4 mx-auto ${
                        formData.lifeStage === stage.id ? 'shadow-md' : ''
                      }`}>
                        <IconComponent className={`h-6 w-6 ${stage.iconColor}`} />
                      </div>
                      <h4 className="font-bold text-lg text-center mb-2 font-display dark:text-white">{stage.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-center text-sm">{stage.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Health Goals Selection */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 text-center font-display">
                What are your health priorities?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-center mb-8">
                Select all that apply to customize your dashboard
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {healthGoalsByStage[formData.lifeStage as keyof typeof healthGoalsByStage]?.map((goal, index) => (
                  <div
                    key={goal}
                    onClick={() => handleHealthGoalToggle(goal)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-102 transform animate-fade-in ${
                      formData.healthGoals.includes(goal)
                        ? 'border-primary bg-primary/10 dark:bg-primary/20 shadow-md'
                        : 'border-slate-200 dark:border-slate-700 hover:border-primary/50 bg-white dark:bg-slate-800 hover:shadow-sm'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        formData.healthGoals.includes(goal)
                          ? 'border-primary bg-primary'
                          : 'border-slate-300 dark:border-slate-600'
                      }`}>
                        {formData.healthGoals.includes(goal) && (
                          <CheckCircle className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <span className="font-medium dark:text-white">{goal}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Location Selection */}
          {currentStep === 3 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 text-center font-display">
                Where are you located?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-center mb-8">
                This helps us show you nearby hospitals and services
              </p>

              <RadioGroup value={formData.location} onValueChange={handleLocationSelect}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto">
                  {nigerianStates.map((state, index) => (
                    <div
                      key={state}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 30}ms` }}
                    >
                      <Label
                        htmlFor={state}
                        className={`flex items-center space-x-2 p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-102 transform ${
                          formData.location === state
                            ? 'border-primary bg-primary/10 dark:bg-primary/20 shadow-md'
                            : 'border-slate-200 dark:border-slate-700 hover:border-primary/50 bg-white dark:bg-slate-800 hover:shadow-sm'
                        }`}
                      >
                        <RadioGroupItem value={state} id={state} />
                        <span className="font-medium text-sm dark:text-white">{state}</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex items-center space-x-2 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-dark hover:to-primary-hover hover:scale-105 transition-all duration-300"
            >
              <span>{currentStep === 3 ? 'Complete Setup' : 'Next'}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingFlow;
