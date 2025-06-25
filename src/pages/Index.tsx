
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProductShowcase from '@/components/ProductShowcase';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProductShowcase />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
