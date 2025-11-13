'use client';

import React, { useState } from 'react';
import { Calendar, Paperclip, MessageSquare } from 'lucide-react';
import { Task, Comment } from '../types/task';
import { getPriorityColor, getStatusColor, getStatusBgColor, getStatusTextColor, getInitials } from '../utils/helpers';

interface TaskDetailViewProps {
  task: Task;
  onClose: () => void;
}

const TaskDetailView: React.FC<TaskDetailViewProps> = ({ task, onClose }) => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: 'John Doe', text: 'Initial tender review completed', timestamp: '2 hours ago' },
    { id: 2, author: 'Jane Smith', text: 'Added cost estimates', timestamp: '1 day ago' }
  ]);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = (): void => {
    if (newComment.trim()) {
      setComments([...comments, {
        id: comments.length + 1,
        author: 'Current User',
        text: newComment,
        timestamp: 'Just now'
      }]);
      setNewComment('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{task.title}</h2>
            <span className={`${getStatusBgColor(task.status)} ${getStatusTextColor(task.status)} text-xs px-2 py-1 rounded-full font-medium flex w-fit items-center gap-1.5`}>
              <span className={`w-2 h-2 rounded-full ${getStatusColor(task.status)}`}></span>
              {task.status}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Assignee</label>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                  {getInitials(task.assignee)}
                </div>
                <span className="text-white">{task.assignee}</span>
              </div>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Priority</label>
              <span className={`${getPriorityColor(task.priority)} inline-block px-3 py-1 rounded text-white font-medium text-sm`}>
                {task.priority}
              </span>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Due Date</label>
              <div className="flex items-center text-white">
                <Calendar size={16} className="mr-2" />
                {task.dueDate}
              </div>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Attachments</label>
              <div className="flex items-center text-white">
                <Paperclip size={16} className="mr-2" />
                {task.attachments} files
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="text-gray-400 text-sm mb-2 block">Description</label>
            <p className="text-white bg-gray-800 p-4 rounded-lg">{task.description}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <MessageSquare size={18} className="mr-2" />
              Comments ({comments.length})
            </h3>

            <div className="space-y-4 mb-4">
              {comments.map(comment => (
                <div key={comment.id} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{comment.author}</span>
                    <span className="text-gray-400 text-xs">{comment.timestamp}</span>
                  </div>
                  <p className="text-gray-300">{comment.text}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none"
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
              />
              <button
                onClick={handleAddComment}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailView;
