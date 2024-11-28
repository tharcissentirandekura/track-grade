export interface Course {
  id: string;
  name: string;
  code: string;
  credits: number;
  grade: number;
}

export interface Assignment {
  id: string;
  title: string;
  type: 'Lab' | 'Quiz' | 'Assignment';
  dueDate: string;
  courseId: string;
}

export interface Stats {
  assignments: {
    percentage: number;
    total: number;
  };
  quizzes: {
    percentage: number;
    total: number;
  };
  labs: {
    percentage: number;
    total: number;
  };
  gpa: number;
}