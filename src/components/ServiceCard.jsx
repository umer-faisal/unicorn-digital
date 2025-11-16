
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
      <div className="bg-neutral-muted border border-brand-soft rounded-lg p-6 transition-shadow transition-colors hover:border-brand-light hover:shadow-[0_10px_25px_-5px_rgba(77,143,61,0.25)]">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-brand-soft rounded-md flex items-center justify-center">
            <i className={`${service.icon} text-brand-primary text-xl`}></i>
          </div>
          {/* <button onClick={handleLike} className={`w-8 h-8 flex items-center justify-center ${isLiked ? 'text-brand-primary' : 'text-text-muted'} hover:text-brand-primary`}> */}
          {/*   <i className={`${isLiked ? 'ri-heart-fill' : 'ri-heart-line'} text-base`} /> */}
          {/* </button> */}
        </div>
        
        <h3 className="text-brand-dark text-lg font-semibold mb-2">{service.name}</h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4">{service.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          {/* <span className="text-2xl font-bold text-brand-dark">{service.price}</span> */}
          <div className="flex items-center gap-1">
            <i className="ri-star-fill text-brand-primary text-sm"></i>
            <span className="text-text-base text-sm">{service.rating}</span>
            <span className="text-text-muted text-sm">({service.reviews})</span>
          </div>
        </div>
        
        <Link href={`/service/${service.id}`} className="w-full bg-brand-primary text-white py-2 px-4 rounded-md font-medium inline-flex items-center justify-center hover:bg-brand-light transition-colors no-underline">
          View Details
        </Link>
      </div>
    </>
  );
}
