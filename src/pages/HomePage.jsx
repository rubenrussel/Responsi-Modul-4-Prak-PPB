import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6 bg-gray-50 rounded-lg shadow-inner">
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">
        Selamat Datang di Jurnal PWA
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        Ini adalah aplikasi Progressive Web App (PWA) yang dibuat menggunakan React, Vite, dan Tailwind CSS, sesuai dengan modul praktikum.
      </p>
      <p className="text-md text-gray-500 mb-4">
        Gunakan navigasi di atas (atau di bawah pada tampilan mobile) untuk menjelajah.
      </p>
      <div className="flex items-center text-emerald-500">
        <ArrowDown className="animate-bounce h-6 w-6 mr-2" />
        <p className="text-sm font-semibold">Cek Halaman Profil & Galeri</p>
      </div>
    </div>
  );
}