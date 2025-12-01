import AppLayout from '@/components/layout/AppLayout';
import BreadcrumbNavigation from '@/components/navigation/BreadcrumbNavigation';
import ContextualHelp from '@/components/navigation/ContextualHelp';
import FloatingEmergencyButton from '@/components/dashboard/FloatingEmergencyButton';
import { FlowProvider, SmartSuggestions, IntelligentBreadcrumbs } from '@/components/navigation/IntelligentFlowSystem';
import { ContextualActions, QuickActionBar } from '@/components/navigation/ContextualActions';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

interface StandardPageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showBreadcrumbs?: boolean;
  showHelp?: boolean;
  showEmergencyButton?: boolean;
  className?: string;
  backgroundVariant?: 'default' | 'gradient' | 'glass';
}

const StandardPageLayout: React.FC<StandardPageLayoutProps> = ({
  children,
  title,
  subtitle,
  showBreadcrumbs = true,
  showHelp = true,
  showEmergencyButton = true,
  className = '',
  backgroundVariant = 'gradient'
}) => {
  const getBackgroundClass = () => {
    switch (backgroundVariant) {
      case 'glass':
        return 'bg-background-light dark:bg-background-dark';
      case 'gradient':
        return 'bg-gradient-to-br from-background-light via-background-light to-slate-100/50 dark:from-background-dark dark:via-background-dark dark:to-slate-900/50';
      default:
        return 'bg-background-light dark:bg-background-dark';
    }
  };

  return (
    <FlowProvider>
      <AppLayout className={getBackgroundClass()}>
        <div className={cn("space-y-6", className)}>
          {showBreadcrumbs && (
            <div>
              <IntelligentBreadcrumbs />
            </div>
          )}

          {(title || subtitle) && (
            <div>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {title && (
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 font-display">
                      {title}
                    </h1>
                  )}
                  {subtitle && (
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                      {subtitle}
                    </p>
                  )}
                </div>
                {showHelp && (
                  <div className="ml-4">
                    <ContextualHelp />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Smart suggestions and contextual actions */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <SmartSuggestions />
            </div>
            <div className="lg:col-span-1">
              <ContextualActions compact />
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 shadow-lg">
            {children}
          </div>
        </div>

        {showEmergencyButton && <FloatingEmergencyButton />}
        <QuickActionBar />
        <Toaster />
      </AppLayout>
    </FlowProvider>
  );
};

export default StandardPageLayout;
