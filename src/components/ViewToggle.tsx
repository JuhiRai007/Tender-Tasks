'use client';

import React from 'react';

interface ViewToggleProps {
  view: 'list' | 'board';
  onViewChange: (view: 'list' | 'board') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ view, onViewChange }) => {
  return (
    <div className="bg-[#1f2024] px-6 py-4 gap-6 flex items-center justify-between">
      {/* View Toggle*/}
      <div className="flex-1 gap-0 border border-gray-700 rounded-full p-1 bg-black">
        <button
          onClick={() => onViewChange('list')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            view === 'list' 
              ? 'border border-yellow-100 text-white' 
              : 'bg-transparent text-gray-400 hover:text-white'
          }`}
        >
          List View
        </button>
        <button
          onClick={() => onViewChange('board')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            view === 'board' 
              ? 'border border-yellow-100' 
              : 'bg-transparent text-gray-400 hover:text-white'
          }`}
        >
          Board View
        </button>
      </div>
      
      {/* Action buttons */}
      <div className="flex gap-3">
        <button className="px-5 py-2 bg-black text-white hover:bg-gray-800 border border-yellow-100 transition-colors font-medium">
          View Tender Details
        </button>
        <button className="px-5 py-2 rounded-full bg-transparent text-white hover:bg-gray-800 border border-gray-700 transition-colors font-medium flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
            <line x1="9" y1="6" x2="9" y2="18"></line>
          </svg>
          Columns
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;