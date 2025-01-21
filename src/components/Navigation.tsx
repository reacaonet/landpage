import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from './logo.jpg';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Logo ReaçãoNet" className="h-8 w-auto" />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 px-3 py-2">Início</a>
            <a href="#servicos" className="text-gray-700 hover:text-orange-500 px-3 py-2">Serviços</a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 px-3 py-2">Sobre</a>
            <a href="#contato" className="text-gray-700 hover:text-orange-500 px-3 py-2">Contato</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Início</a>
            <a href="#servicos" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Serviços</a>
            <a href="#sobre" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sobre</a>
            <a href="#contato" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
}