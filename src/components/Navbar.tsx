import { useState } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-80 bg-black backdrop-blur-md border-b border-indigo-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="gradient-text">Deepankar</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-indigo-400 transition-colors clickable">Home</a>
            <a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors clickable">About</a>
            <a href="#skills" className="text-gray-300 hover:text-indigo-400 transition-colors clickable">Skills</a>
            <a href="#workflows" className="text-gray-300 hover:text-indigo-400 transition-colors clickable">Workflows</a>
            <a href="#contact" className="text-gray-300 hover:text-indigo-400 transition-colors clickable">Contact</a>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-gray-300 hover:text-indigo-400 clickable"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden bg-black p-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#home" className="block py-2 text-gray-300 hover:text-indigo-400 clickable">Home</a>
        <a href="#about" className="block py-2 text-gray-300 hover:text-indigo-400 clickable">About</a>
        <a href="#skills" className="block py-2 text-gray-300 hover:text-indigo-400 clickable">Skills</a>
        <a href="#workflows" className="block py-2 text-gray-300 hover:text-indigo-400 clickable">Workflows</a>
        <a href="#contact" className="block py-2 text-gray-300 hover:text-indigo-400 clickable">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;