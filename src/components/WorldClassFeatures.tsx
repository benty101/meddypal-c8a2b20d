import React from 'react';
import {
  MessageSquare,
  WifiOff,
  Languages,
  Smartphone,
  QrCode,
  Globe,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const WorldClassFeatures = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider mb-2 block">Context Aware</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Built for Nigerians, not Silicon Valley.</h2>
          <p className="text-slate-500 text-lg">Updates temp medical cards to a living timeline that grows with you.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-emerald-500 transition-colors duration-300">
            <MessageSquare className="w-6 h-6 text-slate-900 mx-auto mb-3" />
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-600">SMS & USSD Access</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-emerald-500 transition-colors duration-300">
            <WifiOff className="w-6 h-6 text-slate-900 mx-auto mb-3" />
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-600">Works Offline First</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-emerald-500 transition-colors duration-300">
            <Languages className="w-6 h-6 text-slate-900 mx-auto mb-3" />
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-600">Local Languages Support</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-emerald-500 transition-colors duration-300">
            <Smartphone className="w-6 h-6 text-slate-900 mx-auto mb-3" />
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-600">Feature Phone Friendly</h3>
          </div>
          <div className="col-span-2 md:col-span-1 bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-emerald-500 transition-colors duration-300">
            <QrCode className="w-6 h-6 text-slate-900 mx-auto mb-3" />
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-600">Emergency QR Share</h3>
          </div>
        </div>

        {/* Integration Section */}
        <div className="mt-24 bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 rounded-3xl p-12 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Globe className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Seamless Integration with Nigerian Healthcare
          </h3>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Built to work perfectly with NHIS, major hospital systems, and local healthcare providers across all 36 states
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              View API Documentation
            </Button>
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-50"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View All Integrations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldClassFeatures;
