// components/ui/table.tsx

import React, { ReactNode } from 'react';

type TableProps = {
  children: ReactNode;
  className?: string;
};

export const Table: React.FC<TableProps> = ({ children, className = '' }) => {
  return <table className={`min-w-full bg-white ${className}`}>{children}</table>;
};

export const TableHeader: React.FC<TableProps> = ({ children, className = '' }) => {
  return <thead className={`bg-gray-100 ${className}`}>{children}</thead>;
};

export const TableRow: React.FC<TableProps> = ({ children, className = '' }) => {
  return <tr className={`border-b ${className}`}>{children}</tr>;
};

export const TableHead: React.FC<TableProps> = ({ children, className = '' }) => {
  return <th className={`text-left px-6 py-3 text-gray-600 font-semibold uppercase tracking-wider ${className}`}>{children}</th>;
};

export const TableBody: React.FC<TableProps> = ({ children, className = '' }) => {
  return <tbody className={className}>{children}</tbody>;
};

export const TableCell: React.FC<TableProps> = ({ children, className = '' }) => {
  return <td className={`px-6 py-4 whitespace-nowrap ${className}`}>{children}</td>;
};
