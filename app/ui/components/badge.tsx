// components/ui/badge.tsx

import React, { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger'; // You can define different variants for styling
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  let baseClasses =
    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium';

  let variantClasses;

  switch (variant) {
    case 'success':
      variantClasses = 'bg-green-100 text-green-800';
      break;
    case 'warning':
      variantClasses = 'bg-yellow-100 text-yellow-800';
      break;
    case 'danger':
      variantClasses = 'bg-red-100 text-red-800';
      break;
    case 'default':
    default:
      variantClasses = 'bg-gray-100 text-gray-800';
      break;
  }

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
