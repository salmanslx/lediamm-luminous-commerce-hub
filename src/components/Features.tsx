
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Truck, 
  Shield, 
  Headphones, 
  Award,
  Zap,
  Leaf
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free delivery on orders over $75',
      color: 'text-blue-600',
      bgColor: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      title: '5-Year Warranty',
      description: 'Comprehensive warranty on all products',
      color: 'text-green-600',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Expert technical support anytime',
      color: 'text-purple-600',
      bgColor: 'from-purple-500 to-purple-600',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Industry-leading LED technology',
      color: 'text-orange-600',
      bgColor: 'from-orange-500 to-orange-600',
    },
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Up to 90% energy savings',
      color: 'text-yellow-600',
      bgColor: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable and recyclable materials',
      color: 'text-emerald-600',
      bgColor: 'from-emerald-500 to-emerald-600',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #003366 25%, transparent 25%), linear-gradient(-45deg, #003366 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #003366 75%), linear-gradient(-45deg, transparent 75%, #003366 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Lediamm?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to providing the best LED lighting experience with unmatched quality, 
            innovative technology, and exceptional customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group hover:scale-105 relative overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
