import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineItem {
  id: string;
  date: string;
  time?: string;
  title: string;
  description: string;
  type: 'milestone' | 'event' | 'record';
  tags?: string[];
  isRecent?: boolean;
}

interface HealthStoryTabsProps {
  profileCompletion?: number;
  timelineItems?: TimelineItem[];
}

const defaultTimeline: TimelineItem[] = [
  {
    id: '1',
    date: 'Wednesday, August 8th, 2025',
    time: '12:32',
    title: 'Genomic Test Kit Ordered',
    description: 'Ordered Comprehensive Health Panel test kit',
    type: 'milestone',
    tags: ['GENOMIC TEST'],
    isRecent: true
  },
  {
    id: '2',
    date: 'Saturday, July 19th, 2025',
    title: 'Profile Created',
    description: 'Welcome to MeddyPal',
    type: 'event',
    isRecent: false
  }
];

const HealthStoryTabs: React.FC<HealthStoryTabsProps> = ({
  profileCompletion = 75,
  timelineItems = defaultTimeline
}) => {
  const [activeTab, setActiveTab] = useState('timeline');

  return (
    <section>
      <h2 className="text-base font-semibold text-foreground tracking-tight mb-4">My Health Story</h2>
      <div className="bg-card rounded-xl border border-border shadow-sm min-h-[300px]">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Tabs Header */}
          <div className="border-b border-border/50">
            <TabsList className="bg-transparent p-0 h-auto justify-start">
              <TabsTrigger 
                value="timeline" 
                className={cn(
                  "px-6 py-3 text-sm font-medium rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary",
                  "text-muted-foreground hover:text-foreground"
                )}
              >
                Timeline & Records
              </TabsTrigger>
              <TabsTrigger 
                value="metrics"
                className={cn(
                  "px-6 py-3 text-sm font-medium rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary",
                  "text-muted-foreground hover:text-foreground"
                )}
              >
                Metrics
              </TabsTrigger>
              <TabsTrigger 
                value="family"
                className={cn(
                  "px-6 py-3 text-sm font-medium rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary",
                  "text-muted-foreground hover:text-foreground"
                )}
              >
                Family & Sharing
              </TabsTrigger>
              <TabsTrigger 
                value="genomic"
                className={cn(
                  "px-6 py-3 text-sm font-medium rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary",
                  "text-muted-foreground hover:text-foreground flex items-center gap-2"
                )}
              >
                Genomic Insights
                <span className="bg-muted text-muted-foreground px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide">NABDA</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content: Timeline */}
          <TabsContent value="timeline" className="p-6 space-y-6 mt-0">
            {/* Profile Checklist */}
            {profileCompletion < 100 && (
              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-3">Complete your profile to unlock features</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-card p-3 rounded border border-border shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-orange-200 text-orange-500 flex items-center justify-center text-[10px]">1</div>
                      <div>
                        <p className="text-xs font-medium text-foreground">Update Medical History</p>
                        <p className="text-[10px] text-muted-foreground">Allergies and chronic conditions</p>
                      </div>
                    </div>
                    <button className="text-xs bg-muted border border-border px-2 py-1 rounded font-medium hover:bg-muted/80 transition-colors">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Timeline Items */}
            <div className="relative pl-4 border-l-2 border-border/50 space-y-6">
              {timelineItems.map((item) => (
                <div key={item.id} className="relative">
                  <div className={cn(
                    "absolute -left-[21px] top-1 w-3 h-3 rounded-full border-2 border-card ring-1 ring-border/50",
                    item.isRecent ? "bg-primary" : "bg-muted-foreground/50"
                  )} />
                  <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
                  <div className={cn(
                    "bg-card border border-border rounded-lg p-3 shadow-sm",
                    !item.isRecent && "opacity-75"
                  )}>
                    <div className="flex justify-between items-start">
                      <div>
                        {item.type === 'milestone' && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-purple-100 text-purple-800 mb-1">
                            Milestone
                          </span>
                        )}
                        <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                      </div>
                      {item.time && (
                        <span className="text-[10px] text-muted-foreground">{item.time}</span>
                      )}
                    </div>
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-2 flex gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-[10px] rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center pt-2">
              <button className="text-xs text-muted-foreground font-medium hover:text-foreground flex items-center justify-center gap-1 mx-auto transition-colors">
                View all history <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </TabsContent>

          {/* Tab Content: Metrics */}
          <TabsContent value="metrics" className="p-6 mt-0">
            <div className="text-center py-8 text-muted-foreground">
              <p className="text-sm">Connect devices to track your health metrics</p>
              <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg hover:bg-primary/90 transition-colors">
                Connect Device
              </button>
            </div>
          </TabsContent>

          {/* Tab Content: Family */}
          <TabsContent value="family" className="p-6 mt-0">
            <div className="text-center py-8 text-muted-foreground">
              <p className="text-sm">Share health records with family members</p>
              <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg hover:bg-primary/90 transition-colors">
                Add Family Member
              </button>
            </div>
          </TabsContent>

          {/* Tab Content: Genomic */}
          <TabsContent value="genomic" className="p-6 mt-0">
            <div className="text-center py-8 text-muted-foreground">
              <p className="text-sm">Discover your genetic health insights powered by NABDA</p>
              <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg hover:bg-primary/90 transition-colors">
                Order Genomic Kit
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HealthStoryTabs;
