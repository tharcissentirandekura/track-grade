import React from 'react';
import { Assignment } from '../../types';
import { getAssignmentTypeStyles } from '../../utils/styles';

interface AssignmentTypeProps {
  type: Assignment['type'];
}

export const AssignmentType: React.FC<AssignmentTypeProps> = ({ type }) => {
  return (
    <span className={`px-3 py-1 rounded-full text-sm ${getAssignmentTypeStyles(type)}`}>
      {type}
    </span>
  );
};