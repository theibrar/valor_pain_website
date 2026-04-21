import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import CTASection from '../components/CTASection';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id || !(id in servicesData)) {
    return (
      <div className="container section-padding" style={{ textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Service Not Found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Return Home</Link>
      </div>
    );
  }

  const service = servicesData[id as keyof typeof servicesData];

  return (
    <div>
      {/* Service Hero */}
      <section 
        style={{
          position: 'relative',
          paddingTop: '8rem',
          paddingBottom: '5rem',
          backgroundColor: 'var(--primary-dark)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${service.heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary-dark to-transparent" style={{ background: 'linear-gradient(90deg, rgba(15,33,54,0.95) 0%, rgba(27,58,92,0.85) 50%, rgba(27,58,92,0.6) 100%)' }} />

        <div className="container relative z-10" style={{ color: 'white' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
              <ChevronLeft size={16} /> Back to Home
            </Link>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                 <service.icon size={20} />
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', margin: 0 }}>{service.title}</h1>
            </div>
            
            <p style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '700px', lineHeight: 1.6, marginTop: '1.5rem' }}>
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            
            <div style={{ paddingRight: '2rem' }}>
              {service.content.map((section, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  style={{ marginBottom: '4rem' }}
                >
                  <h3 style={{ 
                    fontSize: '2rem', 
                    marginBottom: '1.25rem', 
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-serif)',
                    borderLeft: '4px solid var(--secondary)',
                    paddingLeft: '1.5rem'
                  }}>
                    {section.heading}
                  </h3>
                  <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.8 }}>{section.text}</p>
                </motion.div>
              ))}

              {/* Why Choose Us Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ 
                  marginTop: '5rem', 
                  padding: '4rem 3rem', 
                  backgroundColor: '#f1f5f9', 
                  borderRadius: '32px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative background element */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                  zIndex: 0
                }} />

                <h3 style={{ 
                  fontSize: '2.25rem', 
                  marginBottom: '3rem', 
                  color: '#1B3A5C',
                  fontFamily: 'var(--font-serif)',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1
                }}>
                  Why Choose Us for {service.title}
                </h3>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '2rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {service.whyChooseUs.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ translateY: -5 }}
                      style={{ 
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '20px',
                        display: 'flex',
                        gap: '1.25rem',
                        alignItems: 'flex-start',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      <div style={{ 
                        width: '44px', 
                        height: '44px', 
                        borderRadius: '12px', 
                        backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                        color: 'var(--secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <CheckCircle2 size={24} />
                      </div>
                      <p style={{ 
                        fontWeight: 600, 
                        color: '#1B3A5C', 
                        fontSize: '1.15rem',
                        lineHeight: 1.4,
                        margin: 0,
                        paddingTop: '0.5rem'
                      }}>
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery Addition */}
              {service.gallery && (
                <div style={{ marginTop: '5rem' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary)', fontFamily: 'var(--font-serif)' }}>
                    Procedure Visuals
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                    {service.gallery.map((img, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        style={{ 
                          borderRadius: '20px', 
                          overflow: 'hidden', 
                          aspectRatio: '16/10',
                          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <img 
                          src={img} 
                          alt={`${service.title} visual ${i + 1}`} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar with Benefits & Info */}
            <div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: 'var(--surface-hover)',
                  borderRadius: '16px',
                  padding: '2.5rem 2rem',
                  border: '1px solid var(--border)',
                  position: 'sticky',
                  top: '120px'
                }}
              >
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--primary)' }}>Treatment Benefits</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <CheckCircle2 size={20} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '1.05rem', color: 'var(--text)' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', color: 'var(--primary)' }}>Schedule Your Assessment</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Not sure if this therapy is right for you? Consult with our specialists.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a href="tel:+14692158538" className="btn btn-primary" style={{ width: '100%', gap: '0.5rem' }}>
                    Call +1 469-215-8538 <ArrowRight size={18} />
                  </a>
                  <a href="/#contact" className="btn btn-outline" style={{ width: '100%', gap: '0.5rem' }}>
                    Book Online
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default ServiceDetailPage;
