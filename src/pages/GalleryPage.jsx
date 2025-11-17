import React from 'react';
// Impor data statis
import { staticGalleryItems } from '../data/galleryData.js';

export default function GalleryPage() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Galeri Tanaman</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Loop data statis */}
        {staticGalleryItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.src = 'https://placehold.co/600x400/gray/white?text=Error'; }}
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}