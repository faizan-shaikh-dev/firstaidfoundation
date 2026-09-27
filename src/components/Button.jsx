import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' (red), 'secondary' (blue), 'outline', 'white'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  type = 'button',
  icon: Icon
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm';

  const variants = {
    primary: 'bg-[#EB1F23] hover:bg-[#B91417] text-white focus:ring-[#EB1F23]',
    secondary: 'bg-[#184E82] hover:bg-[#0F3356] text-white focus:ring-[#184E82]',
    outline: 'border-2 border-[#184E82] text-[#184E82] hover:bg-[#184E82] hover:text-white focus:ring-[#184E82]',
    white: 'bg-white text-[#184E82] hover:bg-slate-100 focus:ring-white shadow-md'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
        {Icon && <Icon className="w-5 h-5 ml-1" />}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {children}
        {Icon && <Icon className="w-5 h-5 ml-1" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
      {Icon && <Icon className="w-5 h-5 ml-1" />}
    </button>
  );
}
