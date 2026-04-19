import React from 'react';
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo_white.png';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary-dark)', color: '#94a3b8', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          
          {/* Brand Col */}
          <div>
            <Link 
              to="/" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start', 
                marginBottom: '1rem',
                textDecoration: 'none'
              }}
            >
               <img src={logoWhite} alt="Valor Pain & Wellness" style={{ height: '140px', width: 'auto' }} loading="lazy" />
            </Link>
            <p style={{ lineHeight: 1.6, marginBottom: '1.5rem', marginTop: '1rem' }}>
              We are dedicated to providing advanced regenerative therapies to treat the root cause of your chronic pain, not just the symptoms.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor='var(--primary)'} onMouseLeave={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.05)'}><Share2 size={18} /></a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor='var(--primary)'} onMouseLeave={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.05)'}><MessageCircle size={18} /></a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor='var(--primary)'} onMouseLeave={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.05)'}><Globe size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="/" style={{ color: '#94a3b8' }}>Home</a></li>
              <li><a href="/#about" style={{ color: '#94a3b8' }}>About Us</a></li>
              <li><a href="/#treatments" style={{ color: '#94a3b8' }}>Our Treatments</a></li>
              <li><a href="/#testimonials" style={{ color: '#94a3b8' }}>Testimonials</a></li>
              <li><a href="/#contact" style={{ color: '#94a3b8' }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>Contact Info</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={20} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <span style={{ display: 'block', color: 'white', fontWeight: 500, marginBottom: '0.25rem' }}>Call Us</span>
                  <a href="tel:+14692158538" style={{ color: '#94a3b8' }}>+1 469-215-8538</a>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail size={20} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <span style={{ display: 'block', color: 'white', fontWeight: 500, marginBottom: '0.25rem' }}>Email Us</span>
                  <a href="mailto:Info@valorpainwellness.com" style={{ color: '#94a3b8' }}>Info@valorpainwellness.com</a>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={20} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <span style={{ display: 'block', color: 'white', fontWeight: 500, marginBottom: '0.25rem' }}>Visit Us</span>
                  <span style={{ color: '#94a3b8' }}>170 N. Preston Rd. #40, Prosper, TX. 75078</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>Stay Informed</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Join our community for the latest in regenerative medicine and wellness tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="email" 
                placeholder="Your email" 
                style={{ 
                  flex: 1, 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '99px', 
                  padding: '0.75rem 1.25rem', 
                  color: 'white',
                  fontSize: '0.9rem',
                  outline: 'none'
                }} 
              />
              <button 
                type="submit"
                className="btn btn-secondary"
                style={{ padding: '0.75rem 1.25rem', fontSize: '0.9rem' }}
              >
                Join
              </button>
            </form>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', fontSize: '0.9rem' }}>
          <p>© {new Date().getFullYear()} Valor Pain & Wellness. All rights reserved. | Designed and developed by <a href="http://ibrasoft.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 500, textDecoration: 'none' }}>IbraSoft</a></p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy" style={{ color: '#94a3b8' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: '#94a3b8' }}>Terms of Service</Link>
            <Link to="/hipaa" style={{ color: '#94a3b8' }}>HIPAA Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
