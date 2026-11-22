import React from 'react';
import { Bell } from 'lucide-react';

export const Toast = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-slate-900/95 text-white border border-indigo-500/40 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-xl animate-bounce">
      <div className="p-1 rounded-lg bg-indigo-500/20 text-indigo-400">
        <Bell className="w-5 h-5" />
      </div>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};
