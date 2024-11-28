import { Course } from '../types';

export function calculateGPA(courses: Course[]): number {
  if (courses.length === 0) return 0;
  
  const totalPoints = courses.reduce((acc, course) => {
    const gradePoints = (course.grade / 100) * 4.0;
    return acc + (gradePoints * course.credits);
  }, 0);
  
  const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);
  return totalPoints / totalCredits;
}