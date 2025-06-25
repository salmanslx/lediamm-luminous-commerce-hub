
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Lightbulb, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Lediamm</h3>
                <p className="text-sm opacity-80">Premium LED Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of premium LED lighting solutions with cutting-edge technology and exceptional quality.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-secondary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-secondary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-secondary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-secondary">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-accent transition-colors">Products</a></li>
              <li><a href="#categories" className="text-gray-300 hover:text-accent transition-colors">Categories</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Warranty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                <span className="text-gray-300">info@lediamm.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-accent" />
                <span className="text-gray-300">123 LED Street, Light City, LC 12345</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">Subscribe to Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button className="bg-accent hover:bg-accent/90 text-primary rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Lediamm. All rights reserved. | 
            <a href="#" className="text-accent hover:underline ml-1">Privacy Policy</a> | 
            <a href="#" className="text-accent hover:underline ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
