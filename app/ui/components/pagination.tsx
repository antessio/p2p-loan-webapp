// components/ui/pagination.tsx

import React, { ReactNode } from 'react';
import Link from 'next/link';

type PaginationProps = {
    children?: ReactNode;
    className?: string;
};

export const Pagination: React.FC<PaginationProps> = ({ children, className = '' }) => {
    return <nav className={`flex items-center justify-center space-x-2 ${className}`} aria-label="Pagination">{children}</nav>;
};

export const PaginationContent: React.FC<PaginationProps> = ({ children, className = '' }) => {
    return <div className={`flex space-x-1 ${className}`}>{children}</div>;
};

export const PaginationItem: React.FC<PaginationProps> = ({ children, className = '' }) => {
    return <div className={`flex ${className}`}>{children}</div>;
};

export const PaginationPrevious: React.FC<PaginationLinkPropsPrev> = ({ children, href, className = '' }) => {
    return (
        <Link href={href} passHref className={`px-3 py-1 rounded-l-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 ${className}`}>

            {children}
        </Link>
    );
};

export const PaginationNext: React.FC<PaginationLinkPropsNext> = ({ children, href, className = '' }) => {
    return (
        <Link href={href} passHref className={`px-3 py-1 rounded-r-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 ${className}`}>
            {children}
        </Link>
    );
};

type PaginationLinkProps = PaginationProps & { href: string; active?: boolean };
type PaginationLinkPropsPrev = PaginationLinkProps & { children?: ReactNode }
type PaginationLinkPropsNext = PaginationLinkProps & { children?: ReactNode }

export const PaginationLink: React.FC<PaginationLinkProps> = ({ children, href, className = '', active = false }) => {
    let baseClasses = `px-3 py-1 border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 ${className}`;
    let activeClasses = active ? 'bg-blue-500 text-red' : '';

    return (
        <Link href={href} passHref className={`${baseClasses} ${activeClasses}`}>
            {children}
        </Link>
    );
};

export default Pagination;
