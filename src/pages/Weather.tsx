
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/Navigation/BottomNav';
import { Cloud, CloudSun, CloudSunRain, Sun } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import WeatherPodcast from '@/components/WeatherPodcast';

interface WeatherData {
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        avgtemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
        maxtemp_c: number;
        mintemp_c: number;
      };
    }>;
  };
}

const fetchWeather = async (): Promise<WeatherData> => {
  const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5b47aa3b1a204f95a49113114232306&q=Baku&days=5&aqi=no&alerts=no');
  if (!response.ok) {
    throw new Error('Weather data not available');
  }
  return response.json();
};

const getWeatherIcon = (condition: string) => {
  const lowercaseCondition = condition.toLowerCase();
  if (lowercaseCondition.includes('sunny') || lowercaseCondition.includes('clear')) {
    return <Sun size={24} className="text-yellow-500" />;
  } else if (lowercaseCondition.includes('rain') || lowercaseCondition.includes('drizzle') || lowercaseCondition.includes('shower')) {
    return <CloudSunRain size={24} className="text-gray-500" />;
  } else if (lowercaseCondition.includes('cloud') || lowercaseCondition.includes('overcast')) {
    return <CloudSun size={24} className="text-gray-400" />;
  } else {
    return <Cloud size={24} className="text-blue-400" />;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).format(date);
};

const Weather = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather,
    refetchInterval: 1800000, // Refetch every 30 minutes
  });

  // Mock data for when the API is unavailable
  const mockWeatherData = {
    currentTemp: 24,
    condition: "Partly cloudy",
    feelsLike: 25,
    humidity: 45,
    windSpeed: 8
  };

  if (isLoading) {
    return (
      <div className="pb-16">
        <Header title="Weather Forecast" subtitle="Weather in Baku" />
        <div className="p-4 flex justify-center items-center h-64">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-32 bg-gray-200 rounded-md mb-4"></div>
            <div className="h-6 w-24 bg-gray-200 rounded-md"></div>
          </div>
        </div>
        <BottomNav activeTab="weather" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="pb-16">
        <Header title="Weather Forecast" subtitle="Weather in Baku" />
        <div className="p-4">
          <WeatherPodcast {...mockWeatherData} />
          
          <div className="mt-4 bg-red-100 p-4 rounded-xl text-red-800">
            <p>Unable to load weather data at the moment. Displaying estimated values.</p>
          </div>
        </div>
        <BottomNav activeTab="weather" />
      </div>
    );
  }

  return (
    <div className="pb-16">
      <Header title="Weather Forecast" subtitle="Weather in Baku" />
      
      {data && (
        <div className="p-4">
          <WeatherPodcast 
            currentTemp={data.current.temp_c} 
            condition={data.current.condition.text}
            feelsLike={data.current.feelslike_c}
            humidity={data.current.humidity}
            windSpeed={Math.round(data.current.wind_kph)}
          />
          
          <div className="mt-6">
            <Card className="mb-4 bg-gradient-to-br from-baku-light to-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">Current Weather</h2>
                    <p className="text-4xl font-bold mt-2">{data.current.temp_c}°C</p>
                    <p className="text-gray-600">{data.current.condition.text}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Feels like:</span>
                        <span className="ml-2 font-medium">{data.current.feelslike_c}°C</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Wind:</span>
                        <span className="ml-2 font-medium">{data.current.wind_kph} km/h</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Humidity:</span>
                        <span className="ml-2 font-medium">{data.current.humidity}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img 
                      src={`https:${data.current.condition.icon}`} 
                      alt={data.current.condition.text}
                      width={80}
                      height={80}
                      className="w-20 h-20"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold mb-3">5-Day Forecast</h3>
            <div className="grid grid-cols-1 gap-3">
              {data.forecast.forecastday.map((day, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-3">
                          <img 
                            src={`https:${day.day.condition.icon}`}
                            alt={day.day.condition.text}
                            width={40}
                            height={40}
                            className="w-10 h-10"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{formatDate(day.date)}</p>
                          <p className="text-gray-600 text-sm">{day.day.condition.text}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{day.day.avgtemp_c}°C</p>
                        <p className="text-xs text-gray-500">
                          {day.day.mintemp_c}° / {day.day.maxtemp_c}°
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 p-4 bg-baku-light rounded-xl">
              <h3 className="font-medium mb-2">Clothing Suggestions</h3>
              <p className="text-sm text-gray-700">
                {data.current.temp_c > 25 
                  ? "It's hot in Baku today! Wear light clothing, a hat, and don't forget sunscreen."
                  : data.current.temp_c > 15
                  ? "The temperature is pleasant. A light jacket or sweater might be useful for the evening."
                  : "It's cool in Baku today. Bring a jacket and dress in layers."}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <BottomNav activeTab="weather" />
    </div>
  );
};

export default Weather;
