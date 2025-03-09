
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 min-h-[80vh] flex items-center">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Plan Your Journey With Us
          </h1>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl">
            Discover breathtaking destinations and create unforgettable memories with our expert-crafted travel experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="btn-gradient">Explore Tours</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Search Box */}
      <div className="relative z-10 container-custom -mt-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-gray-800 font-semibold mb-4 text-xl">Find Your Perfect Trip</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
              <select className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
                <option value="">Select Destination</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="paris">Paris, France</option>
                <option value="tokyo">Tokyo, Japan</option>
                <option value="peru">Peru</option>
                <option value="egypt">Egypt</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <select className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
                <option value="">Select Duration</option>
                <option value="weekend">Weekend Getaway (1-3 days)</option>
                <option value="week">Week-long Trip (4-7 days)</option>
                <option value="twoweeks">Extended Trip (8-14 days)</option>
                <option value="long">Long Journey (15+ days)</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full btn-gradient">Search</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
