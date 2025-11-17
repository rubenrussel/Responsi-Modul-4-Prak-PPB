import React from 'react';
import { Film } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6 bg-gray-50 rounded-lg shadow-inner">
      <Film className="h-20 w-20 text-emerald-600 mb-6" strokeWidth={1} />
      {/* --- PERUBAHAN DI SINI --- */}
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">
        Selamat Datang di Katalog Film
      </h1>
      {/* --- AKHIR PERUBAHAN --- */}
      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        Ini adalah aplikasi PWA untuk mencatat koleksi film favorit Anda.
      </p>
      <p className="text-md text-gray-500">
        Gunakan navigasi untuk melihat Galeri Film atau Profil Anda.
      </p>
    </div>
  );
}