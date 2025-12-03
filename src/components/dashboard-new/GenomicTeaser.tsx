import React from 'react';
import { Link } from 'react-router-dom';
import { Dna } from 'lucide-react';

interface GenomicTeaserProps {
  kitStatus?: 'none' | 'ordered' | 'processing' | 'complete';
}

const GenomicTeaser: React.FC<GenomicTeaserProps> = ({ kitStatus = 'ordered' }) => {
  const statusLabels = {
    none: 'Order Kit',
    ordered: 'Kit Ordered',
    processing: 'Processing',
    complete: 'Results Ready'
  };

  const statusColors = {
    none: 'bg-muted text-muted-foreground',
    ordered: 'bg-purple-100 text-purple-700',
    processing: 'bg-orange-100 text-orange-700',
    complete: 'bg-primary/10 text-primary'
  };

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 opacity-10">
        <Dna className="w-24 h-24 text-purple-600" />
      </div>
      <h3 className="text-sm font-semibold text-foreground mb-1">Genomic Insights</h3>
      <p className="text-xs text-muted-foreground mb-3 relative z-10">
        Powered by NABDA. Discover your genetic health risks and traits.
      </p>
      <div className="flex items-center justify-between">
        <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${statusColors[kitStatus]}`}>
          {statusLabels[kitStatus]}
        </span>
        <Link 
          to="/health-insights" 
          className="text-xs text-purple-600 font-medium hover:underline z-10 relative"
        >
          View Status →
        </Link>
      </div>
    </div>
  );
};

export default GenomicTeaser;
