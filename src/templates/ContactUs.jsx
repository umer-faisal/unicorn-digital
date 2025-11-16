'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    <div className="min-h-screen bg-neutral-muted text-text-base">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-[#f6f6f6] max-w-2xl mx-auto">
              Ready to start your project? We'd love to hear from you. Let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-neutral-muted rounded-lg p-8 border border-brand-soft">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Send us a message</h2>
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-base mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-base border border-brand-soft rounded-lg text-text-base text-sm focus:outline-none focus:border-brand-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-base mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-base border border-brand-soft rounded-lg text-text-base text-sm focus:outline-none focus:border-brand-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-base mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-base border border-brand-soft rounded-lg text-text-base text-sm focus:outline-none focus:border-brand-primary transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-base mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-base border border-brand-soft rounded-lg text-text-base text-sm focus:outline-none focus:border-brand-primary transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-text-base mb-2">
                        Service Interested In
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 pr-8 bg-neutral-base border border-brand-soft rounded-lg text-text-base text-sm focus:outline-none focus:border-brand-primary transition-colors appearance-none cursor-pointer"
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
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-text-muted">
                          <i className="ri-arrow-down-s-line"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-text-base mb-2">
                        Project Budget
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 pr-8 bg-neutral-base border border-brand-soft rounded-lg text-text-base text-sm focus:outline-none focus:border-brand-primary transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-1000">Under $1,000</option>
                          <option value="1000-5000">$1,000 - $5,000</option>
                          <option value="5000-10000">$5,000 - $10,000</option>
                          <option value="10000-25000">$10,000 - $25,000</option>
                          <option value="25000-50000">$25,000 - $50,000</option>
                          <option value="over-50000">Over $50,000</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-text-muted">
                          <i className="ri-arrow-down-s-line"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-base mb-2">
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
                      className="w-full px-4 py-3 bg-neutral-base border border-brand-soft rounded-lg text-text-base text-sm focus:outline-none focus:border-brand-primary transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                    <div className="text-right text-sm text-text-muted mt-1">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.includes('Thank you') 
                        ? 'bg-brand-soft/60 text-brand-dark border border-brand-soft' 
                        : 'bg-[#fff2f2] text-[#7f1d1d] border border-[#f5c6c6]'
                    }`}>
                      {submitStatus}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-primary hover:bg-brand-light disabled:bg-neutral-muted disabled:text-text-muted text-white py-3 px-6 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-neutral-muted rounded-lg p-8 border border-brand-soft">
                  <h3 className="text-2xl font-bold text-brand-dark mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-soft rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-mail-line text-brand-primary text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-brand-dark mb-1">Email</h4>
                          <p className="text-text-muted "> <a href="mailto:info@unicorndigital.pk">info@unicorndigital.pk</a></p>
                        {/* <p className="text-gray-400">support@servicehub.com</p> */}
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-soft rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-phone-line text-brand-primary text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-brand-dark mb-1">Phone</h4>
                        <p className="text-text-muted"> <a href="tel:+92 300 8268275">+92 300 8268275</a></p>
                        {/* <p className="text-gray-400">+1 (555) 987-6543</p> */}
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-soft rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-map-pin-line text-brand-primary text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-brand-dark mb-1">Address</h4>
                        <p className="text-text-muted">520, St 3, Sector 1, </p>
                        <p className="text-text-muted">AECHS, Rawalpindi</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-muted rounded-lg p-8 border border-brand-soft">
                  <h3 className="text-2xl font-bold text-brand-dark mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Monday - Friday</span>
                      <span className="text-brand-dark">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Saturday</span>
                      <span className="text-brand-dark">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Sunday</span>
                      <span className="text-brand-dark">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-muted rounded-lg p-8 border border-brand-soft">
                  <h3 className="text-2xl font-bold text-brand-dark mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['ri-facebook-fill', 'ri-twitter-fill', 'ri-linkedin-fill', 'ri-instagram-fill'].map((icon) => (
                      <div key={icon} className="w-12 h-12 bg-brand-soft rounded-lg flex items-center justify-center cursor-pointer hover:bg-brand-primary transition-colors group">
                        <i className={`${icon} text-brand-primary text-xl transition-colors group-hover:text-white`}></i>
                      </div>
                    ))}
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