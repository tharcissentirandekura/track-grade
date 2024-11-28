import React from 'react';
import { Course } from '../types';

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
          <div key={course.id} className="flex justify-between items-center border-b pb-4">
            <div>
              <h3 className="font-medium">{course.name}</h3>
              <p className="text-sm text-gray-500">{course.code} · {course.credits} credits</p>
            </div>
            <div className="bg-blue-100 text-blue-800 rounded-full px-4 py-1">
              {course.grade}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function calculateGPA(courses: Course[]): number {
  if (courses.length === 0) return 0;
  
  const totalPoints = courses.reduce((acc, course) => {
    const gradePoints = (course.grade / 100) * 4.0;
    return acc + (gradePoints * course.credits);
  }, 0);
  
  const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);
  return totalPoints / totalCredits;
}