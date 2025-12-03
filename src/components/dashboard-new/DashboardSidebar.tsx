import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  Activity,
  TriangleAlert,
  LayoutDashboard,
  Stethoscope,
  Calendar,
  HeartHandshake,
  ShieldCheck,
  CreditCard,
  Receipt,
  FileClock,
  User,
  Dna,
  ActivitySquare,
  Bot,
  ClipboardList,
  Lightbulb,
  BookOpen,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  icon: React.ElementType;
  href: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    label: 'Home',
    items: [
      { title: 'Dashboard', icon: LayoutDashboard, href: '/dashboard-new' }
    ]
  },
  {
    label: 'Care & Services',
    items: [
      { title: 'Care Hub', icon: Stethoscope, href: '/hospitals' },
      { title: 'Appointments', icon: Calendar, href: '/appointments' },
      { title: 'My Providers', icon: HeartHandshake, href: '/telemedicine' }
    ]
  },
  {
    label: 'Coverage & Wallet',
    items: [
      { title: 'My Coverage', icon: ShieldCheck, href: '/insurance' },
      { title: 'Get Covered', icon: CreditCard, href: '/insurance' },
      { title: 'Benefits & Claims', icon: Receipt, href: '/insurance' }
    ]
  },
  {
    label: 'My Health Story',
    items: [
      { title: 'Timeline & Records', icon: FileClock, href: '/health-timeline' },
      { title: 'My Profile', icon: User, href: '/profile' },
      { title: 'Genomic Insights (NABDA)', icon: Dna, href: '/health-insights' },
      { title: 'Metrics & Devices', icon: ActivitySquare, href: '/health-metrics' }
    ]
  },
  {
    label: 'Assistant & Insights',
    items: [
      { title: 'AI Health Assistant', icon: Bot, href: '/ai-assistant' },
      { title: 'Symptom Checker', icon: ClipboardList, href: '/symptom-checker' },
      { title: 'Insights', icon: Lightbulb, href: '/health-insights' },
      { title: 'Health Library', icon: BookOpen, href: '/resources' }
    ]
  }
];

interface DashboardSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ isOpen = true, onClose }) => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  
  const userInitials = user?.email?.slice(0, 2).toUpperCase() || 'KK';
  const userEmail = user?.email || 'user@example.com';

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={cn(
        "w-64 bg-card border-r border-border flex flex-col flex-shrink-0 h-full",
        "fixed md:relative z-50 md:z-auto",
        "transition-transform duration-300 ease-apple",
        isOpen ? "translate-x-0 flex" : "-translate-x-full md:translate-x-0",
        !isOpen && "hidden md:flex"
      )}>
        {/* Brand & SOS Pinned Top */}
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-primary font-semibold tracking-tight text-lg">
              <Activity className="w-5 h-5" />
              <span>MeddyPal</span>
            </div>
            <button 
              onClick={onClose}
              className="md:hidden p-1 hover:bg-muted rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <button className="w-full bg-destructive/10 hover:bg-destructive/20 text-destructive border border-destructive/20 rounded-lg py-2 px-3 flex items-center justify-center gap-2 text-sm font-medium transition-colors">
            <TriangleAlert className="w-4 h-4" />
            Emergency SOS
          </button>
        </div>

        {/* Navigation Scroll Area */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-6">
          {navGroups.map((group) => (
            <div key={group.label}>
              <p className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {group.label}
              </p>
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = location.pathname === item.href;
                  const Icon = item.icon;
                  
                  return (
                    <li key={item.title}>
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                          isActive 
                            ? "bg-primary/10 text-primary font-medium" 
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <Icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground")} />
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
              {userInitials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{userEmail}</p>
              <p className="text-xs text-muted-foreground truncate">Patient</p>
            </div>
            <button 
              onClick={() => signOut()}
              className="p-1 hover:bg-muted rounded"
            >
              <LogOut className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
