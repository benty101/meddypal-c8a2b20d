import React from 'react';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';

interface PremiumUpsellCardNewProps {
  isPremium?: boolean;
}

const PremiumUpsellCardNew: React.FC<PremiumUpsellCardNewProps> = ({ isPremium = false }) => {
  if (isPremium) return null;

  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200 shadow-sm p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-amber-500 p-1.5 rounded-lg">
          <Crown className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-sm font-semibold text-amber-900">Upgrade to Premium</h3>
      </div>
      <p className="text-xs text-amber-700 mb-3">
        Get priority telemedicine, family sharing, and advanced insights.
      </p>
      <Link
        to="/pricing"
        className="w-full py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded text-xs font-medium transition-colors block text-center"
      >
        Learn More
      </Link>
    </div>
  );
};

export default PremiumUpsellCardNew;
