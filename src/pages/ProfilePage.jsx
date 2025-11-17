import React from 'react';

export default function ProfilePage() {
  // ===== PENTING: GANTI DATA DI BAWAH INI =====
  const profileData = {
    nama: 'Nama Lengkap Anda',   // Ganti dengan nama Anda
    nim: 'NIM Anda',             // Ganti dengan NIM Anda
    kelompok: 'Kelompok Anda'    // Ganti dengan kelompok Anda
  };
  // ============================================

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Profil Pengguna</h1>
      <div className="bg-white max-w-md mx-auto rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center">
          <img 
            src={`https://placehold.co/150x150/10B981/FFFFFF?text=${profileData.nama.charAt(0)}`}
            alt="Foto Profil"
            className="w-32 h-32 rounded-full mb-6 border-4 border-emerald-500"
          />
          <ul className="text-lg w-full">
            <li className="flex justify-between py-3 border-b">
              <span className="font-semibold text-gray-700">Nama:</span>
              <span className="text-gray-900">{profileData.nama}</span>
            </li>
            <li className="flex justify-between py-3 border-b">
              <span className="font-semibold text-gray-700">NIM:</span>
              <span className="text-gray-900">{profileData.nim}</span>
            </li>
            <li className="flex justify-between py-3">
              <span className="font-semibold text-gray-700">Kelompok:</span>
              <span className="text-gray-900">{profileData.kelompok}</span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-gray-500 text-center">
            Data profil ini bersifat statis untuk memenuhi tugas proyek akhir.
          </p>
        </div>
      </div>
    </div>
  );
}