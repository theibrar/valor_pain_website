import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Treatments', href: '/#treatments' },
    { name: 'About Us', href: '/#about' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <header 
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
          background: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo Area */}
          <Link 
            to="/" 
            style={{ 
              transform: isScrolled ? 'scale(0.8) origin-left' : 'scale(1)', 
              transition: 'transform 0.3s',
              display: 'block',
              textDecoration: 'none'
            }}
          >
            <Logo variant={isScrolled ? 'dark' : 'dark'} className="transform origin-left transition-transform duration-300" />
          </Link>

          {/* Desktop Nav */}
          <nav 
            className="glass"
            style={{ 
              display: 'none', 
              borderRadius: '9999px',
              padding: '0.4rem 1.5rem',
            }}
          >
            <ul style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    style={{ 
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'var(--primary)',
                      padding: '0.5rem 0',
                      display: 'block'
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="md:flex">
            <a href="tel:+14692158538" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem' }}>
              <Phone size={18} />
              +1 469-215-8538
            </a>
            <a href="/#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Book Consultation</a>
          </div>

          {/* Mobile Toggle */}
          <button 
            style={{ display: 'flex', background: 'none', border: 'none', color: 'var(--primary)', zIndex: 60 }} 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Global CSS for Tailwind-like utility classes that I used minimally */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 1024px) {
            nav.glass { display: block !important; }
            .md\\:flex { display: flex !important; }
            .md\\:hidden { display: none !important; }
          }
        `}} />
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'rgba(255, 255, 255, 0.98)',
              zIndex: 40,
              display: 'flex',
              flexDirection: 'column',
              padding: '6rem 2rem 2rem',
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <a 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontSize: '1.5rem',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 600,
                      color: 'var(--primary)'
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ marginTop: 'auto' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a 
                  href="tel:+14692158538" 
                  className="btn btn-outline"
                  style={{ width: '100%', display: 'flex', gap: '0.5rem' }}
                >
                  <Phone size={20} /> +1 469-215-8538
                </a>
                <a 
                  href="/#contact"
                  className="btn btn-primary"
                  style={{ width: '100%', textDecoration: 'none' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Consultation
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
