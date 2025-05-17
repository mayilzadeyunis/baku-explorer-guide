
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  color?: "primary" | "secondary" | "accent" | "muted";
}

const colorVariants = {
  primary: "bg-baku-primary text-white",
  secondary: "bg-baku-secondary text-white",
  accent: "bg-baku-accent text-white",
  muted: "bg-muted text-foreground",
};

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  to,
  color = "primary",
  className, 
  ...props 
}) => {
  return (
    <Link to={to}>
      <div 
        className={cn(
          "p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow",
          colorVariants[color],
          className
        )}
        {...props}
      >
        <div className="flex items-start">
          <div className="mr-4 p-2 bg-white/20 rounded-lg">
            {icon}
          </div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm mt-1 opacity-90">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
