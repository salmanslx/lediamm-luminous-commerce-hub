
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
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Home,
      name: 'Home Lighting',
      description: 'Perfect lighting solutions for your home',
      count: '85+ Products',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Building2,
      name: 'Commercial',
      description: 'Professional grade LED for businesses',
      count: '200+ Products',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Car,
      name: 'Automotive',
      description: 'LED lights for cars and motorcycles',
      count: '45+ Products',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: TreePine,
      name: 'Outdoor',
      description: 'Weather-resistant outdoor LED lighting',
      count: '95+ Products',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Zap,
      name: 'Strip Lights',
      description: 'Flexible LED strips for creative lighting',
      count: '75+ Products',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #003366 2px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
            Browse Categories
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              LED Solution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of LED lighting products designed for every space and need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 shadow-lg hover:scale-105 bg-white relative overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 text-center relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-2">
                    {category.count}
                  </div>
                  
                  {/* Hover Arrow */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="inline-flex items-center text-primary font-medium">
                      Explore Collection
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
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
