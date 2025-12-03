import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, FlaskConical, Pill, Video, ShoppingBag, Microscope } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CareCard {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  bgColor: string;
  hoverBgColor: string;
  iconColor: string;
}

const careCards: CareCard[] = [
  {
    title: 'Find Hospitals',
    description: 'Locate nearby clinics',
    icon: Building2,
    href: '/hospitals',
    bgColor: 'bg-blue-50',
    hoverBgColor: 'group-hover:bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Find Labs',
    description: 'Book diagnostic tests',
    icon: FlaskConical,
    href: '/labs',
    bgColor: 'bg-purple-50',
    hoverBgColor: 'group-hover:bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    title: 'Find Pharmacy',
    description: 'Get medications nearby',
    icon: Pill,
    href: '/pharmacy',
    bgColor: 'bg-teal-50',
    hoverBgColor: 'group-hover:bg-teal-100',
    iconColor: 'text-teal-600'
  },
  {
    title: 'E-Hospital',
    description: 'See a doctor online',
    icon: Video,
    href: '/telemedicine',
    bgColor: 'bg-indigo-50',
    hoverBgColor: 'group-hover:bg-indigo-100',
    iconColor: 'text-indigo-600'
  },
  {
    title: 'E-Pharmacy',
    description: 'Order meds delivery',
    icon: ShoppingBag,
    href: '/pharmacy',
    bgColor: 'bg-orange-50',
    hoverBgColor: 'group-hover:bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    title: 'E-Lab',
    description: 'Home sample collection',
    icon: Microscope,
    href: '/labs',
    bgColor: 'bg-pink-50',
    hoverBgColor: 'group-hover:bg-pink-100',
    iconColor: 'text-pink-600'
  }
];

const CareHub: React.FC = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-foreground tracking-tight">Find Care</h2>
        <Link to="/hospitals" className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
          View all providers
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {careCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              to={card.href}
              className="group bg-card p-4 rounded-xl border border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all text-left"
            >
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center mb-3 transition-colors",
                card.bgColor,
                card.hoverBgColor
              )}>
                <Icon className={cn("w-4 h-4", card.iconColor)} />
              </div>
              <h3 className="text-sm font-medium text-foreground">{card.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CareHub;
