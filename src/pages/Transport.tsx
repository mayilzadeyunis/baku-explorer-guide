
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/Navigation/BottomNav';
import TransportCard from '@/components/Transport/TransportCard';
import { Map, Bus, Search, Info, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

const Transport = () => {
  const [transportType, setTransportType] = useState<'bus' | 'metro'>('bus');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  const busRoutes = [
    { 
      number: "1", 
      name: "28 May - Bilajari", 
      startPoint: "28 May", 
      endPoint: "Bilajari", 
      frequency: "15 min",
      stops: ["28 May", "Sahil", "Nizami", "May 28 Mall", "Narimanov", "Koroghlu", "Baku International Bus Terminal", "Keşlə", "Bilajari"],
      firstBus: "06:00",
      lastBus: "23:30",
      fare: "0.50 AZN"
    },
    { 
      number: "5", 
      name: "Icheri Sheher - Hocasan", 
      startPoint: "Icheri Sheher", 
      endPoint: "Hocasan", 
      frequency: "20 min",
      stops: ["Icheri Sheher", "Fountains Square", "Sahil", "28 May", "Ganjlik", "Azadliq", "New Yasamal", "Hocasan"],
      firstBus: "06:30",
      lastBus: "22:45",
      fare: "0.50 AZN"
    },
    { 
      number: "65", 
      name: "Koroglu - Badamdar", 
      startPoint: "Koroglu", 
      endPoint: "Badamdar", 
      frequency: "10 min",
      stops: ["Koroglu", "Elmler Akademiyasi", "Narimanov", "Nizami", "Sahil", "Liman", "Bibi-Heybat", "Badamdar"],
      firstBus: "06:00",
      lastBus: "00:00",
      fare: "0.50 AZN"
    },
    { 
      number: "88", 
      name: "28 May - Airport", 
      startPoint: "28 May", 
      endPoint: "Airport", 
      frequency: "30 min",
      stops: ["28 May", "Koroglu", "20 Yanvar", "Bina Shopping Center", "Heydar Aliyev Airport"],
      firstBus: "05:30",
      lastBus: "00:30",
      fare: "1.30 AZN"
    },
    { 
      number: "125", 
      name: "Nizami - Boulevard", 
      startPoint: "Nizami", 
      endPoint: "Boulevard", 
      frequency: "15 min",
      stops: ["Nizami", "28 May", "Sahil", "Boulevard", "Flag Square", "White City"],
      firstBus: "07:00",
      lastBus: "23:00",
      fare: "0.50 AZN"
    },
    { 
      number: "14", 
      name: "Azadliq - Baku Plaza", 
      startPoint: "Azadliq", 
      endPoint: "Baku Plaza", 
      frequency: "12 min",
      stops: ["Azadliq", "20 Yanvar", "Elmler Akademiyasi", "Narimanov", "Ganjlik", "Inshaatchilar", "Baku Plaza"],
      firstBus: "06:15",
      lastBus: "23:15",
      fare: "0.50 AZN"
    },
    { 
      number: "175", 
      name: "28 May - Shuvalan", 
      startPoint: "28 May", 
      endPoint: "Shuvalan", 
      frequency: "25 min",
      stops: ["28 May", "Koroglu", "Khirdalan", "Novkhani", "Shuvalan"],
      firstBus: "06:30",
      lastBus: "22:30",
      fare: "0.90 AZN"
    },
    { 
      number: "205", 
      name: "Koroglu - Mardakan", 
      startPoint: "Koroglu", 
      endPoint: "Mardakan", 
      frequency: "20 min",
      stops: ["Koroglu", "Khirdalan", "Novkhani", "Bilgah", "Mardakan"],
      firstBus: "06:45",
      lastBus: "23:00",
      fare: "0.90 AZN"
    },
  ];

  const metroRoutes = [
    { 
      number: "1", 
      name: "Red Line", 
      startPoint: "Hazi Aslanov", 
      endPoint: "Icharishahar", 
      frequency: "3 min",
      stations: ["Hazi Aslanov", "Ahmadli", "Khatai", "Ganjlik", "May 28", "Sahil", "Icharishahar"],
      firstTrain: "06:00",
      lastTrain: "00:00",
      fare: "0.50 AZN"
    },
    { 
      number: "2", 
      name: "Green Line", 
      startPoint: "Darnagul", 
      endPoint: "Nasimi", 
      frequency: "5 min",
      stations: ["Darnagul", "Azadliq Prospekti", "20 Yanvar", "Inshaatchilar", "Elmlar Akademiyasi", "Nasimi"],
      firstTrain: "06:00",
      lastTrain: "00:00",
      fare: "0.50 AZN"
    },
    { 
      number: "3", 
      name: "Purple Line", 
      startPoint: "8 November", 
      endPoint: "Khojasan", 
      frequency: "6 min",
      stations: ["8 November", "Memar Ajami", "Khojasan"],
      firstTrain: "06:00",
      lastTrain: "00:00",
      fare: "0.50 AZN"
    },
  ];

  const filteredBusRoutes = searchQuery 
    ? busRoutes.filter(route => 
        route.number.toLowerCase().includes(searchQuery.toLowerCase()) || 
        route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.startPoint.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.endPoint.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : busRoutes;

  const filteredMetroRoutes = searchQuery 
    ? metroRoutes.filter(route => 
        route.number.toLowerCase().includes(searchQuery.toLowerCase()) || 
        route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.startPoint.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.endPoint.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : metroRoutes;

  const handleRouteClick = (routeNumber: string) => {
    if (selectedRoute === routeNumber) {
      setSelectedRoute(null);
    } else {
      setSelectedRoute(routeNumber);
    }
  };

  const getSelectedRouteDetails = () => {
    if (!selectedRoute) return null;
    
    if (transportType === 'bus') {
      return busRoutes.find(route => route.number === selectedRoute);
    } else {
      return metroRoutes.find(route => route.number === selectedRoute);
    }
  };

  const routeDetails = getSelectedRouteDetails();

  return (
    <div className="pb-16">
      <Header title="Public Transport" subtitle="Navigate Baku with ease" />
      
      <Tabs defaultValue="routes" className="w-full">
        <div className="p-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="routes">Routes</TabsTrigger>
            <TabsTrigger value="map">Map</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="routes" className="p-4 pt-0">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-lg font-medium">Transport Options</h2>
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                variant={transportType === 'bus' ? "default" : "outline"}
                onClick={() => {
                  setTransportType('bus');
                  setSelectedRoute(null);
                }}
                className={transportType === 'bus' ? "bg-baku-secondary" : ""}
              >
                <Bus size={16} className="mr-1" />
                Bus
              </Button>
              <Button 
                size="sm" 
                variant={transportType === 'metro' ? "default" : "outline"}
                onClick={() => {
                  setTransportType('metro');
                  setSelectedRoute(null);
                }}
                className={transportType === 'metro' ? "bg-baku-ruby" : ""}
              >
                <Map size={16} className="mr-1" />
                Metro
              </Button>
            </div>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder={`Search ${transportType} routes...`}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-3">
            {transportType === 'bus' ? (
              filteredBusRoutes.map(route => (
                <div key={route.number} onClick={() => handleRouteClick(route.number)}>
                  <TransportCard 
                    type="bus"
                    number={route.number}
                    name={route.name}
                    startPoint={route.startPoint}
                    endPoint={route.endPoint}
                    frequency={route.frequency}
                    active={selectedRoute === route.number}
                  />
                </div>
              ))
            ) : (
              filteredMetroRoutes.map(route => (
                <div key={route.number} onClick={() => handleRouteClick(route.number)}>
                  <TransportCard 
                    type="metro"
                    number={route.number}
                    name={route.name}
                    startPoint={route.startPoint}
                    endPoint={route.endPoint}
                    frequency={route.frequency}
                    active={selectedRoute === route.number}
                  />
                </div>
              ))
            )}
          </div>

          {routeDetails && (
            <div className="mt-4 bg-white p-4 rounded-xl border border-gray-200 animate-fade-in">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-lg">Route Details</h3>
                <div className={`px-2 py-1 rounded text-white text-xs ${transportType === 'bus' ? 'bg-baku-secondary' : 'bg-baku-ruby'}`}>
                  {transportType === 'bus' ? 'Bus' : 'Metro'} #{routeDetails.number}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Clock size={16} className="mr-2 text-gray-500" />
                  <span>First {transportType}: {transportType === 'bus' ? routeDetails.firstBus : routeDetails.firstTrain}</span>
                  <span className="mx-2">•</span>
                  <span>Last {transportType}: {transportType === 'bus' ? routeDetails.lastBus : routeDetails.lastTrain}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Info size={16} className="mr-2 text-gray-500" />
                  <span>Fare: {routeDetails.fare}</span>
                  <span className="mx-2">•</span>
                  <span>Frequency: Every {routeDetails.frequency}</span>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Stops:</p>
                  <div className="relative pl-6">
                    <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                    {(transportType === 'bus' ? routeDetails.stops : routeDetails.stations).map((stop, index, array) => (
                      <div key={index} className="relative mb-3 last:mb-0">
                        <div className={`absolute left-[-14px] top-1 w-3 h-3 rounded-full ${index === 0 || index === array.length - 1 ? 'bg-baku-primary' : 'bg-gray-300'}`}></div>
                        <div className="text-sm">
                          {stop}
                          {(index === 0 || index === array.length - 1) && (
                            <span className={`ml-2 text-xs px-1.5 py-0.5 rounded ${index === 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {index === 0 ? 'Start' : 'End'}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-baku-light rounded-xl">
            <h3 className="font-medium mb-2">BakuCard Information</h3>
            <p className="text-sm text-gray-700">
              The BakuCard is the payment method for public transport in Baku. 
              You can purchase it at metro stations and selected bus stops for 2 AZN.
            </p>
            <div className="mt-3 text-sm">
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span>Bus fare:</span>
                <span className="font-medium">0.50 AZN</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Metro fare:</span>
                <span className="font-medium">0.50 AZN</span>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="map" className="p-4 pt-0">
          <div className="rounded-xl overflow-hidden bg-muted h-[400px] flex items-center justify-center">
            <div className="text-center p-4">
              <Map size={64} className="mx-auto mb-4 text-baku-primary opacity-50" />
              <h3 className="font-medium mb-2">Interactive Map</h3>
              <p className="text-sm text-muted-foreground">
                Map will be available in the next update. 
                Download offline maps for now.
              </p>
              <Button className="mt-4 bg-baku-primary">
                Download Offline Map
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <BottomNav activeTab="transport" />
    </div>
  );
};

export default Transport;
