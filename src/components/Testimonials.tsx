import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: "After 5 years of chronic knee pain and being told surgery was my only option, I found Valor. Their stem cell therapy completely changed my life. I'm back to playing golf and hiking without pain.",
      author: "Michael T.",
      treatment: "Regenerative Cellular Therapy",
      rating: 5
    },
    {
      id: 2,
      text: "The team at Valor Pain & Wellness truly cares. Dr. Smith took the time to explain everything to me. The PRP treatments I received for my shoulder have given me 100% of my mobility back.",
      author: "Sarah J.",
      treatment: "PRP Injection",
      rating: 5
    },
    {
      id: 3,
      text: "I was hesitant at first, but the results speak for themselves. The nerve root block completely eliminated the sciatica pain I'd been suffering from for months. Highly recommend this clinic.",
      author: "David L.",
      treatment: "Nerve Root Block",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding" style={{ backgroundColor: 'var(--surface-hover)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h4 style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            Testimonials
          </h4>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Patient Transformations
          </h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Decorative Quote Icon */}
          <div style={{ position: 'absolute', top: '-2rem', left: '-2rem', color: 'var(--border)', opacity: 0.5, zIndex: 0 }}>
            <Quote size={120} />
          </div>

          <div 
            className="glass" 
            style={{ 
              padding: '3rem 4rem', 
              borderRadius: '24px', 
              position: 'relative', 
              zIndex: 1,
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.5rem' }}>
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                
                <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--text)', marginBottom: '2rem', fontStyle: 'italic' }}>
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div>
                  <h5 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>
                    {testimonials[currentIndex].author}
                  </h5>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {testimonials[currentIndex].treatment}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <button 
              onClick={prevTestimonial}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                backgroundColor: 'white', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--primary)',
                transition: 'all 0.2s',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--surface-hover)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}
            >
              <ChevronLeft size={20} />
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: idx === currentIndex ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: idx === currentIndex ? 'var(--primary)' : 'var(--border)',
                    transition: 'all 0.3s ease',
                    padding: 0
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                backgroundColor: 'white', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--primary)',
                transition: 'all 0.2s',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--surface-hover)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
