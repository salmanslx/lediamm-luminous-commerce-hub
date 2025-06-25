
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
      bgColor: 'bg-blue-50',
    },
    {
      icon: Shield,
      title: '5-Year Warranty',
      description: 'Comprehensive warranty on all products',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Expert technical support anytime',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Industry-leading LED technology',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Up to 90% energy savings',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable and recyclable materials',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Lediamm?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best LED lighting experience with unmatched quality and service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
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
