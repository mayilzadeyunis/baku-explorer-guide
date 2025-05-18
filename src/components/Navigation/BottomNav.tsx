
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Map, Landmark, Building, Sun } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'home' | 'transport' | 'places' | 'services' | 'weather';
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab }) => {
  const getActiveClass = (tab: string) => {
    if (tab === activeTab) {
      return 'text-baku-primary font-medium';
    }
    return 'text-gray-600';
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center w-1/5 ${getActiveClass('home')}`}
        >
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link 
          to="/transport" 
          className={`flex flex-col items-center justify-center w-1/5 ${getActiveClass('transport')}`}
        >
          <Map size={20} />
          <span className="text-xs mt-1">Transport</span>
        </Link>
        <Link 
          to="/places" 
          className={`flex flex-col items-center justify-center w-1/5 ${getActiveClass('places')}`}
        >
          <Landmark size={20} />
          <span className="text-xs mt-1">Places</span>
        </Link>
        <Link 
          to="/services" 
          className={`flex flex-col items-center justify-center w-1/5 ${getActiveClass('services')}`}
        >
          <Building size={20} />
          <span className="text-xs mt-1">Services</span>
        </Link>
        <Link 
          to="/weather" 
          className={`flex flex-col items-center justify-center w-1/5 ${getActiveClass('weather')}`}
        >
          <Sun size={20} />
          <span className="text-xs mt-1">Weather</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
