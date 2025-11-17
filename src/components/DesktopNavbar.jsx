import React from 'react';
import { Home, User, Layers } from 'lucide-react';

const navItems = [
  { name: 'home', label: 'Home', icon: Home },
  { name: 'gallery', label: 'Galeri', icon: Layers },
  { name: 'profile', label: 'Profil', icon: User },
];

export default function DesktopNavbar({ currentPage, onNavigate }) {
  return (
    <nav className="hidden md:block bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-emerald-600">Jurnal PWA</h1>
          </div>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.name)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${currentPage === item.name
                    ? 'bg-emerald-500 text-white'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}