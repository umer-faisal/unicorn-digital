
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
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .logo-icon {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
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
                  <img src="/Images/Logo.png" alt="Unicorn Digital Logo" style={{ maxHeight: '40px', maxWidth: '150px', objectFit: 'contain', display: 'block' }} />
                </div>
                {/* <h3 className="logo-text">Unicorn Digital</h3> */}
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
                <li><span><a href="/service/1">Web Development</a></span></li>
                <li><span><a href="/service/2">Mobile App</a></span></li>
                <li><span><a href="/service/3">UI/UX Design</a></span></li>
                <li><span><a href="/service/4">Digital Marketing</a></span></li>
                <li><span><a href="/service/5">SEO Optimization</a></span></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <div className="contact-info">
                <i className="ri-mail-line"></i>
                <span><a href="mailto:info@unicorndigital.pk">info@unicorndigital.pk</a></span>
              </div>
              <div className="contact-info">  
                <i className="ri-phone-line"></i>
                <span><a href="tel:+92 3008268275">+92 300 8268275</a></span>
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
            <p>© 2025 Unicorn Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
