
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
            <span className="text-lg font-bold text-primary">₹{price}</span>
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
    title: "Kudremukha Trek",
    location: "Karnataka, India",
    duration: "2 Days / 1 Night",
    price: 4999,
    image: "https://images.unsplash.com/photo-1580474256381-f98365422d20?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    title: "Coorg Coffee Plantations",
    location: "Karnataka, India",
    duration: "3 Days / 2 Nights",
    price: 7999,
    image: "https://images.unsplash.com/photo-1559888490-7c3c396c8195?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    featured: true
  },
  {
    id: 3,
    title: "Manali Adventure",
    location: "Himachal Pradesh, India",
    duration: "5 Days / 4 Nights",
    price: 12999,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
    rating: 4.7
  },
  {
    id: 4,
    title: "Dudhsagar Falls Trek",
    location: "Goa, India",
    duration: "2 Days / 1 Night",
    price: 3999,
    image: "https://images.unsplash.com/photo-1544914379-806667cd9489?auto=format&fit=crop&w=600&q=80",
    rating: 4.6
  },
  {
    id: 5,
    title: "Kerala Backwaters",
    location: "Kerala, India",
    duration: "4 Days / 3 Nights",
    price: 9999,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80",
    rating: 4.9
  },
  {
    id: 6,
    title: "Mysore Heritage Tour",
    location: "Karnataka, India",
    duration: "3 Days / 2 Nights",
    price: 5999,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
    rating: 4.5
  }
];

const FeaturedTours = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover India with Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the diverse beauty of India with our handpicked selection of extraordinary travel experiences, from serene backwaters to majestic mountains.
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
