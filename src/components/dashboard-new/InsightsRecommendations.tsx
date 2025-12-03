import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Bot } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface InsightsRecommendationsProps {
  healthScore?: number;
  recommendationTitle?: string;
  recommendationDescription?: string;
  profileCompletion?: number;
}

const InsightsRecommendations: React.FC<InsightsRecommendationsProps> = ({
  healthScore = 65,
  recommendationTitle = 'Complete Health Profile',
  recommendationDescription = 'Unlock personalized recommendations by completing your health profile details.',
  profileCompletion = 75
}) => {
  return (
    <section>
      <h2 className="text-base font-semibold text-foreground tracking-tight mb-4">Insights & Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Recommendation */}
        <div className="bg-card p-5 rounded-xl border border-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Smart Recommendation</span>
            </div>
            <h3 className="text-sm font-medium text-foreground mb-1">{recommendationTitle}</h3>
            <p className="text-xs text-muted-foreground">{recommendationDescription}</p>
          </div>
          <Link
            to="/profile"
            className="mt-4 w-full py-2 border border-border rounded-lg text-xs font-medium text-foreground hover:bg-muted transition-colors text-center block"
          >
            Update Profile
          </Link>
        </div>

        {/* Right: Score & AI CTA */}
        <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium text-foreground">Health Engagement</h3>
            <span className="text-lg font-bold text-primary">{healthScore}/100</span>
          </div>
          <Progress value={healthScore} className="h-2 mb-4" />
          <Link
            to="/ai-assistant"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-xs font-medium shadow-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Bot className="w-3 h-3" />
            Ask AI Assistant for Tips
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsRecommendations;
