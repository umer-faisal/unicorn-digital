
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        .header {
          background-color: #1f2937;
          border-bottom: 1px solid #374151;
        }
        
        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
        }
        
        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
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
        
        .nav-desktop {
          display: none;
          align-items: center;
          gap: 1.5rem;
        }
        
        .nav-desktop a {
          color: #d1d5db;
          white-space: nowrap;
          transition: color 0.2s;
        }
        
        .nav-desktop a:hover {
          color: #ffffff;
        }
        
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          color: #d1d5db;
          transition: color 0.2s;
        }
        
        .mobile-menu-btn:hover {
          color: #ffffff;
        }
        
        .mobile-menu {
          display: ${isMenuOpen ? 'flex' : 'none'};
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #374151;
        }
        
        .mobile-menu a {
          color: #d1d5db;
          text-align: left;
          padding: 0.5rem 0;
          transition: color 0.2s;
        }
        
        .mobile-menu a:hover {
          color: #ffffff;
        }
        
        @media (min-width: 768px) {
          .nav-desktop {
            display: flex;
          }
          
          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>
      
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <Link href="/" className="logo-link">
              <div className="logo-icon">
                <i className="ri-service-line text-white text-lg"></i>
              </div>
              <h1 className="logo-text">ServiceHub</h1>
            </Link>
            
            <nav className="nav-desktop">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
            >
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
            </button>
          </div>

          <nav className="mobile-menu">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
