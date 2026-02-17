import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown,
  User,
  Calendar,
  LogIn,
  Sparkles,
  BookOpen,
  MessageCircle,
  Phone,
  ArrowRight
} from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { 
      name: 'About', 
      href: '#about', 
      icon: Sparkles,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Story', href: '#story' },
        { name: 'Our Team', href: '#team' },
        { name: 'Philosophy', href: '#philosophy' }
      ]
    },
    { 
      name: 'Courses', 
      href: '#courses', 
      icon: BookOpen,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Beginner Program', href: '#beginner' },
        { name: 'Advanced Training', href: '#advanced' },
        { name: 'Masterclass', href: '#masterclass' }
      ]
    },
    { 
      name: 'Consultation', 
      href: '#consultation', 
      icon: MessageCircle,
      hasDropdown: false
    },
    { 
      name: 'Contact', 
      href: '#contact', 
      icon: Phone,
      hasDropdown: false
    }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-zinc-900/5 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-6">
          
          {/* Logo */}
          <a 
            href="/" 
            className="group flex items-center gap-2"
          >
            
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
              Faceyoguez
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-teal-700 hover:text-teal-600 font-medium transition-colors duration-300 rounded-lg hover:bg-teal-50"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div 
                    className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl shadow-zinc-900/10 border border-zinc-100 overflow-hidden transition-all duration-300 ${
                      activeDropdown === index 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="p-2">
                      {link.dropdownItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 text-zinc-600 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all duration-200 group"
                        >
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 text-teal-600 font-medium rounded-xl hover:bg-teal-50 transition-all duration-300 border-2 border-transparent hover:border-teal-100">
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
            <button className="group flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-medium px-6 py-2.5 rounded-xl shadow-lg shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/30 transition-all duration-300 hover:-translate-y-0.5">
              <Calendar className="w-4 h-4" />
              Book Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 w-6 h-6 text-teal-700 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`} 
              />
              <X 
                className={`absolute inset-0 w-6 h-6 text-teal-700 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                }`} 
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-100">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-teal-700">Faceyoguez</span>
          </a>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-100 hover:bg-zinc-200 transition-colors"
          >
            <X className="w-5 h-5 text-zinc-600" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="p-6 overflow-y-auto h-[calc(100%-180px)]">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-4 text-zinc-700 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-teal-100 group-hover:bg-teal-200 rounded-xl flex items-center justify-center transition-colors">
                    <link.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-lg">{link.name}</span>
                    {link.hasDropdown && (
                      <p className="text-sm text-zinc-400">
                        {link.dropdownItems.length} options
                      </p>
                    )}
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Divider */}
          <div className="my-6 border-t border-zinc-100"></div>

          {/* Additional Links */}
          <div className="space-y-2">
            <a 
              href="#faq"
              className="flex items-center gap-4 px-4 py-3 text-zinc-500 hover:text-teal-600 rounded-xl transition-colors"
            >
              <span>FAQ</span>
            </a>
            <a 
              href="#blog"
              className="flex items-center gap-4 px-4 py-3 text-zinc-500 hover:text-teal-600 rounded-xl transition-colors"
            >
              <span>Blog</span>
            </a>
            <a 
              href="#support"
              className="flex items-center gap-4 px-4 py-3 text-zinc-500 hover:text-teal-600 rounded-xl transition-colors"
            >
              <span>Support</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-zinc-50 border-t border-zinc-100">
          <div className="space-y-3">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-teal-600 text-teal-600 font-medium rounded-xl hover:bg-teal-50 transition-all duration-300"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-teal-600/25 hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;