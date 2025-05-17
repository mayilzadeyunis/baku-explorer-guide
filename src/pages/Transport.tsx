
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/Navigation/BottomNav';
import TransportCard from '@/components/Transport/TransportCard';
import { Map, Bus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Transport = () => {
  const [transportType, setTransportType] = useState<'bus' | 'metro'>('bus');

  const busRoutes = [
    { number: "1", name: "28 May - Bilajari", startPoint: "28 May", endPoint: "Bilajari", frequency: "15 min" },
    { number: "5", name: "Icheri Sheher - Hocasan", startPoint: "Icheri Sheher", endPoint: "Hocasan", frequency: "20 min" },
    { number: "65", name: "Koroglu - Badamdar", startPoint: "Koroglu", endPoint: "Badamdar", frequency: "10 min" },
    { number: "88", name: "28 May - Airport", startPoint: "28 May", endPoint: "Airport", frequency: "30 min" },
    { number: "125", name: "Nizami - Boulevard", startPoint: "Nizami", endPoint: "Boulevard", frequency: "15 min" },
  ];

  const metroRoutes = [
    { number: "1", name: "Red Line", startPoint: "Hazi Aslanov", endPoint: "Icharishahar", frequency: "3 min" },
    { number: "2", name: "Green Line", startPoint: "Darnagul", endPoint: "Nasimi", frequency: "5 min" },
    { number: "3", name: "Purple Line", startPoint: "8 November", endPoint: "Khojasan", frequency: "6 min" },
  ];

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
                onClick={() => setTransportType('bus')}
                className={transportType === 'bus' ? "bg-baku-secondary" : ""}
              >
                <Bus size={16} className="mr-1" />
                Bus
              </Button>
              <Button 
                size="sm" 
                variant={transportType === 'metro' ? "default" : "outline"}
                onClick={() => setTransportType('metro')}
                className={transportType === 'metro' ? "bg-baku-ruby" : ""}
              >
                <Map size={16} className="mr-1" />
                Metro
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            {transportType === 'bus' ? (
              busRoutes.map(route => (
                <TransportCard 
                  key={route.number}
                  type="bus"
                  number={route.number}
                  name={route.name}
                  startPoint={route.startPoint}
                  endPoint={route.endPoint}
                  frequency={route.frequency}
                />
              ))
            ) : (
              metroRoutes.map(route => (
                <TransportCard 
                  key={route.number}
                  type="metro"
                  number={route.number}
                  name={route.name}
                  startPoint={route.startPoint}
                  endPoint={route.endPoint}
                  frequency={route.frequency}
                />
              ))
            )}
          </div>

          <div className="mt-6 p-4 bg-baku-light rounded-xl">
            <h3 className="font-medium mb-2">BakuCard Information</h3>
            <p className="text-sm text-gray-700">
              The BakuCard is the payment method for public transport in Baku. 
              You can purchase it at metro stations and selected bus stops for 2 AZN.
            </p>
            <div className="mt-3 text-sm">
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span>Bus fare:</span>
                <span className="font-medium">0.30 AZN</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Metro fare:</span>
                <span className="font-medium">0.30 AZN</span>
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
