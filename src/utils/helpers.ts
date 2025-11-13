// utils/helpers.ts

import { Task } from '../types/task';

// Dark color for the dot (full opacity)
export const getStatusColor = (status: Task['status']): string => {
  switch(status) {
    case 'To-Do': return 'bg-yellow-500';
    case 'In Progress': return 'bg-cyan-500';
    case 'Not Started': return 'bg-orange-500';
    case 'Done': return 'bg-green-500';
    default: return 'bg-gray-500';
  }
};

// Light background color for status badge (20% opacity)
export const getStatusBgColor = (status: Task['status']): string => {
  switch(status) {
    case 'To-Do': return 'bg-yellow-500/20';
    case 'In Progress': return 'bg-cyan-500/20';
    case 'Not Started': return 'bg-orange-500/20';
    case 'Done': return 'bg-green-500/20';
    default: return 'bg-gray-500/20';
  }
};

// Text color for status badge
export const getStatusTextColor = (status: Task['status']): string => {
  switch(status) {
    case 'To-Do': return 'text-yellow-400';
    case 'In Progress': return 'text-cyan-400';
    case 'Not Started': return 'text-orange-400';
    case 'Done': return 'text-green-400';
    default: return 'text-gray-400';
  }
};

export const getPriorityColor = (priority: Task['priority']): string => {
  switch(priority) {
    case 'High': return 'bg-red-500';
    case 'Medium': return 'bg-yellow-500';
    case 'Low': return 'bg-green-500';
    default: return 'bg-gray-500';
  }
};

export const getInitials = (name: string): string => {
  return name.split(' ').map(n => n[0]).join('');
};