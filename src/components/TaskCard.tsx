'use client';

import React from 'react';
import { MoreVertical, Calendar, MessageSquare, Paperclip } from 'lucide-react';
import { Task } from '../types/task';
import { getPriorityColor, getStatusColor, getStatusBgColor, getStatusTextColor, getInitials } from '../utils/helpers';

interface TaskCardProps {
  task: Task;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, task: Task) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  onClick: (task: Task) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDragStart, onDragEnd, onClick }) => {
  return (
    <div 
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      onDragEnd={onDragEnd}
      onClick={() => onClick(task)}
      className="bg-[#1f2024] rounded-lg p-3 sm:p-4 mb-3 cursor-pointer transition-all duration-200 hover:bg-gray-900 hover:shadow-lg hover:shadow-cyan-500/20 border border-gray-700 hover:border-cyan-500/50"
    >
      {/* Header - Status and Menu */}
      <div className="flex items-start justify-between mb-3 gap-2">
        <span className={`${getStatusBgColor(task.status)} ${getStatusTextColor(task.status)} text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1 sm:gap-1.5 whitespace-nowrap`}>
          <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${getStatusColor(task.status)} shrink-0`}></span>
          <span className="truncate">{task.status}</span>
        </span>
        <button className="text-gray-400 hover:text-white transition-colors shrink-0">
          <MoreVertical size={16} className="w-4 h-4 sm:w-4 sm:h-4" />
        </button>
      </div>
      
      {/* Title and Description */}
      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base line-clamp-2">{task.title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2">{task.description}</p>
      
      {/* Assignee */}
      <div className="flex items-center justify-between mb-3 gap-2">
        <span className="text-gray-400 text-xs sm:text-sm truncate flex-1">{task.assignee}</span>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold shrink-0">
          {getInitials(task.assignee)}
        </div>
      </div>
      
      {/* Due Date and Priority */}
      <div className="flex items-center justify-between text-xs sm:text-sm mb-3 gap-2">
        <div className="flex items-center text-gray-400 min-w-0">
          <Calendar size={14} className="mr-1 shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="truncate text-[10px] sm:text-xs">{task.dueDate}</span>
        </div>
        <span className={`${getPriorityColor(task.priority)} text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded text-white font-medium whitespace-nowrap shrink-0`}>
          {task.priority}
        </span>
      </div>
      
      {/* Comments and Attachments */}
      <div className="flex items-center gap-3 sm:gap-4 pt-3 border-t border-gray-700 text-gray-400 text-[10px] sm:text-sm">
        <div className="flex items-center gap-1 min-w-0">
          <MessageSquare size={14} className="shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="truncate">{task.comments} <span className="hidden xs:inline">Comments</span></span>
        </div>
        <div className="flex items-center gap-1 min-w-0">
          <Paperclip size={14} className="shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="truncate">{task.attachments} <span className="hidden xs:inline">Attachments</span></span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;