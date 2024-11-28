import React from 'react';
import { Course } from '../../types';
import { CourseInfo } from './CourseInfo';
import { CourseGrade } from './CourseGrade';

interface CourseListItemProps {
  course: Course;
}

export const CourseListItem: React.FC<CourseListItemProps> = ({ course }) => {
  return (
    <div className="flex justify-between items-center border-b pb-4">
      <CourseInfo name={course.name} code={course.code} credits={course.credits} />
      <CourseGrade grade={course.grade} />
    </div>
  );
};