'use client';

import { useState } from 'react';
import ServiceCard from './ServiceCard';

export default function ServiceGrid({ searchTerm, selectedCategory }) {
  const [services] = useState([
    {
      id: 1,
      name: 'Web Development',
      description: 'Build responsive and modern websites with cutting-edge technologies',
      icon: 'ri-code-s-slash-line',
      category: 'development',
      price: '$2,500',
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Create native and cross-platform mobile applications',
      icon: 'ri-smartphone-line',
      category: 'development',
      price: '$3,200',
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      name: 'UI/UX Design',
      description: 'Design intuitive and beautiful user interfaces and experiences',
      icon: 'ri-palette-line',
      category: 'design',
      price: '$1,800',
      rating: 4.9,
      reviews: 156
    },
    {
      id: 4,
      name: 'Digital Marketing',
      description: 'Boost your online presence with strategic marketing campaigns',
      icon: 'ri-megaphone-line',
      category: 'marketing',
      price: '$1,500',
      rating: 4.7,
      reviews: 203
    },
    {
      id: 5,
      name: 'SEO Optimization',
      description: 'Improve your search engine rankings and organic traffic',
      icon: 'ri-search-eye-line',
      category: 'marketing',
      price: '$800',
      rating: 4.6,
      reviews: 178
    },
    {
      id: 6,
      name: 'Cloud Solutions',
      description: 'Deploy and manage applications on cloud platforms',
      icon: 'ri-cloud-line',
      category: 'cloud',
      price: '$2,000',
      rating: 4.8,
      reviews: 92
    },
    {
      id: 7,
      name: 'Data Analytics',
      description: 'Turn your data into actionable insights and reports',
      icon: 'ri-bar-chart-line',
      category: 'analytics',
      price: '$2,200',
      rating: 4.7,
      reviews: 114
    },
    {
      id: 8,
      name: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security measures',
      icon: 'ri-shield-check-line',
      category: 'security',
      price: '$2,800',
      rating: 4.9,
      reviews: 73
    },
    {
      id: 9,
      name: 'Brand Identity',
      description: 'Create memorable logos and brand guidelines',
      icon: 'ri-brush-line',
      category: 'design',
      price: '$1,200',
      rating: 4.8,
      reviews: 145
    },
    {
      id: 10,
      name: 'E-commerce Solutions',
      description: 'Build powerful online stores and payment systems',
      icon: 'ri-shopping-cart-line',
      category: 'development',
      price: '$3,500',
      rating: 4.9,
      reviews: 98
    },
    {
      id: 11,
      name: 'Social Media Management',
      description: 'Manage and grow your social media presence',
      icon: 'ri-share-line',
      category: 'marketing',
      price: '$900',
      rating: 4.5,
      reviews: 167
    },
    {
      id: 12,
      name: 'DevOps Services',
      description: 'Streamline development and deployment processes',
      icon: 'ri-git-merge-line',
      category: 'cloud',
      price: '$2,600',
      rating: 4.8,
      reviews: 85
    }
  ]);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <style jsx>{`
        .service-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (min-width: 1280px) {
          .service-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
      
      <div className="service-grid">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </>
  );
} 