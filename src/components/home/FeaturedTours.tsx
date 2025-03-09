
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TourCardProps {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  rating: number;
  featured?: boolean;
}

const TourCard = ({ id, title, location, duration, price, image, rating, featured }: TourCardProps) => {
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

const featuredTours = [
  {
    id: 1,
    title: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    duration: "7 Days / 6 Nights",
    price: 1299,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    title: "Sacred Valley Expedition",
    location: "Peru",
    duration: "10 Days / 9 Nights",
    price: 1899,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    featured: true
  },
  {
    id: 3,
    title: "Alpine Adventure",
    location: "Switzerland",
    duration: "5 Days / 4 Nights",
    price: 1499,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
    rating: 4.7
  },
  {
    id: 4,
    title: "Egyptian Wonders",
    location: "Egypt",
    duration: "8 Days / 7 Nights",
    price: 1699,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    rating: 4.6
  },
  {
    id: 5,
    title: "Cultural Japan",
    location: "Japan",
    duration: "9 Days / 8 Nights",
    price: 2399,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    rating: 4.9
  },
  {
    id: 6,
    title: "Amazon Expedition",
    location: "Brazil",
    duration: "6 Days / 5 Nights",
    price: 1599,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
    rating: 4.5
  }
];

const FeaturedTours = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Tours</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the most extraordinary travel experiences, each designed to create unforgettable memories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/tours">View All Tours</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
