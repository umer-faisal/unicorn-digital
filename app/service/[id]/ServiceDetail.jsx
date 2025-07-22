
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