import React from 'react';
import './Card.css';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  selected?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  size = 'md',
  padding = 'md',
  className = '',
  onClick,
  hoverable = false,
  selected = false
}) => {
  const baseClass = 'card';
  const variantClass = `card--${variant}`;
  const sizeClass = `card--${size}`;
  const paddingClass = `card--padding-${padding}`;
  const hoverableClass = hoverable ? 'card--hoverable' : '';
  const selectedClass = selected ? 'card--selected' : '';
  const clickableClass = onClick ? 'card--clickable' : '';
  
  const cardClasses = [
    baseClass,
    variantClass,
    sizeClass,
    paddingClass,
    hoverableClass,
    selectedClass,
    clickableClass,
    className
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const CardElement = onClick ? 'div' : 'div';
  const cardProps = onClick ? {
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    tabIndex: 0,
    role: 'button',
    'aria-label': 'Clickable card'
  } : {};

  return (
    <CardElement className={cardClasses} {...cardProps}>
      {children}
    </CardElement>
  );
};

export default Card;
