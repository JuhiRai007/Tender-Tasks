'use client';

import React from 'react';
import { Plus, MoreVertical } from 'lucide-react';
import { Task, Column } from '../types/task';
import TaskCard from './TaskCard';

interface BoardColumnProps {
  column: Column;
  tasks: Task[];
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, status: Task['status']) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, task: Task) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  onTaskClick: (task: Task) => void;
}

const BoardColumn: React.FC<BoardColumnProps> = ({ 
  column, 
  tasks, 
  onDragOver, 
  onDrop, 
  onDragStart, 
  onDragEnd, 
  onTaskClick 
}) => {
  return (
    <div
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, column.id)}
      className="bg-black rounded-lg p-3 sm:p-4 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] w-full"
    >
      {/* Column Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
          <span className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${column.dotColor} shrink-0`}></span>
          <h2 className="text-white font-semibold text-sm sm:text-base truncate">{column.name}</h2>
          <span className="bg-gray-700 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
            {tasks.length}
          </span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-1 sm:gap-2 shrink-0">
          <button className="text-gray-400 hover:text-white transition-colors p-1">
            <Plus size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors p-1">
            <MoreVertical size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
      
      {/* Tasks Container */}
      <div className="space-y-2 sm:space-y-3 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-220px)] sm:max-h-[calc(100vh-240px)] lg:max-h-[calc(100vh-280px)] pr-1">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              onClick={onTaskClick}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-gray-500">
            <svg 
              className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3 opacity-50" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            <p className="text-xs sm:text-sm font-medium">No tasks yet</p>
            <p className="text-[10px] sm:text-xs mt-1 text-center px-4">Drag tasks here or click + to add</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardColumn;