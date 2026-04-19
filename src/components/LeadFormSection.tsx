import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, Clock } from 'lucide-react';

const LeadFormSection: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      const response = await fetch('http://localhost:5001/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch (error) {
      console.error('Lead submission error:', error);
      setFormState('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem 1.25rem',
    borderRadius: '12px',
    border: '1px solid var(--border)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    marginBottom: '1.25rem'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'var(--primary)',
    marginBottom: '0.5rem',
    marginLeft: '0.25rem'
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '4rem',
          alignItems: 'start'
        }}>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
              Get In Touch
            </h4>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
              Schedule Your Private Consultation
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Take the first step towards a pain-free life. Our specialists are ready to discuss your personalized treatment plan and help you regain your vitality.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h5 style={{ margin: 0, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Call Us Directly</h5>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>+1 469-215-8538</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h5 style={{ margin: 0, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email Inquiries</h5>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>Info@valorpainwellness.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h5 style={{ margin: 0, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Clinic Hours</h5>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass"
            style={{ 
              padding: '3rem', 
              borderRadius: '24px', 
              backgroundColor: 'white',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)'
            }}
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={{ textAlign: 'center', padding: '2rem 0' }}
                >
                  <div style={{ color: '#10b981', marginBottom: '1.5rem' }}>
                    <CheckCircle2 size={64} style={{ margin: '0 auto' }} />
                  </div>
                  <h3 style={{ marginBottom: '1rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Thank you for reaching out. A patient care coordinator will contact you within 24 hours to schedule your consultation.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="btn btn-outline"
                    style={{ width: '100%' }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : formState === 'error' ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={{ textAlign: 'center', padding: '2rem 0' }}
                >
                  <div style={{ color: '#ef4444', marginBottom: '1.5rem' }}>
                    <AlertCircle size={64} style={{ margin: '0 auto' }} />
                  </div>
                  <h3 style={{ marginBottom: '1rem' }}>Something went wrong</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    We couldn't send your request at this moment. Please check your connection or try again later.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                >
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={labelStyle}>Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="John Doe" 
                      style={inputStyle}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      onFocus={(e) => e.target.style.borderColor = 'var(--secondary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={labelStyle}>Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@example.com" 
                        style={inputStyle}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        onFocus={(e) => e.target.style.borderColor = 'var(--secondary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={labelStyle}>Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="(555) 000-0000" 
                        style={inputStyle}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        onFocus={(e) => e.target.style.borderColor = 'var(--secondary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={labelStyle}>Service of Interest</label>
                    <select 
                      required 
                      style={inputStyle}
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      onFocus={(e) => e.target.style.borderColor = 'var(--secondary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    >
                      <option value="" disabled>Select a treatment...</option>
                      <option value="stem-cell">Stem Cell Therapy</option>
                      <option value="prp">PRP Injection</option>
                      <option value="joint-injections">Joint & Facet Injections</option>
                      <option value="a2m">A2M Therapy</option>
                      <option value="nerve-blocks">Nerve Root Blocks</option>
                      <option value="scs">Spinal Cord Stimulation</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={labelStyle}>How can we help?</label>
                    <textarea 
                      placeholder="Describe your symptoms or goals..." 
                      style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      onFocus={(e) => e.target.style.borderColor = 'var(--secondary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={formState === 'submitting'}
                    style={{ 
                      width: '100%', 
                      padding: '1.125rem', 
                      fontSize: '1.1rem',
                      display: 'flex',
                      gap: '0.75rem',
                      opacity: formState === 'submitting' ? 0.7 : 1
                    }}
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Request Consultation'}
                    <Send size={18} />
                  </button>
                  
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                    <AlertCircle size={12} /> HIPAA Compliant & Secure Data Transmission
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
