
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Award, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative min-h-[700px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white animate-fade-in space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  <Zap className="w-4 h-4 text-accent" />
                  Professional LED Solutions
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Illuminate Your
                  <span className="block text-transparent bg-gradient-to-r from-accent to-yellow-300 bg-clip-text">
                    Future
                  </span>
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                  Transform any space with our premium LED lighting technology. Energy-efficient, 
                  long-lasting, and designed for the modern world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold group shadow-xl">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-white/80">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm text-white/80">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-white/80">Support</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Image */}
            <div className="relative animate-fade-in">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Premium LED Lighting"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  
                  {/* Floating Cards */}
                  <div className="absolute -top-4 -left-4 bg-accent text-primary rounded-2xl p-4 shadow-xl">
                    <Shield className="w-6 h-6 mb-2" />
                    <div className="text-sm font-semibold">5 Year</div>
                    <div className="text-xs">Warranty</div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-white text-primary rounded-2xl p-4 shadow-xl">
                    <Award className="w-6 h-6 mb-2" />
                    <div className="text-sm font-semibold">Premium</div>
                    <div className="text-xs">Quality</div>
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
