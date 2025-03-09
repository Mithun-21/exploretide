
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedTours from '@/components/home/FeaturedTours';
import PopularDestinations from '@/components/home/PopularDestinations';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <PopularDestinations />
      <FeaturedTours />
      <WhyChooseUs />
      
      {/* Call to Action Section */}
      <section className="section-padding bg-primary/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for an Unforgettable Adventure?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Start planning your dream journey today and create memories that will last a lifetime.
          </p>
          <Button size="lg" className="btn-gradient">Start Planning</Button>
        </div>
      </section>
      
      <Testimonials />
      
      {/* Newsletter Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Travel Inspiration</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for exclusive deals, travel tips, and destination guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <Button className="btn-gradient whitespace-nowrap">Subscribe Now</Button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
