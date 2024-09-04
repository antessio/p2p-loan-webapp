// components/ui/card.tsx

import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>{children}</div>;
};

export const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
};

export const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => {
  return <h2 className={`text-xl font-bold text-gray-800 ${className}`}>{children}</h2>;
};

export const CardDescription: React.FC<CardProps> = ({ children, className = '' }) => {
  return <p className={`text-gray-600 ${className}`}>{children}</p>;
};

export const CardContent: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
};

export const CardFooter: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`px-6 py-4 bg-gray-100 ${className}`}>{children}</div>;
};
