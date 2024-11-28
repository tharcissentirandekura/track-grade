import React from 'react';
import { Course } from '../../types';
import { calculateGPA } from '../../utils/gpa';
import { CourseListItem } from './CourseListItem';

interface CourseListProps {
  courses: Course[];
}

export const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Course Grades</h2>
        <span className="text-gray-500">Current GPA: {calculateGPA(courses).toFixed(2)}</span>
      </div>
      <div className="space-y-4">
        {courses.map((course) => (
          <CourseListItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};