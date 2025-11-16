'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ServiceGrid from '../../components/ServiceGrid';
import CategoryFilter from '../../components/CategoryFilter';
import Footer from '../../components/Footer';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-neutral-muted text-text-base">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 mt-10">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">Our Services</h1>
          <p className="text-text-muted text-lg max-w-3xl mx-auto">
            Discover our comprehensive collection of digital services designed to enhance your business and drive growth. From web development to digital marketing, we have the expertise to help you succeed.
          </p>
        </div>
        
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
        
        <ServiceGrid searchTerm={searchTerm} selectedCategory={selectedCategory} />
      </main>
      
      <Footer />
    </div>
  );
}