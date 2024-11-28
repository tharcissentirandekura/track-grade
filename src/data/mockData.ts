import { Course, Assignment } from '../types';

export const mockCourses: Course[] = [
  { id: '1', name: 'Introduction to Computer Science', code: 'CS101', credits: 3, grade: 92 },
  { id: '2', name: 'Calculus I', code: 'MATH201', credits: 4, grade: 88 },
  { id: '3', name: 'Physics', code: 'PHYS101', credits: 4, grade: 85 },
  { id: '4', name: 'English Composition', code: 'ENG101', credits: 3, grade: 95 }
];

export const mockAssignments: Assignment[] = [
  { id: '1', title: 'Python Lab 1', type: 'Lab', dueDate: '2024-03-18', courseId: '1' },
  { id: '2', title: 'Variables & Types', type: 'Quiz', dueDate: '2024-03-19', courseId: '1' },
  { id: '3', title: "Newton's Laws", type: 'Quiz', dueDate: '2024-03-20', courseId: '3' },
  { id: '4', title: 'Programming Basics', type: 'Assignment', dueDate: '2024-03-24', courseId: '1' }
];