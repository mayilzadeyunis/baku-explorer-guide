
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  image?: string;
  gradient?: boolean;
  height?: "sm" | "md" | "lg";
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  image, 
  gradient = true,
  height = "md",
  className, 
  ...props 
}) => {
  const heightClasses = {
    sm: "h-40",
    md: "h-64",
    lg: "h-96",
  };

  return (
    <div 
      className={cn(
        "relative w-full flex items-end",
        heightClasses[height],
        className
      )}
      {...props}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${image})` }}
      >
        {gradient && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        )}
      </div>
      
      <div className="relative z-10 p-6 text-white animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-sm md:text-base opacity-90">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
