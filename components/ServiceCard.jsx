
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ServiceCard({ service }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <style jsx>{`
        .service-card {
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: all 0.3s;
        }
        
        .service-card:hover {
          border-color: #4b5563;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        
        .service-icon {
          width: 3rem;
          height: 3rem;
          background-color: #2563eb;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .service-icon i {
          color: #ffffff;
          font-size: 1.25rem;
        }
        
        .like-btn {
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .like-btn:hover {
          color: #ef4444;
        }
        
        .like-btn.liked {
          color: #ef4444;
        }
        
        .like-btn i {
          font-size: 1.125rem;
        }
        
        .service-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        
        .service-description {
          color: #9ca3af;
          font-size: 0.875rem;
          line-height: 1.625;
          margin-bottom: 1rem;
        }
        
        .service-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        
        .service-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
        }
        
        .service-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .rating-star {
          color: #facc15;
          font-size: 0.875rem;
        }
        
        .rating-text {
          color: #d1d5db;
          font-size: 0.875rem;
        }
        
        .rating-count {
          color: #6b7280;
          font-size: 0.875rem;
        }
        
        .service-btn {
          width: 100%;
          background-color: #2563eb;
          color: #ffffff;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        .service-btn:hover {
          background-color: #1d4ed8;
        }
      `}</style>
      
      <div className="service-card">
        <div className="card-header">
          <div className="service-icon">
            <i className={service.icon}></i>
          </div>
          <button
            onClick={handleLike}
            className={`like-btn ${isLiked ? 'liked' : ''}`}
          >
            <i className={`${isLiked ? 'ri-heart-fill' : 'ri-heart-line'}`}></i>
          </button>
        </div>
        
        <h3 className="service-title">{service.name}</h3>
        <p className="service-description">{service.description}</p>
        
        <div className="service-footer">
          <span className="service-price">{service.price}</span>
          <div className="service-rating">
            <i className="ri-star-fill rating-star"></i>
            <span className="rating-text">{service.rating}</span>
            <span className="rating-count">({service.reviews})</span>
          </div>
        </div>
        
        <Link href={`/service/${service.id}`} className="service-btn">
          View Details
        </Link>
      </div>
    </>
  );
}
