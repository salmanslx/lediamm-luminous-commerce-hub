
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Lightbulb, 
  Home, 
  Building2, 
  Car, 
  TreePine, 
  Zap 
} from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      icon: Lightbulb,
      name: 'Smart Bulbs',
      description: 'WiFi-enabled LED bulbs with color changing',
      count: '120+ Products',
      color: 'bg-blue-500',
    },
    {
      icon: Home,
      name: 'Home Lighting',
      description: 'Perfect lighting solutions for your home',
      count: '85+ Products',
      color: 'bg-green-500',
    },
    {
      icon: Building2,
      name: 'Commercial',
      description: 'Professional grade LED for businesses',
      count: '200+ Products',
      color: 'bg-purple-500',
    },
    {
      icon: Car,
      name: 'Automotive',
      description: 'LED lights for cars and motorcycles',
      count: '45+ Products',
      color: 'bg-red-500',
    },
    {
      icon: TreePine,
      name: 'Outdoor',
      description: 'Weather-resistant outdoor LED lighting',
      count: '95+ Products',
      color: 'bg-emerald-500',
    },
    {
      icon: Zap,
      name: 'Strip Lights',
      description: 'Flexible LED strips for creative lighting',
      count: '75+ Products',
      color: 'bg-orange-500',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600">
            Find the perfect LED lighting solution for your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {category.description}
                  </p>
                  <span className="text-sm font-medium text-primary">
                    {category.count}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
