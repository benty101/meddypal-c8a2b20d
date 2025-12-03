import React from 'react';
import { UserCheck, ShieldAlert, Activity, AlertCircle, QrCode } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface StatusBandProps {
  profileCompletion?: number;
  hasInsurance?: boolean;
  healthScore?: number;
  userName?: string;
  location?: string;
  lifeStage?: string;
}

const StatusBand: React.FC<StatusBandProps> = ({
  profileCompletion = 75,
  hasInsurance = false,
  healthScore = 65,
  userName = 'there',
  location = 'Your Area',
  lifeStage = 'General Health'
}) => {
  const lifeStageBadge = lifeStage === 'pregnant' ? 'Maternal Health' : 
                         lifeStage === 'mother' ? 'Family Care' : 
                         lifeStage === 'elderly' ? 'Senior Care' : 'General Health';

  return (
    <div className="bg-card border-b border-border px-6 py-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Greeting & Status */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-xl font-semibold tracking-tight text-foreground">Health Dashboard</h1>
            <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
              {lifeStageBadge}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Welcome back, {userName}! Here's your health overview in {location}.
          </p>
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Profile Chip */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-muted rounded-md border border-border">
              <UserCheck className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground">Profile: {profileCompletion}%</span>
            </div>
            
            {/* Coverage Chip */}
            <div className={cn(
              "flex items-center gap-1.5 px-2.5 py-1 rounded-md border",
              hasInsurance 
                ? "bg-primary/10 border-primary/20" 
                : "bg-destructive/10 border-destructive/20"
            )}>
              <ShieldAlert className={cn("w-3.5 h-3.5", hasInsurance ? "text-primary" : "text-destructive")} />
              <span className={cn("text-xs font-medium", hasInsurance ? "text-primary" : "text-destructive")}>
                {hasInsurance ? 'Covered' : 'Not Covered'}
              </span>
            </div>
            
            {/* Health Score Chip */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-muted rounded-md border border-border">
              <Activity className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground">Score: {healthScore}/100</span>
            </div>
            
            {/* Primary CTA */}
            {!hasInsurance && (
              <Link 
                to="/insurance"
                className="ml-2 px-3 py-1 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-medium rounded-md shadow-sm transition-colors"
              >
                Get Covered
              </Link>
            )}
          </div>
        </div>

        {/* Right: Urgent Alert & QR */}
        <div className="flex flex-col items-end gap-2">
          {!hasInsurance && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 flex items-start gap-3 max-w-sm shadow-sm">
              <div className="bg-destructive/20 p-1.5 rounded-full shrink-0">
                <AlertCircle className="w-4 h-4 text-destructive" />
              </div>
              <div>
                <p className="text-xs font-semibold text-destructive">Urgent Action Required</p>
                <p className="text-xs text-destructive/80 mt-0.5">
                  You don't have health insurance! Medical emergencies can cost ₦500k-₦2M+.
                </p>
              </div>
            </div>
          )}
          <button className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 hover:text-foreground transition-colors">
            <QrCode className="w-3.5 h-3.5" />
            Show Emergency QR
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusBand;
