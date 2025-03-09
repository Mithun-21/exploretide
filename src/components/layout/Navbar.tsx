
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Tours', href: '/tours' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-gradient">Prayana</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-gray-700 hover:text-primary transition-colors font-medium",
                  location.pathname === link.href && "text-primary font-semibold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button className="btn-gradient">Book Now</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isSearchOpen ? 'max-h-20 opacity-100 mt-4' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search destinations, tours..."
              className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="rounded-l-none">Search</Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col space-y-4 pt-2 pb-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1",
                  location.pathname === link.href && "text-primary font-semibold"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="btn-gradient mt-2">Book Now</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
