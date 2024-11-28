import React from 'react';
import { format } from 'date-fns';

interface AssignmentInfoProps {
  title: string;
  dueDate: string;
}

export const AssignmentInfo: React.FC<AssignmentInfoProps> = ({ title, dueDate }) => {
  return (
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">
        Due {format(new Date(dueDate), 'MM/dd/yyyy')}
      </p>
    </div>
  );
};