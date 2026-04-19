import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Clock, Users } from 'lucide-react';

const About: React.FC = () => {
  const reasons = [
    {
      title: 'Expert Care',
      desc: 'Led by specialists in pain management and regenerative medicine.',
      icon: Award
    },
    {
      title: 'Targeted Relief',
      desc: 'We don\'t just mask the pain; we address the root cause.',
      icon: CheckCircle2
    },
    {
      title: 'State-of-the-art',
      desc: 'Utilizing the latest advancements in medical technology.',
      icon: Clock
    },
    {
      title: 'Patient-First Focus',
      desc: 'Compassionate care tailored uniquely to your condition.',
      icon: Users
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '100%',
                height: '100%',
                border: '2px solid var(--primary)',
                borderRadius: '24px',
                zIndex: 0
              }}
            />
            <div 
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                aspectRatio: '4/5',
                backgroundColor: '#e2e8f0'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3" 
                alt="Medical Specialist at Valor Pain & Wellness"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />

              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: '100%', 
                  padding: '1.5rem', 
                  background: 'linear-gradient(transparent, rgba(27, 58, 92, 0.9))',
                  color: 'white'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4ade80' }}></div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em' }}>ACCEPTING NEW PATIENTS</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', margin: 0, fontFamily: 'var(--font-serif)' }}>We will take care of you.</h3>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
              Why Valor Stands Out
            </h4>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.5rem' }}>
              Regenerative Power for Lasting Relief
            </h2>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              At Valor Pain & Wellness, we believe in the body's profound ability to heal itself. Our practice focuses on delivering top-tier stem cell therapy and regenerative medicine directly to the source of your pain.
            </p>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.7 }}>
              Rather than managing symptoms with temporary fixes, we introduce regenerative cells designed to repair chronic damage and restore function, allowing you to live a fuller, pain-free life.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {reasons.map((reason, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--primary)', marginTop: '0.2rem' }}>
                    <reason.icon size={24} />
                  </div>
                  <div>
                    <h5 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--text)' }}>{reason.title}</h5>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
