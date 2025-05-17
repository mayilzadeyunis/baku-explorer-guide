
import React from 'react';
import { cn } from '@/lib/utils';
import { Clock, MapPin } from 'lucide-react';

interface PlaceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  location: string;
  image: string;
  category: string;
  hours?: string;
  featured?: boolean;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ 
  name, 
  location,
  image,
  category,
  hours,
  featured = false,
  className, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "baku-card animate-slide-up",
        featured ? "border-2 border-baku-accent" : "",
        className
      )}
      {...props}
    >
      <div 
        className="h-48 bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${image})` }}
      >
        {featured && (
          <div className="absolute top-2 right-2 bg-baku-accent text-white px-2 py-1 text-xs rounded-full">
            Featured
          </div>
        )}
        <div className="absolute bottom-0 left-0 bg-baku-primary text-white px-3 py-1 text-sm">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg">{name}</h3>
        <div className="flex items-center mt-2 text-sm text-gray-600">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>
        {hours && (
          <div className="flex items-center mt-1 text-sm text-gray-600">
            <Clock size={16} className="mr-1" />
            <span>{hours}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaceCard;
