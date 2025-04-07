import React from 'react';

export default function Button({ href, children, style, target, rel }) {
  const baseStyle = {
    display: 'inline-block',
    padding: '0.8rem 1.5rem',
    marginTop: '1.5rem',
    background: 'linear-gradient(90deg, #0056b3, #007bff)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '30px',
    fontWeight: 600,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    ...style
  };

  return (
    <a 
      href={href} 
      style={baseStyle}
      target={target}
      rel={rel}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
      }}
    >
      {children}
    </a>
  );
}
