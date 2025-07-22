'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">About ServiceHub</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are passionate about connecting businesses with exceptional digital talent and innovative solutions that drive real results.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  At ServiceHub, we believe that every business deserves access to world-class digital services. Our mission is to bridge the gap between ambitious companies and talented professionals who can bring their visions to life.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We carefully curate our network of experts to ensure that every project is handled by professionals who not only have the technical skills but also understand the business impact of their work.
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                    <div className="text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
                    <div className="text-gray-400">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-gray-400">Expert Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
                    <div className="text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Trust & Transparency</h3>
                <p className="text-gray-400 leading-relaxed">
                  We believe in building long-term relationships based on trust, clear communication, and transparent processes.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-star-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-400 leading-relaxed">
                  We are committed to delivering exceptional results that exceed expectations and drive meaningful business impact.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-lightbulb-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-400 leading-relaxed">
                  We embrace new technologies and creative approaches to solve complex challenges and stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Leadership Team</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Meet the passionate leaders who drive our vision forward and ensure exceptional service delivery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://readdy.ai/api/search-image?query=Professional%20business%20woman%20CEO%20in%20modern%20office%2C%20confident%20smile%2C%20business%20attire%2C%20executive%20portrait%2C%20corporate%20headshot%2C%20leadership%20presence%2C%20clean%20background&width=300&height=300&seq=ceo1&orientation=squarish' },
                { name: 'Michael Chen', role: 'CTO', image: 'https://readdy.ai/api/search-image?query=Professional%20technology%20executive%20man%2C%20CTO%20portrait%2C%20modern%20office%20background%2C%20confident%20tech%20leader%2C%20business%20casual%20attire%2C%20clean%20corporate%20headshot&width=300&height=300&seq=cto1&orientation=squarish' },
                { name: 'Emily Rodriguez', role: 'Head of Operations', image: 'https://readdy.ai/api/search-image?query=Professional%20operations%20manager%20woman%2C%20business%20portrait%2C%20modern%20office%20setting%2C%20confident%20professional%2C%20business%20attire%2C%20clean%20background%20corporate%20headshot&width=300&height=300&seq=ops1&orientation=squarish' },
                { name: 'David Park', role: 'Head of Sales', image: 'https://readdy.ai/api/search-image?query=Professional%20sales%20executive%20man%2C%20business%20portrait%2C%20modern%20corporate%20setting%2C%20confident%20sales%20leader%2C%20business%20suit%2C%20clean%20background%20headshot&width=300&height=300&seq=sales1&orientation=squarish' }
              ].map((member, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover object-top"
                  />
                  <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">How We Work</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our streamlined process ensures consistent quality and successful project delivery every time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'We understand your needs, goals, and requirements through detailed consultation.' },
                { step: '02', title: 'Planning', desc: 'Our experts create a comprehensive project plan with clear timelines and deliverables.' },
                { step: '03', title: 'Execution', desc: 'Skilled professionals work on your project with regular updates and quality checks.' },
                { step: '04', title: 'Delivery', desc: 'We deliver your completed project with ongoing support and maintenance options.' }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your digital vision to life with our expert team and proven process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  View Services
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}