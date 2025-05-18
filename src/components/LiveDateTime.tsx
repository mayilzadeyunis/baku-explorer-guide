
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const LiveDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const formattedDate = dateTime.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const formattedTime = dateTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: true
  });
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 bg-baku-light flex justify-between items-center">
        <div className="flex items-center">
          <Clock size={20} className="text-baku-primary mr-2" />
          <div>
            <p className="text-sm font-medium">{formattedDate}</p>
            <p className="text-xl font-bold text-baku-primary">{formattedTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDateTime;
