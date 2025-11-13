'use client';

import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#1f2024] border-b border-gray-600 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="text-white hover:text-cyan-500 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <h1 className="text-2xl font-bold">Tender Tasks</h1>
        </div>
        
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for Tenders"
              className="w-full bg-white text-black pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Bell size={24} />
          </button>
          <button className="w-10 h-10 rounded-full bg-linear-to-br from-red-500 to-pink-500 flex items-center justify-center text-white font-bold">
            S
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;