
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Star, Search, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

interface Tour {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  rating: number;
  featured?: boolean;
  categories: string[];
}

const tours: Tour[] = [
  {
    id: 1,
    title: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    duration: "7 Days / 6 Nights",
    price: 1299,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    featured: true,
    categories: ["Beach", "Culture", "Adventure"]
  },
  {
    id: 2,
    title: "Sacred Valley Expedition",
    location: "Peru",
    duration: "10 Days / 9 Nights",
    price: 1899,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    featured: true,
    categories: ["Adventure", "Culture", "Hiking"]
  },
  {
    id: 3,
    title: "Alpine Adventure",
    location: "Switzerland",
    duration: "5 Days / 4 Nights",
    price: 1499,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    categories: ["Mountains", "Adventure", "Hiking"]
  },
  {
    id: 4,
    title: "Egyptian Wonders",
    location: "Egypt",
    duration: "8 Days / 7 Nights",
    price: 1699,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    categories: ["Culture", "History"]
  },
  {
    id: 5,
    title: "Cultural Japan",
    location: "Japan",
    duration: "9 Days / 8 Nights",
    price: 2399,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    categories: ["Culture", "City", "Food"]
  },
  {
    id: 6,
    title: "Amazon Expedition",
    location: "Brazil",
    duration: "6 Days / 5 Nights",
    price: 1599,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    categories: ["Nature", "Adventure", "Wildlife"]
  },
  {
    id: 7,
    title: "Greek Island Hopping",
    location: "Greece",
    duration: "8 Days / 7 Nights",
    price: 1899,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    categories: ["Beach", "Culture", "Food"]
  },
  {
    id: 8,
    title: "Safari Adventure",
    location: "Tanzania",
    duration: "7 Days / 6 Nights",
    price: 2999,
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    categories: ["Wildlife", "Nature", "Adventure"]
  }
];

const categories = ["Beach", "Mountains", "City", "Culture", "Adventure", "History", "Food", "Wildlife", "Nature", "Hiking"];
const locations = ["Bali, Indonesia", "Peru", "Switzerland", "Egypt", "Japan", "Brazil", "Greece", "Tanzania"];
const durations = ["1-3 days", "4-7 days", "8-14 days", "15+ days"];

const TourCard = ({ id, title, location, duration, price, image, rating, featured, categories }: Tour) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-lg group",
      featured && "border-primary"
    )}>
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded">
            Featured
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-white rounded-full px-2 py-1 flex items-center">
          <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="flex items-center">
          <MapPin className="h-4 w-4 mr-1 text-primary" />
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-center mb-4">
          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {categories.map((category, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {category}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-primary">${price}</span>
            <span className="text-sm text-muted-foreground"> / person</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/tours/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Tours = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([1000, 3000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };
  
  const handleLocationChange = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location) 
        : [...prev, location]
    );
  };
  
  const handleDurationChange = (duration: string) => {
    setSelectedDurations(prev => 
      prev.includes(duration) 
        ? prev.filter(d => d !== duration) 
        : [...prev, duration]
    );
  };
  
  const filteredTours = tours.filter(tour => {
    // Search query filter
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tour.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Price range filter
    const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1];
    
    // Categories filter
    const matchesCategories = selectedCategories.length === 0 || 
                              selectedCategories.some(cat => tour.categories.includes(cat));
    
    // Location filter
    const matchesLocation = selectedLocations.length === 0 || 
                            selectedLocations.includes(tour.location);
    
    // Duration filter (simplified)
    const matchesDuration = selectedDurations.length === 0 || 
                            (selectedDurations.includes("1-3 days") && tour.duration.includes("3")) ||
                            (selectedDurations.includes("4-7 days") && (tour.duration.includes("5") || tour.duration.includes("6") || tour.duration.includes("7"))) ||
                            (selectedDurations.includes("8-14 days") && (tour.duration.includes("9") || tour.duration.includes("10"))) ||
                            (selectedDurations.includes("15+ days"));
    
    return matchesSearch && matchesPrice && matchesCategories && matchesLocation && matchesDuration;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1920&q=80)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="container-custom relative z-10 py-20 md:py-28">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Tours</h1>
            <p className="text-xl mb-0 text-gray-100">Discover life-changing adventures across the globe</p>
          </div>
        </div>
      </div>
      
      {/* Search and Filter Bar */}
      <div className="sticky top-16 z-30 bg-white shadow-md py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="text"
                placeholder="Search tours or destinations..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5" />
              Filters
            </Button>
          </div>
          
          {/* Expandable Filters */}
          <div className={cn(
            "overflow-hidden transition-all duration-300",
            showFilters ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="px-2">
                    <Slider 
                      defaultValue={[1000, 3000]}
                      min={500}
                      max={5000}
                      step={100}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                {/* Categories */}
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.slice(0, 8).map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`category-${category}`} 
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => handleCategoryChange(category)}
                        />
                        <label htmlFor={`category-${category}`} className="text-sm">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Combined Locations & Durations */}
                <div>
                  <div>
                    <h3 className="font-medium mb-3">Locations</h3>
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {locations.slice(0, 4).map((location) => (
                        <div key={location} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`location-${location}`} 
                            checked={selectedLocations.includes(location)}
                            onCheckedChange={() => handleLocationChange(location)}
                          />
                          <label htmlFor={`location-${location}`} className="text-sm">
                            {location}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Duration</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {durations.map((duration) => (
                        <div key={duration} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`duration-${duration}`} 
                            checked={selectedDurations.includes(duration)}
                            onCheckedChange={() => handleDurationChange(duration)}
                          />
                          <label htmlFor={`duration-${duration}`} className="text-sm">
                            {duration}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <Button 
                  variant="outline" 
                  className="mr-2"
                  onClick={() => {
                    setSearchQuery('');
                    setPriceRange([1000, 3000]);
                    setSelectedCategories([]);
                    setSelectedLocations([]);
                    setSelectedDurations([]);
                  }}
                >
                  Clear All
                </Button>
                <Button onClick={() => setShowFilters(false)}>Apply Filters</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tour Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              {filteredTours.length} {filteredTours.length === 1 ? 'Tour' : 'Tours'} Available
            </h2>
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-gray-600">Sort by:</label>
              <select 
                id="sort" 
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} {...tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No tours found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setPriceRange([1000, 3000]);
                  setSelectedCategories([]);
                  setSelectedLocations([]);
                  setSelectedDurations([]);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our travel experts can design a custom journey tailored specifically to your preferences and interests.
          </p>
          <Button size="lg" className="btn-gradient">Request Custom Tour</Button>
        </div>
      </section>
    </Layout>
  );
};

export default Tours;
