
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our tours or need help planning your trip? Reach out to us and our travel experts will be happy to assist you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tour Inquiry"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="I'm interested in booking a tour..."
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full btn-gradient">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Our Location</h3>
                  <p className="text-gray-600">123 Tourism Street, Bangalore, Karnataka, India - 560001</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Email Us</h3>
                  <p className="text-gray-600">info@prayana.com</p>
                  <p className="text-gray-600">support@prayana.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Call Us</h3>
                  <p className="text-gray-600">+91 9876543210</p>
                  <p className="text-gray-600">+91 8765432109</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
                  <p className="text-gray-600">Saturday: 10 AM - 4 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Find Us Here</h2>
            <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Google Maps will be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
