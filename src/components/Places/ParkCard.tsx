
import React from 'react';
import { cn } from '@/lib/utils';
import { Clock, MapPin, Park } from 'lucide-react';

interface ParkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  location: string;
  image: string;
  description: string;
  hours?: string;
  facilities: string[];
  entryFee?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

const ParkCard: React.FC<ParkCardProps> = ({ 
  name, 
  location,
  image,
  description,
  hours,
  facilities,
  entryFee,
  coordinates,
  className, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "baku-card animate-slide-up",
        className
      )}
      {...props}
    >
      <div 
        className="h-48 bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-0 left-0 bg-green-600 text-white px-3 py-1 text-sm">
          Park
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-lg">{name}</h3>
          <div className="flex items-center text-green-600">
            <Park size={18} />
          </div>
        </div>
        
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
        
        {entryFee && (
          <div className="mt-2 bg-gray-50 p-2 rounded-md text-sm">
            <span className="font-medium">Entry Fee:</span> {entryFee}
          </div>
        )}
        
        <div className="mt-3">
          <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
        </div>
        
        {facilities && facilities.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-gray-500 mb-1">Facilities:</p>
            <div className="flex flex-wrap gap-1">
              {facilities.map((facility, index) => (
                <span 
                  key={index}
                  className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full"
                >
                  {facility}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParkCard;
