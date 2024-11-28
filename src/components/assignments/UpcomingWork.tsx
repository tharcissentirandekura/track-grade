import React from 'react';
import { Assignment } from '../../types';
import { UpcomingWorkItem } from './UpcomingWorkItem';

interface UpcomingWorkProps {
  assignments: Assignment[];
}

export const UpcomingWork: React.FC<UpcomingWorkProps> = ({ assignments }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Upcoming Work</h2>
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <UpcomingWorkItem key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};