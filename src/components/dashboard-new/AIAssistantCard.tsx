import React from 'react';
import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';

const AIAssistantCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-card rounded-xl border border-indigo-100 shadow-sm p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-indigo-600 p-1.5 rounded-lg">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-sm font-semibold text-indigo-900">AI Health Assistant</h3>
      </div>
      <div className="bg-white/80 p-3 rounded-lg border border-indigo-50 mb-3">
        <p className="text-xs text-muted-foreground leading-relaxed">
          "Hello! I can help you find care, understand your symptoms, or explain your insurance."
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        <button className="px-2 py-1 bg-white border border-indigo-100 rounded text-[10px] text-indigo-700 hover:bg-indigo-50 transition-colors">
          I need a doctor now
        </button>
        <button className="px-2 py-1 bg-white border border-indigo-100 rounded text-[10px] text-indigo-700 hover:bg-indigo-50 transition-colors">
          Use my insurance
        </button>
      </div>
      <Link
        to="/ai-assistant"
        className="w-full py-1.5 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 rounded text-xs font-medium transition-colors block text-center"
      >
        Open Chat
      </Link>
    </div>
  );
};

export default AIAssistantCard;
