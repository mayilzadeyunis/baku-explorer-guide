
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/Navigation/BottomNav';
import PlaceCard from '@/components/Places/PlaceCard';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Places = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const places = [
    {
      name: "Maiden Tower",
      location: "Icherisheher",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      category: "Historical",
      hours: "9:00 AM - 6:00 PM",
      featured: true,
    },
    {
      name: "Flame Towers",
      location: "Istiglaliyyat Street",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      category: "Landmark",
      hours: "Open 24/7 (exterior)",
      featured: true,
    },
    {
      name: "Heydar Aliyev Center",
      location: "1 Heydar Aliyev Avenue",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      category: "Cultural",
      hours: "10:00 AM - 8:00 PM",
      featured: false,
    },
    {
      name: "Azerbaijan National Museum",
      location: "Downtown Baku",
      image: "https://images.unsplash.com/photo-1566375638555-55e1b9225bad",
      category: "Museum",
      hours: "10:00 AM - 5:00 PM",
      featured: false,
    },
    {
      name: "Baku Boulevard",
      location: "Baku Bay",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      category: "Park",
      hours: "Open 24/7",
      featured: false,
    },
  ];

  const filteredPlaces = searchQuery 
    ? places.filter(place => 
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        place.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : places;

  return (
    <div className="pb-16">
      <Header title="Places to Visit" subtitle="Discover Baku's attractions" />
      
      <div className="p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search places..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="historical">Historical</TabsTrigger>
            <TabsTrigger value="cultural">Cultural</TabsTrigger>
            <TabsTrigger value="parks">Parks</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPlaces.map((place, index) => (
                <PlaceCard
                  key={index}
                  name={place.name}
                  location={place.location}
                  image={place.image}
                  category={place.category}
                  hours={place.hours}
                  featured={place.featured}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="historical" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPlaces
                .filter(place => place.category === "Historical")
                .map((place, index) => (
                  <PlaceCard
                    key={index}
                    name={place.name}
                    location={place.location}
                    image={place.image}
                    category={place.category}
                    hours={place.hours}
                    featured={place.featured}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cultural" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPlaces
                .filter(place => place.category === "Cultural")
                .map((place, index) => (
                  <PlaceCard
                    key={index}
                    name={place.name}
                    location={place.location}
                    image={place.image}
                    category={place.category}
                    hours={place.hours}
                    featured={place.featured}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="parks" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPlaces
                .filter(place => place.category === "Park")
                .map((place, index) => (
                  <PlaceCard
                    key={index}
                    name={place.name}
                    location={place.location}
                    image={place.image}
                    category={place.category}
                    hours={place.hours}
                    featured={place.featured}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNav activeTab="places" />
    </div>
  );
};

export default Places;
