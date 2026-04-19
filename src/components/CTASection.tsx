import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Graphic */}
      <div 
        style={{ 
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundColor: 'var(--primary)',
          backgroundImage: 'radial-gradient(circle at right top, rgba(59, 130, 246, 0.4), transparent 50%), radial-gradient(circle at left bottom, rgba(42, 90, 140, 0.8), transparent 50%)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '32px',
            padding: '4rem 2rem',
            textAlign: 'center',
            color: 'white',
            maxWidth: '1000px',
            margin: '0 auto',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'
          }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Ready to Begin Your Journey<br />to Better Health?
          </h2>
          
          <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Don't let chronic pain dictate your life any longer. Contact Vitality Healthcare Group today to explore your personalized regenerative therapy options.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            <a href="tel:+14692158538" className="btn btn-secondary" style={{ gap: '0.75rem', fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              <Phone size={20} />
              +1 469-215-8538
            </a>
            <a href="/#contact" className="btn btn-glass" style={{ gap: '0.75rem', fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              <Calendar size={20} />
              Book Online <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
