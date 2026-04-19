import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative flex flex-col items-center">
        {/* Navy Blue Star */}
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill={isDark ? "var(--primary)" : "#ffffff"} 
          className="mb-1 z-10"
          style={{ 
            filter: isDark ? 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' : 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))' 
          }}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>

        {/* VALOR Text with border */}
        <div className="relative group">
          {/* Top Line Gap specifically for the star to sit in */ }
          <div 
            className="absolute top-0 left-0 w-full flex justify-between" 
            style={{ width: '100%', height: '1px', zIndex: 0 }}
          >
            <div style={{ width: '40%', height: '100%', backgroundColor: isDark ? 'var(--primary)' : '#ffffff' }}></div>
            <div style={{ width: '20%', height: '100%' }}></div> {/* gap for star */}
            <div style={{ width: '40%', height: '100%', backgroundColor: isDark ? 'var(--primary)' : '#ffffff' }}></div>
          </div>
          
          <div 
            style={{ 
              border: `1px solid ${isDark ? 'var(--primary)' : '#ffffff'}`,
              borderTop: 'none', 
              padding: '0.5rem 1.5rem',
              display: 'inline-block'
            }}
          >
            <h1 
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: isDark ? 'var(--primary)' : '#ffffff',
                fontSize: '2.5rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                lineHeight: 1,
                margin: 0
              }}
            >
              VALOR
            </h1>
          </div>
        </div>

        {/* PAIN & WELLNESS Text */}
        <p 
          style={{ 
            fontFamily: 'var(--font-sans)',
            color: isDark ? 'var(--primary-light)' : '#e2e8f0',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.3em',
            marginTop: '0.75rem',
            textTransform: 'uppercase'
          }}
        >
          Pain & Wellness
        </p>
      </div>
    </div>
  );
};

export default Logo;
