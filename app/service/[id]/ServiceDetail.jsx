
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ServiceDetail({ serviceId }) {
  const [selectedPlan, setSelectedPlan] = useState('basic');

  const services = {
    '1': {
      name: 'Web Development',
      description: 'Build responsive and modern websites with cutting-edge technologies',
      longDescription: 'Our web development service provides comprehensive solutions for creating stunning, responsive websites that drive results. We use modern frameworks like React, Next.js, and Vue.js to build fast, scalable applications that work seamlessly across all devices.',
      icon: 'ri-code-s-slash-line',
      category: 'development',
      features: [
        'Responsive Design',
        'Modern JavaScript Frameworks',
        'Performance Optimization',
        'SEO-Friendly Code',
        'Cross-Browser Compatibility',
        'Mobile-First Approach'
      ],
      plans: {
        basic: {
          name: 'Basic',
          price: '$1,500',
          duration: '2-3 weeks',
          features: [
            'Up to 5 pages',
            'Responsive design',
            'Basic SEO setup',
            'Contact form',
            '1 month support'
          ]
        },
        professional: {
          name: 'Professional',
          price: '$2,500',
          duration: '3-4 weeks',
          features: [
            'Up to 10 pages',
            'Advanced animations',
            'CMS integration',
            'Advanced SEO',
            'Analytics setup',
            '3 months support'
          ]
        },
        enterprise: {
          name: 'Enterprise',
          price: '$4,500',
          duration: '4-6 weeks',
          features: [
            'Unlimited pages',
            'Custom functionality',
            'E-commerce integration',
            'Advanced security',
            'Performance optimization',
            '6 months support'
          ]
        }
      },
      rating: 4.9,
      reviews: 127,
      deliveryTime: '2-6 weeks',
      revisions: 'Unlimited'
    },
    '2': {
      name: 'Mobile App Development',
      description: 'Create native and cross-platform mobile applications',
      longDescription: 'Transform your ideas into powerful mobile applications with our expert development team. We specialize in both native iOS/Android development and cross-platform solutions using React Native and Flutter.',
      icon: 'ri-smartphone-line',
      category: 'development',
      features: [
        'Native iOS & Android',
        'Cross-Platform Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Third-party Integrations'
      ],
      plans: {
        basic: {
          name: 'Basic',
          price: '$2,200',
          duration: '4-6 weeks',
          features: [
            'Single platform app',
            'Basic UI/UX design',
            'Core functionality',
            'App store submission',
            '2 months support'
          ]
        },
        professional: {
          name: 'Professional',
          price: '$3,500',
          duration: '6-8 weeks',
          features: [
            'Cross-platform app',
            'Custom UI/UX design',
            'API integration',
            'Push notifications',
            '6 months support'
          ]
        },
        enterprise: {
          name: 'Enterprise',
          price: '$7,000',
          duration: '10-12 weeks',
          features: [
            'All platforms',
            'Advanced features',
            'Backend integration',
            'Analytics',
            '12 months support'
          ]
        }
      },
      rating: 4.8,
      reviews: 89,
      deliveryTime: '4-12 weeks',
      revisions: 'Unlimited'
    },
    '3': {
      name: 'UI/UX Design',
      description: 'Create native and cross-platform mobile applications',
      longDescription: 'Transform your ideas into powerful mobile applications with our expert development team. We specialize in both native iOS/Android development and cross-platform solutions using React Native and Flutter.',
      icon: 'ri-smartphone-line',
      category: 'design',
      features: [
        'Native iOS & Android',
        'Cross-Platform Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Third-party Integrations'
      ],
      plans: {
        basic: {
          name: 'Basic',
          price: '$2,200',
          duration: '4-6 weeks',
          features: [
            'Single platform app',
            'Basic UI/UX design',
            'Core functionality',
            'App store submission',
            '2 months support'
          ]
        },
        professional: {
          name: 'Professional',
          price: '$3,500',
          duration: '6-8 weeks',
          features: [
            'Cross-platform app',
            'Custom UI/UX design',
            'API integration',
            'Push notifications',
            '6 months support'
          ]
        },
        enterprise: {
          name: 'Enterprise',
          price: '$7,000',
          duration: '10-12 weeks',
          features: [
            'All platforms',
            'Advanced features',
            'Backend integration',
            'Analytics',
            '12 months support'
          ]
        }
      },
      rating: 4.8,
      reviews: 89,
      deliveryTime: '4-12 weeks',
      revisions: 'Unlimited'
    },
    '4': {
      name: 'Digital Marketing',
      description: 'Create native and cross-platform mobile applications',
      longDescription: 'Transform your ideas into powerful mobile applications with our expert development team. We specialize in both native iOS/Android development and cross-platform solutions using React Native and Flutter.',
      icon: 'ri-smartphone-line',
      category: 'marketing',
      features: [
        'Native iOS & Android',
        'Cross-Platform Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Third-party Integrations'
      ],
      plans: {
        basic: {
          name: 'Basic',
          price: '$2,200',
          duration: '4-6 weeks',
          features: [
            'Single platform app',
            'Basic UI/UX design',
            'Core functionality',
            'App store submission',
            '2 months support'
          ]
        },
        professional: {
          name: 'Professional',
          price: '$3,500',
          duration: '6-8 weeks',
          features: [
            'Cross-platform app',
            'Custom UI/UX design',
            'API integration',
            'Push notifications',
            '6 months support'
          ]
        },
        enterprise: {
          name: 'Enterprise',
          price: '$7,000',
          duration: '10-12 weeks',
          features: [
            'All platforms',
            'Advanced features',
            'Backend integration',
            'Analytics',
            '12 months support'
          ]
        }
      },
      rating: 4.8,
      reviews: 89,
      deliveryTime: '4-12 weeks',
      revisions: 'Unlimited'
    },
    '5': {
      name: 'SEO Optimization',
      description: 'Create native and cross-platform mobile applications',
      longDescription: 'Transform your ideas into powerful mobile applications with our expert development team. We specialize in both native iOS/Android development and cross-platform solutions using React Native and Flutter.',
      icon: 'ri-smartphone-line',
      category: 'marketing',
      features: [
        'Native iOS & Android',
        'Cross-Platform Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Third-party Integrations'
      ],
      plans: {
        basic: {
          name: 'Basic',
          price: '$2,200',
          duration: '4-6 weeks',
          features: [
            'Single platform app',
            'Basic UI/UX design',
            'Core functionality',
            'App store submission',
            '2 months support'
          ]
        },
        professional: {
          name: 'Professional',
          price: '$3,500',
          duration: '6-8 weeks',
          features: [
            'Cross-platform app',
            'Custom UI/UX design',
            'API integration',
            'Push notifications',
            '6 months support'
          ]
        },
        enterprise: {
          name: 'Enterprise',
          price: '$7,000',
          duration: '10-12 weeks',
          features: [
            'All platforms',
            'Advanced features',
            'Backend integration',
            'Analytics',
            '12 months support'
          ]
        }
      },
      rating: 4.8,
      reviews: 89,
      deliveryTime: '4-12 weeks',
      revisions: 'Unlimited'
    },
    '6': {
      name: 'Web Application Development',
      description: 'Create native and cross-platform mobile applications',
      longDescription: 'Transform your ideas into powerful mobile applications with our expert development team. We specialize in both native iOS/Android development and cross-platform solutions using React Native and Flutter.',
      icon: 'ri-smartphone-line',
      category: 'development',
      features: [
        'Native iOS & Android',
        'Cross-Platform Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Third-party Integrations'
      ],
      plans: {
        basic: {
          name: 'Basic',
          price: '$2,200',
          duration: '4-6 weeks',
          features: [
            'Single platform app',
            'Basic UI/UX design',
            'Core functionality',
            'App store submission',
            '2 months support'
          ]
        },
        professional: {
          name: 'Professional',
          price: '$3,500',
          duration: '6-8 weeks',
          features: [
            'Cross-platform app',
            'Custom UI/UX design',
            'API integration',
            'Push notifications',
            '6 months support'
          ]
        },
        enterprise: {
          name: 'Enterprise',
          price: '$7,000',
          duration: '10-12 weeks',
          features: [
            'All platforms',
            'Advanced features',
            'Backend integration',
            'Analytics',
            '12 months support'
          ]
        }
      },
      rating: 4.8,
      reviews: 89,
      deliveryTime: '4-12 weeks',
      revisions: 'Unlimited'
    }
    // Add more services as needed
  };

  const service = services[serviceId];
  if (!service) return <div className="text-center text-red-500 py-10">Service not found.</div>;

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container max-w-5xl mx-auto px-4 py-8">
        <Link href="/services" className="text-sky-400 underline mb-6 inline-block">&larr; Back to Services</Link>
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 mb-8 border border-gray-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-sky-600">
              <i className={`${service.icon} text-white text-2xl`}></i>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">{service.name}</h1>
              <div className="text-gray-400 text-sm">{service.category}</div>
            </div>
          </div>
          <p className="text-gray-300 mb-6 text-lg">{service.longDescription}</p>
          <div className="mb-8">
            <span className="font-semibold text-white">Features:</span>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-300 space-y-1">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <span className="font-semibold text-white">Plans:</span>
            <div className="flex flex-col md:flex-row gap-6 mt-4">
              {Object.entries(service.plans).map(([planKey, plan]) => (
                <div
                  key={planKey}
                  className={`flex-1 rounded-lg border-2 p-5 flex flex-col items-start transition-all duration-200 min-w-0
                    ${planKey === 'basic' ? 'border-gray-700' : ''}
                    ${planKey === 'professional' ? 'border-gray-700' : ''}
                    ${planKey === 'enterprise' ? 'border-gray-700' : ''}
                    ${planKey === selectedPlan ? 'bg-gray-900 border-4 border-sky-400' : 'bg-gray-800 hover:bg-gray-700'}`}
                  style={{ minHeight: 260 }}
                >
                  <button
                    onClick={() => setSelectedPlan(planKey)}
                    className={`mb-2 px-4 py-1 rounded font-bold text-sm transition-colors duration-150
                      ${selectedPlan === planKey ? 'bg-sky-400 text-gray-900' : 'bg-gray-700 text-sky-400 hover:bg-sky-400 hover:text-gray-900'}`}
                  >
                    {plan.name}
                  </button>
                  <div className="font-semibold text-white">Price: <span className="font-normal">{plan.price}</span></div>
                  <div className="font-semibold text-white">Duration: <span className="font-normal">{plan.duration}</span></div>
                  <div className="mt-2 font-semibold text-white">Plan Features:</div>
                  <ul className="list-disc list-inside ml-4 mt-1 text-gray-300 space-y-1">
                    {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm mt-4">
            <div>Rating: <span className="text-yellow-400 font-semibold">{service.rating}</span> ({service.reviews} reviews)</div>
            <div>Delivery Time: <span className="text-white font-semibold">{service.deliveryTime}</span></div>
            <div>Revisions: <span className="text-white font-semibold">{service.revisions}</span></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 