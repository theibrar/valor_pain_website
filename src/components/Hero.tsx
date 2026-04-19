import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldPlus, Activity, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5rem',
        minHeight: '90vh',
        paddingBottom: '5rem', 
        backgroundColor: '#1E293B',
        overflow: 'visible',
        zIndex: 5
      }}
    >
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15, 33, 54, 0.95) 0%, rgba(27, 58, 92, 0.7) 100%)', zIndex: 1 }}></div>
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2668&ixlib=rb-4.0.3" 
          alt="Modern Clinic Background"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="eager" // Hero image should load eagerly for LCP
        />
      </div>


      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '768px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                color: 'var(--text-light)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <span style={{ color: '#3b82f6' }}>★</span> TOP RATED CLINIC IN PROSPER, TX
            </div>
            
            <h1 
              style={{
                color: '#ffffff',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                marginBottom: '1.5rem',
              }}
            >
              Experience <span style={{ color: '#93c5fd', fontStyle: 'italic' }}>Excellence</span> In Pain Relief & Wellness
            </h1>
            
            <p 
              style={{
                color: '#e2e8f0',
                fontSize: '1.125rem',
                marginBottom: '2.5rem',
                maxWidth: '540px',
                lineHeight: 1.7
              }}
            >
              Leading the way in regenerative therapies. Discover the body's natural ability to heal, renew, and repair tissues from the inside out.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-secondary" style={{ gap: '0.5rem', padding: '0.875rem 2rem' }}>
                Book Your Call Now <ArrowRight size={18} />
              </a>
              <a href="/#treatments" className="btn btn-glass" style={{ gap: '0.5rem', padding: '0.875rem 2rem' }}>
                Explore Treatments <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Conditions Banner - Overlapping bottom edge */}
      <div 
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 20, transform: 'translateY(50%)' }}
      >
        <div className="container hidden md:block">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '2rem 3rem',
              borderRadius: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)'
            }}
          >
            <div style={{ maxWidth: '250px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>We Take Care of You</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Specialized focus on your pain points.</p>
            </div>
            
            <div style={{ display: 'flex', gap: '2.5rem' }}>
              {[
                { name: 'Joint Pain', icon: ShieldPlus },
                { name: 'Back Pain', icon: Activity },
                { name: 'Knee Pain', icon: ShieldPlus },
                { name: 'Ligaments', icon: Activity },
              ].map((condition, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div 
                    style={{ 
                      width: '50px', height: '50px', 
                      borderRadius: '50%', 
                      backgroundColor: 'var(--surface-hover)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--primary)'
                    }}
                  >
                    <condition.icon size={24} />
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>
                    {condition.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Global CSS for responsive tweaks */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .hidden.md\\:block { display: none !important; }
        }
      `}} />
    </section>
  );
};

export default Hero;
