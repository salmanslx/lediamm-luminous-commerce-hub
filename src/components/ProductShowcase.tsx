
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const ProductShowcase = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Premium LED Strip Light Pro',
      price: 89.99,
      originalPrice: 119.99,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
      reviews: 124,
      category: 'Strip Lights',
      isNew: true,
      isBestseller: true,
    },
    {
      id: '2',
      name: 'Smart RGB Bulb Series X',
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.6,
      reviews: 89,
      category: 'Smart Bulbs',
      isBestseller: true,
    },
    {
      id: '3',
      name: 'Industrial LED Panel 40W',
      price: 156.99,
      image: 'https://images.unsplash.com/photo-1573160103600-32415bf69e85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.9,
      reviews: 67,
      category: 'Panel Lights',
    },
    {
      id: '4',
      name: 'Outdoor Flood Light Ultra',
      price: 78.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.7,
      reviews: 156,
      category: 'Flood Lights',
    },
  ];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-accent/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Featured Products
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Premium LED Products
            <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
              Engineered for Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular LED lighting solutions, featuring cutting-edge technology, 
            exceptional quality, and stunning design for every application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
