export interface Task {
  id: number;
  title: string;
  description: string;
  assignee: string;
  priority: 'Low' | 'Medium' | 'High';
  dueDate: string;
  status: 'To-Do' | 'In Progress' | 'Not Started' | 'Done';
  comments: number;
  attachments: number;
}

export interface Column {
  id: 'To-Do' | 'In Progress' | 'Not Started' | 'Done';
  name: string;
  color: string;
  dotColor: string;
}

export interface Comment {
  id: number;
  author: string;
  text: string;
  timestamp: string;
}