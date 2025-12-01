import AppLayout from '@/components/layout/AppLayout';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Toaster } from '@/components/ui/toaster';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showBreadcrumbs?: boolean;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  subtitle,
  showBreadcrumbs = true,
  className = ''
}) => {
  return (
    <AppLayout className="bg-background-light dark:bg-background-dark">
      <div className={`space-y-6 ${className}`}>
        {showBreadcrumbs && <Breadcrumbs />}

        {(title || subtitle) && (
          <div>
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
        )}

        {children}
      </div>

      <Toaster />
    </AppLayout>
  );
};

export default PageLayout;
