
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <style jsx>{`
        .footer {
          background-color: #1f2937;
          border-top: 1px solid #374151;
          margin-top: 4rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .footer-section h4 {
          font-size: 1.125rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-section li {
          margin-bottom: 0.5rem;
        }
        
        .footer-section a {
          color: #9ca3af;
          transition: color 0.2s;
        }
        
        .footer-section a:hover {
          color: #ffffff;
        }
        
        .footer-section p {
          color: #9ca3af;
          font-size: 0.875rem;
          margin: 0;
        }
        
        .logo-section {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .logo-icon {
          width: 2rem;
          height: 2rem;
          background-color: #2563eb;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
        }
        
        .contact-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .contact-info i {
          color: #60a5fa;
        }
        
        .contact-info span {
          color: #9ca3af;
          font-size: 0.875rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-links i {
          color: #60a5fa;
          font-size: 1.25rem;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .social-links i:hover {
          color: #93c5fd;
        }
        
        .footer-bottom {
          border-top: 1px solid #374151;
          margin-top: 2rem;
          padding-top: 2rem;
          text-align: center;
        }
        
        .footer-bottom p {
          color: #9ca3af;
          font-size: 0.875rem;
          margin: 0;
        }
        
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-section">
              <Link href="/" className="logo-section">
                <div className="logo-icon">
                  <i className="ri-service-line text-white text-lg"></i>
                </div>
                <h3 className="logo-text">ServiceHub</h3>
              </Link>
              <p>Your trusted partner for comprehensive digital services and solutions.</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><span>Web Development</span></li>
                <li><span>Mobile Apps</span></li>
                <li><span>UI/UX Design</span></li>
                <li><span>Digital Marketing</span></li>
                <li><span>Cloud Solutions</span></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <div className="contact-info">
                <i className="ri-mail-line"></i>
                <span>contact@servicehub.com</span>
              </div>
              <div className="contact-info">
                <i className="ri-phone-line"></i>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="social-links">
                <i className="ri-facebook-fill"></i>
                <i className="ri-twitter-fill"></i>
                <i className="ri-linkedin-fill"></i>
                <i className="ri-instagram-fill"></i>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 ServiceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
