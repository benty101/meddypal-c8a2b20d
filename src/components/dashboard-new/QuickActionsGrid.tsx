import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarPlus, FileText, Video, FlaskConical } from 'lucide-react';

interface QuickAction {
  title: string;
  icon: React.ElementType;
  href: string;
}

const actions: QuickAction[] = [
  { title: 'Book Appt', icon: CalendarPlus, href: '/appointments' },
  { title: 'Records', icon: FileText, href: '/health-timeline' },
  { title: 'Telemed', icon: Video, href: '/telemedicine' },
  { title: 'Labs', icon: FlaskConical, href: '/labs' }
];

const QuickActionsGrid: React.FC = () => {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-4">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-2">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.title}
              to={action.href}
              className="flex flex-col items-center justify-center p-3 bg-muted/50 hover:bg-muted rounded-lg border border-border/50 transition-colors"
            >
              <Icon className="w-5 h-5 text-muted-foreground mb-1" />
              <span className="text-[10px] font-medium text-foreground">{action.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActionsGrid;
