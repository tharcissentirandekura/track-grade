import React from 'react';

interface CourseGradeProps {
  grade: number;
}

export const CourseGrade: React.FC<CourseGradeProps> = ({ grade }) => {
  return (
    <div className="bg-blue-100 text-blue-800 rounded-full px-4 py-1">
      {grade}%
    </div>
  );
};