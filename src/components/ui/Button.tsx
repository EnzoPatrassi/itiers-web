import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button 
      className={`
        bg-brand-primary text-surface-background 
        px-6 py-3 rounded-sm font-body font-bold text-lg
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-md active:scale-95
        animate-breath
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};