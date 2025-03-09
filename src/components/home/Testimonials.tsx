
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Our Bali trip was absolutely magical! The itinerary was perfectly balanced with adventure and relaxation. Our guide was knowledgeable and friendly, making the experience even more memorable."
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The Peru expedition exceeded all my expectations. From Machu Picchu to the local cuisines, everything was meticulously planned. I've already booked my next tour with Prayana!"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 4,
    text: "Japan has always been on my bucket list, and Prayana made it a dream come true. The attention to detail and cultural experiences were outstanding. Highly recommend!"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "My family's trip to Egypt was unforgettable. The historical sites were breathtaking, and our guide made learning about ancient history fun even for our kids."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read authentic reviews from travelers who have experienced our curated journeys around the world.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="h-20 w-20 rounded-full object-cover mb-4 border-2 border-primary"
                        />
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-gray-500 mb-2">{testimonial.location}</p>
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={cn(
                                "h-5 w-5", 
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              )} 
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 italic">"{testimonial.text}"</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={cn(
                  "w-3 h-3 p-0 rounded-full",
                  index === activeIndex ? "bg-primary" : "bg-gray-300"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
