import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-10 py-4">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold gradient-text">Bipin</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:gradient-text transition-colors">Home</a>
          <a href="#about" className="text-white hover:gradient-text transition-colors">About</a>
          <a href="#projects" className="text-white hover:gradient-text transition-colors">Projects</a>
          <a href="#skills" className="text-white hover:gradient-text transition-colors">Skills</a>
          <a href="#contact" className="text-white hover:gradient-text transition-colors">Contact</a>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-slate-900 md:hidden flex flex-col items-center py-4 space-y-4">
            <a href="#home" className="text-white hover:gradient-text transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-white hover:gradient-text transition-colors" onClick={toggleMenu}>About</a>
            <a href="#projects" className="text-white hover:gradient-text transition-colors" onClick={toggleMenu}>Projects</a>
            <a href="#skills" className="text-white hover:gradient-text transition-colors" onClick={toggleMenu}>Skills</a>
            <a href="#contact" className="text-white hover:gradient-text transition-colors" onClick={toggleMenu}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

