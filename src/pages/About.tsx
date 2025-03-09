
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Prayana</h1>
            <p className="text-xl mb-0 text-gray-100">Creating unforgettable travel experiences since 2010</p>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Prayana was born from a passion for authentic travel experiences and a desire to share the world's most remarkable destinations with fellow adventurers. Our journey began in 2010 when our founders, seasoned travelers themselves, recognized the need for travel experiences that went beyond the typical tourist paths.
              </p>
              <p className="text-gray-700 mb-4">
                The name "Prayana" derives from the Sanskrit word for "journey," reflecting our philosophy that travel is as much about the inner transformation as it is about exploring external landscapes. Since our humble beginnings, we've grown into a team of dedicated travel experts, local guides, and logistical wizards who craft journeys that connect travelers to the heart of each destination.
              </p>
              <p className="text-gray-700">
                Over the years, we've had the privilege of guiding thousands of travelers through life-changing experiences across all seven continents. Each journey we create is infused with our core values of authenticity, sustainability, and transformative experiences.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80" 
                alt="Prayana team exploring" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-ocean p-4 rounded-lg shadow-lg">
                <p className="text-white font-bold text-lg">12+ Years</p>
                <p className="text-white text-sm">Creating Memories</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're guided by a clear purpose and ambitious goals for the future of travel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-ocean">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To create transformative travel experiences that connect people to authentic cultures, pristine natural environments, and their own sense of wonder and discovery.
              </p>
              <p className="text-gray-700">
                We strive to design journeys that benefit local communities, preserve cultural heritage, and protect the natural environments we visit, ensuring sustainable tourism practices that enrich both travelers and destinations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-forest">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To be the world's most trusted creator of transformative travel experiences, known for exceptional quality, sustainability leadership, and unwavering commitment to authentic cultural exchange.
              </p>
              <p className="text-gray-700">
                We envision a world where travel serves as a force for good, broadening perspectives, supporting local communities, and fostering global understanding and respect.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of travel enthusiasts brings together expertise from across the globe to craft your perfect journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Elena Rodriguez",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              },
              {
                name: "David Chen",
                role: "Head of Operations",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
              },
              {
                name: "Sarah Johnson",
                role: "Senior Travel Designer",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                name: "Mohammed Al-Fayed",
                role: "Head of Guides",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=600&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide every journey we create and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "We believe in travel experiences that reflect the true essence of a destination, connecting travelers with local cultures, traditions, and people."
              },
              {
                title: "Sustainability",
                description: "We are committed to environmentally responsible travel that respects and benefits local communities while preserving natural and cultural heritage."
              },
              {
                title: "Excellence",
                description: "We strive for the highest standards in every aspect of our journeys, from meticulous planning to exceptional in-destination service and support."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us on an Unforgettable Journey</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Experience the Prayana difference for yourself. Let's create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="btn-gradient">Explore Our Tours</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
