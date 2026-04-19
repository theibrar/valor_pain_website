import React from 'react';
import { motion } from 'framer-motion';

const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="section-padding bg-slate-50" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 md:p-12 rounded-3xl"
            style={{ backgroundColor: 'white', maxWidth: '900px', margin: '0 auto' }}
          >
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', borderBottom: '2px solid var(--border)', paddingBottom: '1rem' }}>{title}</h1>
            <div className="legal-content" style={{ color: 'var(--text)', lineHeight: 1.8 }}>
              {children}
            </div>
          </motion.div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .legal-content h2 { font-size: 1.5rem; margin-top: 2.5rem; margin-bottom: 1rem; color: var(--primary); }
        .legal-content p { margin-bottom: 1.5rem; }
        .legal-content ul { margin-bottom: 1.5rem; padding-left: 1.5rem; list-style: disc; }
        .legal-content li { margin-bottom: 0.5rem; }
      `}} />
    </div>
  );
};

export default LegalLayout;
