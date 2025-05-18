
import React from 'react';
import { Building, Phone, MapPin, Navigation } from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/Navigation/BottomNav';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description?: string;
  address?: string;
  phone?: string;
  hours?: string;
  emergency?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, address, phone, hours, emergency }) => {
  return (
    <Card className={emergency ? "border-2 border-red-500" : ""}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          {emergency && <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>}
          {title}
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {address && (
          <div className="flex items-start mb-2">
            <MapPin size={16} className="mr-2 mt-1 text-baku-primary flex-shrink-0" />
            <span className="text-sm">{address}</span>
          </div>
        )}
        {phone && (
          <div className="flex items-center mb-2">
            <Phone size={16} className="mr-2 text-baku-primary flex-shrink-0" />
            <span className="text-sm">{phone}</span>
          </div>
        )}
        {hours && (
          <div className="text-xs text-gray-500 mt-1">
            Working hours: {hours}
          </div>
        )}
        {/* Always show Get Directions button for emergency services, or if there's an address */}
        {(emergency || address) && (
          <Button variant="outline" size="sm" className="mt-3 w-full bg-gray-50 hover:bg-gray-100">
            <Navigation size={14} className="mr-1" />
            Get Directions
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <div className="pb-16">
      <Header title="Local Services" subtitle="Essential services in Baku" />
      
      <Tabs defaultValue="emergency" className="w-full">
        <div className="p-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
            <TabsTrigger value="tourist">Tourist Info</TabsTrigger>
            <TabsTrigger value="telecom">Telecom</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="emergency" className="p-4 pt-0 space-y-4">
          <ServiceCard
            title="Emergency Services"
            description="Unified emergency number"
            phone="112"
            emergency={true}
          />
          
          <ServiceCard
            title="Police Department"
            phone="102"
            address="28 May Street, Baku"
            emergency={true}
          />
          
          <ServiceCard
            title="Medical Emergency"
            phone="103"
            emergency={true}
          />
          
          <ServiceCard
            title="Central Hospital"
            address="76 Parliment Ave, Baku"
            phone="+994 12 492 1042"
            hours="24/7"
          />
          
          <ServiceCard
            title="US Embassy"
            address="111 Azadlig Avenue, Baku"
            phone="+994 12 488 3300"
            hours="Mon-Fri: 9:00 AM - 5:00 PM"
          />
          
          <ServiceCard
            title="British Embassy"
            address="45 Khagani Street, Baku"
            phone="+994 12 437 7878"
            hours="Mon-Thu: 8:30 AM - 5:00 PM, Fri: 8:30 AM - 1:00 PM"
          />
        </TabsContent>

        <TabsContent value="tourist" className="p-4 pt-0 space-y-4">
          <ServiceCard
            title="Tourist Information Center"
            address="Fountain Square, Baku"
            phone="+994 12 498 7262"
            hours="Daily: 9:00 AM - 7:00 PM"
          />
          
          <ServiceCard
            title="Baku Tourism Office"
            address="5 Nizami Street, Baku"
            phone="+994 12 493 0533"
            hours="Mon-Fri: 9:00 AM - 6:00 PM"
          />
          
          <div className="bg-baku-light p-4 rounded-xl">
            <h3 className="font-medium flex items-center">
              <Building size={18} className="mr-2 text-baku-primary" />
              Tourist Support Hotline
            </h3>
            <p className="text-sm mt-2">
              Dial 157 from any local number for tourism-related questions and assistance in English.
            </p>
            <div className="mt-3 p-3 bg-white rounded-lg text-sm">
              <p className="font-medium">Common phrases in Azerbaijani:</p>
              <div className="mt-2 space-y-1">
                <div className="flex justify-between">
                  <span>Hello</span>
                  <span className="font-medium">Salam</span>
                </div>
                <div className="flex justify-between">
                  <span>Thank you</span>
                  <span className="font-medium">Təşəkkür edirəm</span>
                </div>
                <div className="flex justify-between">
                  <span>Yes / No</span>
                  <span className="font-medium">Bəli / Xeyr</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="telecom" className="p-4 pt-0 space-y-4">
          <ServiceCard
            title="Azercell Office"
            description="Mobile operator"
            address="Fountain Square, Baku"
            phone="+994 12 496 7090"
            hours="Daily: 9:00 AM - 9:00 PM"
          />
          
          <ServiceCard
            title="Bakcell Store"
            description="Mobile operator"
            address="28 May Street, Baku"
            phone="+994 12 498 8980"
            hours="Daily: 10:00 AM - 8:00 PM"
          />
          
          <div className="bg-baku-light p-4 rounded-xl">
            <h3 className="font-medium mb-2">SIM Card Information</h3>
            <p className="text-sm">
              Tourists can purchase SIM cards from the following providers with their passport:
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex justify-between p-2 bg-white rounded-lg">
                <span>Azercell Tourist Package</span>
                <span className="font-medium">15 AZN</span>
              </li>
              <li className="flex justify-between p-2 bg-white rounded-lg">
                <span>Bakcell Visitor SIM</span>
                <span className="font-medium">10 AZN</span>
              </li>
              <li className="flex justify-between p-2 bg-white rounded-lg">
                <span>Nar Mobile Tourist</span>
                <span className="font-medium">12 AZN</span>
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
      
      <BottomNav activeTab="services" />
    </div>
  );
};

export default Services;
