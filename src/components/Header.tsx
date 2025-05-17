
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  subtitle, 
  className, 
  transparent = false,
  ...props 
}) => {
  return (
    <header 
      className={cn(
        "px-4 py-3",
        transparent ? "bg-transparent" : "bg-white border-b border-gray-200",
        className
      )}
      {...props}
    >
      <h1 className="text-xl font-bold text-baku-dark">{title}</h1>
      {subtitle && (
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      )}
    </header>
  );
};

export default Header;
