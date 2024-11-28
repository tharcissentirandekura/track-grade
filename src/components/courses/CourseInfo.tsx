import React from 'react';

interface CourseInfoProps {
  name: string;
  code: string;
  credits: number;
}

export const CourseInfo: React.FC<CourseInfoProps> = ({ name, code, credits }) => {
  return (
    <div>
      <h3 className="font-medium">{name}</h3>
      <p className="text-sm text-gray-500">{code} · {credits} credits</p>
    </div>
  );
};