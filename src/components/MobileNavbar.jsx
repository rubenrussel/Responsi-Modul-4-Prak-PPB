import React from 'react';
import { Home, User, Layers } from 'lucide-react';

const navItems = [
  { name: 'home', label: 'Home', icon: Home },
  { name: 'gallery', label: 'Galeri', icon: Layers },
  { name: 'profile', label: 'Profil', icon: User },
];

export default function MobileNavbar({ currentPage, onNavigate }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="flex justify-around h-16">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => onNavigate(item.name)}
            className={`flex flex-col items-center justify-center w-full text-xs font-medium transition-colors duration-200
              ${currentPage === item.name
                ? 'text-emerald-600'
                : 'text-gray-500 hover:text-emerald-500'
              }`}
          >
            <item.icon className="h-6 w-6 mb-1" />
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}