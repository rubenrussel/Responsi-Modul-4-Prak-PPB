import React, { useState } from 'react';

// Impor Halaman
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ProfilePage from './pages/ProfilePage';

// Impor Komponen Navigasi
import DesktopNavbar from './components/DesktopNavbar';
import MobileNavbar from './components/MobileNavbar';



export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Logika navigasi
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  // Logika render halaman
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'gallery':
        return <GalleryPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <DesktopNavbar currentPage={currentPage} onNavigate={handleNavigation} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
        {renderCurrentPage()}
      </main>

      <MobileNavbar currentPage={currentPage} onNavigate={handleNavigation} />
      
    </div>
  );
}