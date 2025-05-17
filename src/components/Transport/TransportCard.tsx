
import React from 'react';
import { cn } from '@/lib/utils';

interface TransportCardProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "bus" | "metro";
  number: string;
  name?: string;
  startPoint?: string;
  endPoint?: string;
  frequency?: string;
  active?: boolean;
}

const TransportCard: React.FC<TransportCardProps> = ({ 
  type, 
  number,
  name,
  startPoint,
  endPoint,
  frequency,
  active = false,
  className, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "baku-card p-4",
        active ? "border-2 border-baku-primary" : "",
        className
      )}
      {...props}
    >
      <div className="flex items-center">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center text-white font-medium mr-3",
          type === "bus" ? "bg-baku-secondary" : "bg-baku-ruby"
        )}>
          {number}
        </div>
        <div>
          <h3 className="font-medium">{name || `${type.toUpperCase()} ${number}`}</h3>
          {(startPoint && endPoint) && (
            <p className="text-sm text-gray-600">
              {startPoint} → {endPoint}
            </p>
          )}
          {frequency && (
            <p className="text-xs text-gray-500 mt-1">Every {frequency}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransportCard;
