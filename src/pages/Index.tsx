
import React from 'react';
import BottomNav from '@/components/Navigation/BottomNav';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { Map, Landmark, Building, Sun, Currency } from 'lucide-react';
import LiveDateTime from '@/components/LiveDateTime';

const Index = () => {
  return (
    <div className="pb-16">
      <Hero 
        title="Discover Baku"
        subtitle="Your comprehensive guide to Azerbaijan's capital"
        image="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
        height="lg"
      />
      
      <section className="p-4">
        <h2 className="text-xl font-bold mb-4 text-baku-dark">Explore Baku</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeatureCard 
            title="Public Transport"
            description="Navigate Baku with bus & metro routes"
            icon={<Map size={24} color="white" />}
            to="/transport"
            color="primary"
          />
          
          <FeatureCard 
            title="Places to Visit"
            description="Discover historical sites & hidden gems"
            icon={<Landmark size={24} color="white" />}
            to="/places"
            color="secondary"
          />
          
          <FeatureCard 
            title="Local Services"
            description="Emergency contacts & tourist information"
            icon={<Building size={24} color="white" />}
            to="/services"
            color="accent"
          />
          
          <FeatureCard 
            title="Weather Forecast"
            description="5-day weather forecast for Baku"
            icon={<Sun size={24} color="white" />}
            to="/weather"
            color="muted"
          />
        </div>
      </section>

      <section className="p-4 mt-4">
        <LiveDateTime />
      </section>

      <section className="p-4 mt-4">
        <div className="bg-baku-primary/10 p-4 rounded-xl">
          <h2 className="text-xl font-bold mb-2 text-baku-primary">Baku Travel Tips</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="bg-baku-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 mt-1">1</span>
              <div>
                <p className="font-medium">BakuCard for transport</p>
                <p className="text-sm text-gray-600">Purchase a BakuCard for easier metro and bus travel</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-baku-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 mt-1">2</span>
              <div>
                <p className="font-medium">Download offline maps</p>
                <p className="text-sm text-gray-600">Save maps for offline use when exploring the city</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-baku-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 mt-1">3</span>
              <div>
                <p className="font-medium">Currency exchange</p>
                <p className="text-sm text-gray-600">Exchange money at official banks for better rates</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="p-4 mt-4">
        <h2 className="text-xl font-bold mb-4 text-baku-dark">Today in Baku</h2>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4 bg-baku-light flex justify-between items-center">
            <div>
              <p className="text-sm text-baku-dark">Today's Weather</p>
              <p className="text-xl font-bold text-baku-primary">24°C</p>
              <p className="text-sm">Sunny, light breeze</p>
            </div>
            <Sun size={40} className="text-baku-primary" />
          </div>
          <div className="p-4">
            <p className="font-medium mb-2">Local Currency</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Currency size={20} className="text-baku-secondary mr-2" />
                <span>1 USD = 1.70 AZN</span>
              </div>
              <div className="flex items-center">
                <Currency size={20} className="text-baku-secondary mr-2" />
                <span>1 EUR = 1.85 AZN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomNav activeTab="home" />
    </div>
  );
};

export default Index;
