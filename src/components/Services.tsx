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
    <section id="treatments" className="section-padding" style={{ backgroundColor: 'var(--surface-hover)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h4 style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
              Our Specialties
            </h4>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
              Advanced Regenerative Therapies
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              We offer cutting-edge non-surgical treatments to help you avoid invasive procedures, manage pain, and reclaim your active lifestyle.
            </p>
          </motion.div>
        </div>

        <motion.div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem' 
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
                backgroundColor: 'var(--surface)',
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
              }}
            >
              {/* Top Accent Line */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: 'var(--primary)', opacity: index % 2 === 0 ? 1 : 0.8 }} />
              
              <div 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '12px', 
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <service.icon size={28} />
              </div>
              
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                {service.title}
              </h3>
              
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {service.shortDescription}
              </p>
              
              <Link 
                to={`/services/${service.id}`}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--secondary)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: 0,
                  textDecoration: 'none'
                }}
              >
                Learn More <span style={{ transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

         <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Not sure which treatment is right for you?</p>
            <a href="/#contact" className="btn btn-primary" style={{ padding: '0.875rem 2.5rem', textDecoration: 'none' }}>
              Schedule a Consultation
            </a>
         </div>

      </div>
    </section>
  );
};

export default Services;
