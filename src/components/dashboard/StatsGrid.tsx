import React from 'react';
import { BsBook, BsLightning, BsFlask, BsAward } from 'react-icons/bs';
import { StatsCard } from './StatsCard';

export const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <StatsCard
        title="Assignments"
        value="89%"
        subtitle="3 total"
        Icon={BsBook}
        bgColor="bg-blue-50"
      />
      <StatsCard
        title="Quizzes"
        value="89%"
        subtitle="3 total"
        Icon={BsLightning}
        bgColor="bg-green-50"
      />
      <StatsCard
        title="Labs"
        value="92%"
        subtitle="3 total"
        Icon={BsFlask}
        bgColor="bg-purple-50"
      />
      <StatsCard
        title="Overall GPA"
        value="3.75"
        subtitle="Spring 2024"
        Icon={BsAward}
        bgColor="bg-blue-50"
      />
    </div>
  );
};