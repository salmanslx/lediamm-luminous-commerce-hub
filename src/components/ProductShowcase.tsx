
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured LED Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular LED lighting solutions, engineered for performance and designed for beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
