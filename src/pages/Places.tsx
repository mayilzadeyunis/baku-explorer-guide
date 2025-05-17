
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/Navigation/BottomNav';
import PlaceCard from '@/components/Places/PlaceCard';
import ParkCard from '@/components/Places/ParkCard';
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
    {
      name: "Old City (Icherisheher)",
      location: "Central Baku",
      image: "https://images.unsplash.com/photo-1566006033654-c85855f060b9",
      category: "Historical",
      hours: "Open 24/7",
      featured: true,
    },
    {
      name: "Nizami Street",
      location: "Downtown Baku",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
      category: "Cultural",
      hours: "Open 24/7",
      featured: false,
    },
    {
      name: "Azerbaijan Carpet Museum",
      location: "Baku Boulevard",
      image: "https://images.unsplash.com/photo-1564116505324-a78db4d1d7fd",
      category: "Museum",
      hours: "10:00 AM - 6:00 PM",
      featured: false,
    },
    {
      name: "Palace of the Shirvanshahs",
      location: "Old City",
      image: "https://images.unsplash.com/photo-1617456442731-83a1833a73b5",
      category: "Historical",
      hours: "10:00 AM - 6:00 PM",
      featured: false,
    },
    {
      name: "Ateshgah Fire Temple",
      location: "Surakhani Settlement",
      image: "https://images.unsplash.com/photo-1520699049698-acd2fccf7d50",
      category: "Historical",
      hours: "9:00 AM - 5:00 PM",
      featured: false,
    },
  ];

  const parks = [
    {
      name: "Baku Boulevard",
      location: "Baku Bay",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      description: "The Baku Boulevard is a promenade that runs parallel to Baku's seafront. The park is 3.75 km long and was established in 1909. It's a popular place for locals and tourists to walk, enjoy the view of the Caspian Sea, and visit nearby attractions.",
      hours: "Open 24/7",
      facilities: ["Cafes", "Benches", "Bike Rentals", "Children's Play Areas", "Fountains"],
      entryFee: "Free",
      coordinates: {
        lat: 40.3711,
        lng: 49.8372
      }
    },
    {
      name: "Zabitler Park",
      location: "Baku City Center",
      image: "https://images.unsplash.com/photo-1522614595175-5afa2572f07a",
      description: "Zabitler Park, also known as Officers Park, is a beautiful green space in downtown Baku. It features well-maintained gardens, fountains, and is surrounded by historical buildings. The park is an ideal spot for a leisurely stroll or a quick break from city exploration.",
      hours: "Open 24/7",
      facilities: ["Benches", "Fountains", "Walking Paths", "Historical Monuments"],
      entryFee: "Free",
      coordinates: {
        lat: 40.3774,
        lng: 49.8521
      }
    },
    {
      name: "Heydar Aliyev Park",
      location: "Nasimi district",
      image: "https://images.unsplash.com/photo-1464897873711-4738b4500497",
      description: "Named after Azerbaijan's former president, this large park features beautifully landscaped gardens, fountains, and a monument to Heydar Aliyev. It's a popular spot for family gatherings and community events.",
      hours: "7:00 AM - 11:00 PM",
      facilities: ["Children's Playground", "Fountains", "Walking Paths", "Monuments", "Seating Areas"],
      entryFee: "Free",
      coordinates: {
        lat: 40.3943,
        lng: 49.8284
      }
    },
    {
      name: "Dagustu (Highland) Park",
      location: "Uphill from Parliament Avenue",
      image: "https://images.unsplash.com/photo-1526604648377-1433c7c1f5b7",
      description: "Located on a hill overlooking the city, Highland Park offers one of the best panoramic views of Baku. The park features the Alley of Martyrs, a memorial dedicated to those killed during the Black January events and the Nagorno-Karabakh War.",
      hours: "Open 24/7",
      facilities: ["Viewpoints", "Memorials", "Walking Paths", "Benches"],
      entryFee: "Free",
      coordinates: {
        lat: 40.3612,
        lng: 49.8325
      }
    },
    {
      name: "Yasamal Valley Park",
      location: "Yasamal district",
      image: "https://images.unsplash.com/photo-1434978922602-40961d13488b",
      description: "A newer recreational area in Baku featuring modern design elements. This park offers various sports facilities, playgrounds for children, and relaxation areas for adults. It's particularly popular among residents of the nearby neighborhoods.",
      hours: "6:00 AM - 12:00 AM",
      facilities: ["Sports Areas", "Playgrounds", "Jogging Tracks", "Water Features", "Exercise Equipment"],
      entryFee: "Free",
      coordinates: {
        lat: 40.3802,
        lng: 49.8068
      }
    },
    {
      name: "Central Botanical Garden",
      location: "Patamdart Highway",
      image: "https://images.unsplash.com/photo-1444392061186-9fc38f84f726",
      description: "Spanning over 16 hectares, this botanical garden is home to more than 2,500 species of trees and plants from around the world. It's a peaceful retreat from the city's hustle and bustle, perfect for nature lovers and those interested in botany.",
      hours: "9:00 AM - 7:00 PM",
      facilities: ["Greenhouse", "Research Center", "Walking Paths", "Rare Plant Collections", "Picnic Areas"],
      entryFee: "2 AZN",
      coordinates: {
        lat: 40.3483,
        lng: 49.8281
      }
    },
    {
      name: "Tofiq Bahramov Stadium Park",
      location: "Near Ganjlik metro station",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      description: "Surrounding the famous Tofiq Bahramov Stadium, this park area offers sports facilities and green spaces for relaxation. It's popular among joggers and fitness enthusiasts, as well as families with children.",
      hours: "6:00 AM - 10:00 PM",
      facilities: ["Sports Grounds", "Jogging Tracks", "Benches", "Open Areas"],
      entryFee: "Free",
      coordinates: {
        lat: 40.4011,
        lng: 49.8622
      }
    },
    {
      name: "Khagani Garden",
      location: "City Center, near Fountains Square",
      image: "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5",
      description: "A small but charming garden in the heart of the city, named after the 12th-century Azerbaijani poet Khagani Shirvani. It features a statue of the poet and is surrounded by historic buildings. The garden is a popular meeting spot for locals.",
      hours: "Open 24/7",
      facilities: ["Benches", "Historical Monument", "Shade Trees"],
      entryFee: "Free",
      coordinates: {
        lat: 40.3719,
        lng: 49.8371
      }
    }
  ];

  const filteredPlaces = searchQuery 
    ? places.filter(place => 
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        place.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : places;

  const filteredParks = searchQuery 
    ? parks.filter(park => 
        park.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        park.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        park.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : parks;

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
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="historical">Historical</TabsTrigger>
            <TabsTrigger value="cultural">Cultural</TabsTrigger>
            <TabsTrigger value="parks">Parks</TabsTrigger>
            <TabsTrigger value="museums">Museums</TabsTrigger>
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
              {filteredParks.map((park, index) => (
                <ParkCard
                  key={index}
                  name={park.name}
                  location={park.location}
                  image={park.image}
                  description={park.description}
                  hours={park.hours}
                  facilities={park.facilities}
                  entryFee={park.entryFee}
                  coordinates={park.coordinates}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="museums" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPlaces
                .filter(place => place.category === "Museum")
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
