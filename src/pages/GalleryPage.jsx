import React from 'react';
// Impor data film yang baru
import { staticMovieData } from '../data/galleryData.js';

export default function GalleryPage() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Galeri Film</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {staticMovieData.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-48 object-cover"
              // --- PERUBAHAN DI SINI ---
              // Jika gambar gagal dimuat, tampilkan placeholder yang lebih baik
              onError={(e) => { e.target.src = 'https://placehold.co/600x400/6b7280/ffffff?text=Gagal+Memuat'; }}
              // --- AKHIR PERUBAHAN ---
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