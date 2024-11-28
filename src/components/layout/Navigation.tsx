import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">GradeTracker</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700">Dashboard</a>
            <a href="#" className="text-gray-700">Courses</a>
            <a href="#" className="text-gray-700">Calendar</a>
          </div>
        </div>
      </div>
    </nav>
  );
};