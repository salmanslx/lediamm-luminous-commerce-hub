
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Search, 
  Menu, 
  X
} from 'lucide-react';
import CartSidebar from './CartSidebar';
import WishlistSidebar from './WishlistSidebar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <img 
                src="/lovable-uploads/6243c6e8-1deb-4665-b84e-de767e92b14c.png" 
                alt="Lediamm Logo" 
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-primary">Lediamm</div>
              <div className="text-xs text-gray-500 -mt-1">LED Solutions</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#products" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden xl:flex items-center bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl px-6 py-3 w-96 group">
            <Search className="w-5 h-5 text-gray-400 mr-3 group-hover:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search premium LED products..."
              className="bg-transparent outline-none flex-1 text-sm placeholder-gray-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hidden md:flex hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5 mr-2" />
              Account
            </Button>
            
            {/* Wishlist Sidebar */}
            <WishlistSidebar />

            {/* Cart Sidebar */}
            <CartSidebar />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors font-medium py-2">Home</a>
              <a href="#products" className="text-gray-700 hover:text-primary transition-colors font-medium py-2">Products</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium py-2">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium py-2">Contact</a>
              <div className="pt-4 border-t">
                <Button variant="outline" size="sm" className="w-full mb-2">
                  <User className="w-4 h-4 mr-2" />
                  Account
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
