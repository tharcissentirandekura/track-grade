import React from 'react';
import { IconType } from 'react-icons';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  Icon: IconType;
  bgColor: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, Icon, bgColor }) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 flex flex-col`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
          <p className="text-4xl font-bold mt-2">{value}</p>
          <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
        </div>
        <Icon className="text-2xl opacity-50" />
      </div>
    </div>
  );
}