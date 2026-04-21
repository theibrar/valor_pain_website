import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Services: React.FC = () => {
  const servicesList = Object.values(servicesData);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="treatments" className="section-padding" style={{ backgroundColor: '#f9fafb', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 800, color: '#111827' }}>
              Satisfaction and Results.
            </h2>
            <p style={{ color: '#4b5563', fontSize: '1.25rem', lineHeight: 1.6 }}>
              Experience the future of healing with our advanced regenerative treatments.
            </p>
          </motion.div>
        </div>

        <motion.div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2.5rem' 
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
              }}
              onClick={() => window.location.href = `/services/${service.id}`}
            >
              {/* Image Header */}
              <div style={{ position: 'relative', height: '240px' }}>
                <img 
                  src={service.heroImage} 
                  alt={service.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Teal Accent Bar */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '8px', 
                  backgroundColor: '#00D1C1' 
                }} />
              </div>

              {/* Icon Circle */}
              <div style={{
                position: 'absolute',
                top: '210px',
                left: '24px',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#00D1C1',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                zIndex: 2,
                border: '4px solid white'
              }}>
                <service.icon size={30} />
              </div>

              {/* Content */}
              <div style={{ padding: '3.5rem 2rem 2.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 700, 
                  color: '#1B3A5C', 
                  marginBottom: '0.25rem',
                  fontFamily: 'var(--font-serif)'
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  color: '#64748B', 
                  fontSize: '1.1rem', 
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)'
                }}>
                  {service.subtitle}
                </p>
                
                <p style={{ 
                  color: '#475569', 
                  marginTop: '1.25rem', 
                  lineHeight: 1.6,
                  fontSize: '1.05rem'
                }}>
                  {service.shortDescription}
                </p>

                <div style={{ 
                  marginTop: '2rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: '#00D1C1', 
                  fontWeight: 700,
                  fontSize: '1.1rem'
                }}>
                  Learn More <span style={{ transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

         <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.125rem' }}>
              Not sure which treatment is right for you?
            </p>
            <Link to="/#contact" className="btn btn-primary" style={{ 
              padding: '1rem 3rem', 
              textDecoration: 'none',
              backgroundColor: '#00D1C1',
              borderColor: '#00D1C1',
              color: 'white',
              borderRadius: '9999px',
              fontSize: '1.125rem',
              fontWeight: 600,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              Schedule a Consultation
            </Link>
         </div>

      </div>
    </section>
  );
};


export default Services;
