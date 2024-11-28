import React from 'react';
import { Navigation } from './components/layout/Navigation';
import { DashboardHeader } from './components/dashboard/DashboardHeader';
import { StatsGrid } from './components/dashboard/StatsGrid';
import { CourseList } from './components/courses/CourseList';
import { UpcomingWork } from './components/assignments/UpcomingWork';
import { mockCourses, mockAssignments } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />
        <StatsGrid />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CourseList courses={mockCourses} />
          <UpcomingWork assignments={mockAssignments} />
        </div>
      </main>
    </div>
  );
}

export default App;