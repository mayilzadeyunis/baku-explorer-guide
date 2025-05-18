
import React, { useState, useEffect } from 'react';
import { Podcast, CloudSun, Thermometer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface WeatherPodcastProps {
  currentTemp?: number;
  condition?: string;
  feelsLike?: number;
  humidity?: number;
  windSpeed?: number;
}

const WeatherPodcast: React.FC<WeatherPodcastProps> = ({ 
  currentTemp = 24, 
  condition = "Sunny", 
  feelsLike = 25, 
  humidity = 45, 
  windSpeed = 8
}) => {
  const [isLive, setIsLive] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Toggle live indicator every 2 seconds to create blinking effect
      setIsLive(prev => !prev);
    }, 2000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return (
    <Card className="bg-gradient-to-br from-baku-dark to-baku-primary text-white">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Podcast size={24} className="mr-2" />
            <h3 className="text-lg font-bold">Weather Podcast</h3>
          </div>
          <div className="flex items-center">
            <span className={`h-3 w-3 rounded-full mr-2 ${isLive ? 'bg-red-500' : 'bg-gray-400'}`}></span>
            <span className="text-sm font-medium">LIVE</span>
          </div>
        </div>
        
        <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm opacity-80">Now broadcasting at {formattedTime}</span>
            <CloudSun size={20} />
          </div>
          
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">{currentTemp}°C</p>
                <p className="text-sm">{condition}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
                <div>
                  <span className="opacity-80">Feels like:</span> {feelsLike}°C
                </div>
                <div>
                  <span className="opacity-80">Humidity:</span> {humidity}%
                </div>
                <div>
                  <span className="opacity-80">Wind:</span> {windSpeed} km/h
                </div>
                <div>
                  <span className="opacity-80">Broadcast:</span> Live
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-3">
          <p className="text-sm opacity-90">
            "Stay tuned for hourly updates on Baku's weather conditions and forecasts throughout the day."
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherPodcast;
