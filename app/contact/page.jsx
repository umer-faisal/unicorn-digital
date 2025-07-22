'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Validate message length
    if (formData.message.length > 500) {
      setSubmitStatus('Message must be 500 characters or less.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitStatus('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });
      } else {
        setSubmitStatus('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your project? We'd love to hear from you. Let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interested In
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 pr-8 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="ui-ux-design">UI/UX Design</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="seo-optimization">SEO Optimization</option>
                          <option value="cloud-solutions">Cloud Solutions</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <i className="ri-arrow-down-s-line text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Budget
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 pr-8 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-1000">Under $1,000</option>
                          <option value="1000-5000">$1,000 - $5,000</option>
                          <option value="5000-10000">$5,000 - $10,000</option>
                          <option value="10000-25000">$10,000 - $25,000</option>
                          <option value="25000-50000">$25,000 - $50,000</option>
                          <option value="over-50000">Over $50,000</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <i className="ri-arrow-down-s-line text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      maxLength={500}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                    <div className="text-right text-sm text-gray-400 mt-1">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.includes('Thank you') 
                        ? 'bg-green-600/20 text-green-400 border border-green-600/30' 
                        : 'bg-red-600/20 text-red-400 border border-red-600/30'
                    }`}>
                      {submitStatus}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-mail-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                        <p className="text-gray-400">contact@servicehub.com</p>
                        <p className="text-gray-400">support@servicehub.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-phone-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                        <p className="text-gray-400">+1 (555) 987-6543</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-map-pin-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                        <p className="text-gray-400">123 Digital Street</p>
                        <p className="text-gray-400">Tech City, TC 12345</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monday - Friday</span>
                      <span className="text-white">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Saturday</span>
                      <span className="text-white">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sunday</span>
                      <span className="text-white">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                      <i className="ri-facebook-fill text-white text-xl"></i>
                    </div>
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                      <i className="ri-twitter-fill text-white text-xl"></i>
                    </div>
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                      <i className="ri-linkedin-fill text-white text-xl"></i>
                    </div>
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                      <i className="ri-instagram-fill text-white text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}