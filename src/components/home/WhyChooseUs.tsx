
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Clock, Award } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const features = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Personalized Experience",
    description: "We craft each journey to match your preferences, ensuring a perfect travel experience tailored just for you."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Safety First",
    description: "Your safety is our priority. We follow strict safety protocols and work with trusted local partners worldwide."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Time-Saving Planning",
    description: "Save countless hours of research. Our travel experts handle all the details so you can focus on enjoying your trip."
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Expert Local Guides",
    description: "Experience destinations through the eyes of passionate locals who share authentic insights and hidden gems."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the Prayana difference and see why travelers choose us for their life-changing journeys.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
