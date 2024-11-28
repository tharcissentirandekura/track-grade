import React from 'react';
import { Assignment } from '../../types';
import { AssignmentInfo } from './AssignmentInfo';
import { AssignmentType } from './AssignmentType';

interface UpcomingWorkItemProps {
  assignment: Assignment;
}

export const UpcomingWorkItem: React.FC<UpcomingWorkItemProps> = ({ assignment }) => {
  return (
    <div className="flex justify-between items-center">
      <AssignmentInfo title={assignment.title} dueDate={assignment.dueDate} />
      <AssignmentType type={assignment.type} />
    </div>
  );
};