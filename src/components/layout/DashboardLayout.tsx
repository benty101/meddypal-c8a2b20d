import React, { useState } from 'react';
import { Menu, Activity } from 'lucide-react';
import DashboardSidebar from '@/components/dashboard-new/DashboardSidebar';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title,
  subtitle,
  className
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          {/* Page Header */}
          {(title || subtitle) && (
            <div className="bg-card border-b border-border px-6 py-6">
              <div className="max-w-7xl mx-auto">
                {title && (
                  <h1 className="text-2xl font-bold tracking-tight text-foreground">
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <p className="text-muted-foreground mt-1">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className={cn("max-w-7xl mx-auto px-6 py-8", className)}>
            {children}
          </div>

          {/* Footer */}
          <footer className="bg-card border-t border-border py-4 px-6 mt-auto">
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

export default DashboardLayout;
