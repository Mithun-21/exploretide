
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  tours: number;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Coorg",
    location: "Karnataka, India",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
    tours: 8
  },
  {
    id: 2,
    name: "Munnar",
    location: "Kerala, India",
    image: "https://images.unsplash.com/photo-1609948543931-f658d86373fc?auto=format&fit=crop&w=600&q=80",
    tours: 10
  },
  {
    id: 3,
    name: "Manali",
    location: "Himachal Pradesh, India",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
    tours: 12
  },
  {
    id: 4,
    name: "Goa",
    location: "India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80",
    tours: 15
  }
];

const PopularDestinations = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Indian Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the most beautiful and sought-after destinations across India, from serene hill stations to vibrant beaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card 
              key={destination.id}
              className="overflow-hidden group cursor-pointer border-none shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-72">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <CardContent className="absolute bottom-0 left-0 right-0 text-white p-6">
                  <h3 className="font-bold text-xl mb-1">{destination.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                    <span className="text-sm">{destination.tours} tours</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
