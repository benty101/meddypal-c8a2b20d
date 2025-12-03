import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InsuranceHubProps {
  hasInsurance?: boolean;
  planName?: string;
  planStatus?: string;
  facilitiesCount?: number;
  location?: string;
}

const InsuranceHub: React.FC<InsuranceHubProps> = ({
  hasInsurance = false,
  planName = 'None',
  planStatus = 'Inactive',
  facilitiesCount = 15,
  location = 'Your Area'
}) => {
  return (
    <section>
      <h2 className="text-base font-semibold text-foreground tracking-tight mb-4">Insurance Hub</h2>
      <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
        {/* Warning Banner for No Coverage */}
        {!hasInsurance && (
          <div className="bg-destructive/10 p-6 border-b border-destructive/20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldAlert className="w-5 h-5 text-destructive" />
                  <h3 className="text-lg font-semibold text-destructive">You're not covered</h3>
                </div>
                <p className="text-sm text-destructive/80">
                  Starting from: ₦5,000/year. Medical emergencies can cost ₦500k-₦2M+.
                </p>
              </div>
              <Link
                to="/insurance"
                className="bg-destructive hover:bg-destructive/90 text-destructive-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-sm whitespace-nowrap transition-colors"
              >
                Get Protected Now
              </Link>
            </div>
          </div>
        )}

        {/* Covered Banner */}
        {hasInsurance && (
          <div className="bg-primary/10 p-6 border-b border-primary/20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-primary">You're protected</h3>
                </div>
                <p className="text-sm text-primary/80">
                  Your {planName} plan is active and covers you at {facilitiesCount}+ facilities.
                </p>
              </div>
              <Link
                to="/insurance"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-sm whitespace-nowrap transition-colors"
              >
                View Benefits
              </Link>
            </div>
          </div>
        )}

        {/* Insurance Info */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-card">
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Benefits of Coverage</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Access to {facilitiesCount}+ facilities in {location}
              </li>
              <li className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Low copay on medications and labs
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">My Coverage Status</h4>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Plan: <span className={cn("font-medium", hasInsurance ? "text-foreground" : "text-foreground")}>{planName}</span></p>
              <p>Status: <span className={cn("font-medium", hasInsurance ? "text-primary" : "text-destructive")}>{planStatus}</span></p>
              <Link to="/insurance" className="text-primary hover:underline mt-2 inline-block">
                How coverage works with MeddyPal →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceHub;
