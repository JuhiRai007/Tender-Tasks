'use client';

import React, { useState } from 'react';
import { Task, Column } from '../types/task';
import { initialTasks } from '../data/initalTasks';
import Header from '../components/Header';
import ViewToggle from '../components/ViewToggle';
import BoardColumn from '../components/BoardColumn';
import TaskDetailView from '../components/TaskDetailView';

const columns: Column[] = [
  { id: 'To-Do', name: 'To - Do List', color: 'bg-yellow-500', dotColor: 'bg-yellow-500' },
  { id: 'In Progress', name: 'In Progress', color: 'bg-cyan-500', dotColor: 'bg-cyan-500' },
  { id: 'Not Started', name: 'Not Started', color: 'bg-orange-500', dotColor: 'bg-orange-500' },
  { id: 'Done', name: 'Done', color: 'bg-green-500', dotColor: 'bg-green-500' }
];

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [view, setView] = useState<'list' | 'board'>('board');
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const getTasksByStatus = (status: Task['status']): Task[] => {
    return tasks.filter(task => task.status === status);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, task: Task): void => {
    setDraggedTask(task);
    e.currentTarget.style.opacity = '0.5';
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>): void => {
    e.currentTarget.style.opacity = '1';
    setDraggedTask(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, newStatus: Task['status']): void => {
    e.preventDefault();
    if (draggedTask && draggedTask.status !== newStatus) {
      setTasks(tasks.map(task => 
        task.id === draggedTask.id 
          ? { ...task, status: newStatus }
          : task
      ));
    }
  };

  return (
    <div className="min-h-screen bg-[#1f2024] text-white">
      <Header />
      <ViewToggle view={view} onViewChange={setView} />

      {view === 'board' && (
        <div className="p-6">
          <div className="grid grid-cols-4 gap-4">
            {columns.map(column => (
              <BoardColumn
                key={column.id}
                column={column}
                tasks={getTasksByStatus(column.id)}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onTaskClick={setSelectedTask}
              />
            ))}
          </div>
        </div>
      )}

      {selectedTask && (
        <TaskDetailView task={selectedTask} onClose={() => setSelectedTask(null)} />
      )}
    </div>
  );
};

export default TaskBoard;