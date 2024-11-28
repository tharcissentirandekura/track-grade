import React from 'react';
import { Assignment } from '../types';
import { format } from 'date-fns';

interface UpcomingWorkProps {
  assignments: Assignment[];
}

export const UpcomingWork: React.FC<UpcomingWorkProps> = ({ assignments }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Upcoming Work</h2>
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{assignment.title}</h3>
              <p className="text-sm text-gray-500">
                Due {format(new Date(assignment.dueDate), 'MM/dd/yyyy')}
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${getTypeStyles(assignment.type)}`}>
              {assignment.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

function getTypeStyles(type: Assignment['type']): string {
  switch (type) {
    case 'Lab':
      return 'bg-purple-100 text-purple-800';
    case 'Quiz':
      return 'bg-green-100 text-green-800';
    case 'Assignment':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}