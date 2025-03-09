
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  categories: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Must-Visit Hidden Gems in Bali",
    excerpt: "Discover the less-traveled paths of Bali that offer authentic experiences away from the tourist crowds.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur at libero ut lacus facilisis congue non nec sem...",
    author: "Elena Rodriguez",
    date: "June 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
    categories: ["Destinations", "Travel Tips"]
  },
  {
    id: 2,
    title: "How to Travel Sustainably in 2023",
    excerpt: "Learn practical tips for reducing your environmental impact while still enjoying incredible travel experiences.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur at libero ut lacus facilisis congue non nec sem...",
    author: "David Chen",
    date: "May 22, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
    categories: ["Sustainable Travel", "Travel Tips"]
  },
  {
    id: 3,
    title: "A Culinary Journey Through Japan",
    excerpt: "Explore Japan's diverse food culture from street food to Michelin-starred restaurants and everything in between.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur at libero ut lacus facilisis congue non nec sem...",
    author: "Sarah Johnson",
    date: "April 10, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    categories: ["Food", "Destinations"]
  },
  {
    id: 4,
    title: "The Ultimate Packing List for Long-Term Travel",
    excerpt: "Everything you need to pack for a months-long journey, from essential gear to digital nomad tools.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur at libero ut lacus facilisis congue non nec sem...",
    author: "Mohammed Al-Fayed",
    date: "March 18, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    categories: ["Travel Tips", "Gear"]
  },
  {
    id: 5,
    title: "Top Wildlife Safaris in Africa for 2023",
    excerpt: "The most breathtaking wildlife encounters across Africa's diverse national parks and conservation areas.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur at libero ut lacus facilisis congue non nec sem...",
    author: "Elena Rodriguez",
    date: "February 5, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    categories: ["Destinations", "Wildlife"]
  },
  {
    id: 6,
    title: "Budget Travel: How to See the World for Less",
    excerpt: "Expert strategies for maximizing your travel experiences while minimizing costs.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur at libero ut lacus facilisis congue non nec sem...",
    author: "David Chen",
    date: "January 20, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
    categories: ["Budget Travel", "Travel Tips"]
  }
];

const BlogCard = ({ id, title, excerpt, author, date, readTime, image, categories }: BlogPost) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 md:h-60">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {categories.map((category, index) => (
            <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              {category}
            </span>
          ))}
        </div>
        <CardTitle className="text-xl hover:text-primary transition-colors">
          <Link to={`/blog/${id}`}>{title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700 mb-4">
          {excerpt}
        </CardDescription>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <span>{readTime}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to={`/blog/${id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const categories = ["Destinations", "Travel Tips", "Food", "Culture", "Sustainable Travel", "Budget Travel", "Gear", "Wildlife"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || post.categories.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="container-custom relative z-10 py-20 md:py-28">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Blog</h1>
            <p className="text-xl mb-0 text-gray-100">Stories and insights from our journeys around the globe</p>
          </div>
        </div>
      </div>
      
      {/* Search and Category Bar */}
      <div className="sticky top-16 z-30 bg-white shadow-md py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search articles..."
                className="w-full pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <Button 
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All
            </Button>
            {categories.map((category) => (
              <Button 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or category selection</p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Travel Inspiration</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for travel tips, destination guides, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow"
              required
            />
            <Button className="btn-gradient whitespace-nowrap">Subscribe</Button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
