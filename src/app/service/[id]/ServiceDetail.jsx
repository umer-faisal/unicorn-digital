
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
    <>
      <style jsx>{`
        .service-detail-page {
          min-height: 100vh;
          background-color: #f6f6f6;
          color: #1a1a1a;
        }

        .service-detail-main {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: #367c2b;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .hero-card {
          background: #ffffff;
          border: 1px solid #a8d08d;
          border-radius: 1rem;
          padding: 2.5rem;
          box-shadow: 0 20px 60px -30px rgba(44, 98, 31, 0.35);
          margin-bottom: 2rem;
        }

        .hero-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .service-icon-badge {
          width: 4rem;
          height: 4rem;
          border-radius: 0.75rem;
          background: #a8d08d;
          color: #2c621f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
        }

        .service-category {
          display: inline-flex;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          background-color: #f6f6f6;
          border: 1px solid #dbe8cf;
          color: #666666;
          font-size: 0.85rem;
          text-transform: capitalize;
          margin-top: 0.5rem;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #666666;
          line-height: 1.7;
        }

        .hero-meta {
          margin-top: 1.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .meta-pill {
          background: #f6f6f6;
          border: 1px solid #e6eedb;
          border-radius: 0.75rem;
          padding: 0.75rem 1.25rem;
          font-size: 0.95rem;
          color: #1a1a1a;
        }

        .features-card {
          background: #ffffff;
          border: 1px solid #a8d08d;
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .features-card h2 {
          font-size: 1.5rem;
          color: #2c621f;
          margin-bottom: 1rem;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0.85rem;
        }

        .feature-grid li {
          list-style: none;
          background: #f6f6f6;
          border-radius: 0.75rem;
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          color: #1a1a1a;
        }

        .plans-section h2 {
          font-size: 1.5rem;
          color: #2c621f;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem;
          margin-top: 1.5rem;
        }

        .plan-card {
          background: #ffffff;
          border: 1px solid #a8d08d;
          border-radius: 1rem;
          padding: 1.75rem;
          box-shadow: 0 15px 40px -25px rgba(54, 124, 43, 0.45);
          transition: border-color 0.2s, transform 0.2s;
        }

        .plan-card:hover {
          border-color: #4d8f3d;
          transform: translateY(-4px);
        }

        .plan-card.active {
          border: 2px solid #367c2b;
          box-shadow: 0 25px 50px -30px rgba(54, 124, 43, 0.45);
        }

        .plan-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 0.5rem;
        }

        .plan-title {
          font-weight: 600;
          color: #2c621f;
          font-size: 1.1rem;
        }

        .plan-price {
          font-size: 1.35rem;
          font-weight: 700;
          color: #367c2b;
        }

        .plan-duration {
          font-size: 0.95rem;
          color: #666666;
          margin-bottom: 0.85rem;
        }

        .plan-features {
          margin: 0;
          padding-left: 1rem;
          color: #1a1a1a;
        }

        .plan-select {
          margin-bottom: 0.75rem;
          padding: 0.4rem 0.95rem;
          border-radius: 9999px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          background-color: #f6f6f6;
          color: #367c2b;
        }

        .plan-select.active {
          background-color: #367c2b;
          color: #ffffff;
        }

        .cta-card {
          background: #2c621f;
          border-radius: 1rem;
          padding: 2rem;
          color: #ffffff;
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cta-card button {
          align-self: flex-start;
          padding: 0.9rem 1.75rem;
          border-radius: 0.75rem;
          background: #ffffff;
          color: #2c621f;
          font-weight: 600;
        }

        @media (max-width: 640px) {
          .hero-card {
            padding: 1.75rem;
          }

          .hero-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .hero-meta {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="service-detail-page">
        <Header />
        <main className="service-detail-main">
          <Link href="/services" className="back-link">
            <span aria-hidden>←</span> Back to Services
          </Link>

          <div className="hero-card">
            <div className="hero-header">
              <div className="service-icon-badge">
                <i className={`${service.icon}`}></i>
              </div>
              <div>
                <h1>{service.name}</h1>
                <span className="service-category">{service.category}</span>
              </div>
            </div>
            <p className="hero-description">{service.longDescription}</p>
            <div className="hero-meta">
              <div className="meta-pill">
                Rating: <strong>{service.rating}</strong> ({service.reviews} reviews)
              </div>
              <div className="meta-pill">
                Delivery Time: <strong>{service.deliveryTime}</strong>
              </div>
              <div className="meta-pill">
                Revisions: <strong>{service.revisions}</strong>
              </div>
            </div>
          </div>

          <div className="features-card">
            <h2>Features</h2>
            <ul className="feature-grid">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <section className="plans-section">
            <h2>Plans</h2>
            <div className="plans-grid">
              {Object.entries(service.plans).map(([planKey, plan]) => {
                const isActive = planKey === selectedPlan;
                return (
                  <div
                    key={planKey}
                    className={`plan-card ${isActive ? 'active' : ''}`}
                  >
                    <button
                      className={`plan-select ${isActive ? 'active' : ''}`}
                      onClick={() => setSelectedPlan(planKey)}
                    >
                      {isActive ? 'Selected' : 'Select'}
                    </button>
                    <div className="plan-header">
                      <span className="plan-title">{plan.name}</span>
                      <span className="plan-price">{plan.price}</span>
                    </div>
                    <div className="plan-duration">Duration: {plan.duration}</div>
                    <ul className="plan-features">
                      {plan.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="cta-card">
            <h3>Have questions about this service?</h3>
            <p>Our team is ready to tailor a plan to your goals and budget. Let’s build something great together.</p>
            <Link href="/contact">
              <button>Talk to an expert</button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 