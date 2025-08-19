import React, { forwardRef } from 'react';
import './Input.css';

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outlined' | 'filled';
  error?: boolean;
  errorMessage?: string;
  label?: string;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  disabled = false,
  readOnly = false,
  required = false,
  name,
  id,
  className = '',
  size = 'md',
  variant = 'default',
  error = false,
  errorMessage,
  label,
  helperText,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  autoComplete,
  maxLength,
  minLength,
  pattern,
  ...props
}, ref) => {
  const baseClass = 'input';
  const sizeClass = `input--${size}`;
  const variantClass = `input--${variant}`;
  const errorClass = error ? 'input--error' : '';
  const fullWidthClass = fullWidth ? 'input--full-width' : '';
  const disabledClass = disabled ? 'input--disabled' : '';
  const readOnlyClass = readOnly ? 'input--readonly' : '';
  
  const inputClasses = [
    baseClass,
    sizeClass,
    variantClass,
    errorClass,
    fullWidthClass,
    disabledClass,
    readOnlyClass,
    className
  ].filter(Boolean).join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;
    onChange?.(e.target.value);
  };

  const renderIcon = () => {
    if (!icon) return null;
    return <span className={`input__icon input__icon--${iconPosition}`}>{icon}</span>;
  };

  const renderLabel = () => {
    if (!label) return null;
    return (
      <label htmlFor={id} className="input__label">
        {label}
        {required && <span className="input__required">*</span>}
      </label>
    );
  };

  const renderHelperText = () => {
    if (!helperText && !errorMessage) return null;
    return (
      <div className={`input__helper ${error ? 'input__helper--error' : ''}`}>
        {errorMessage || helperText}
      </div>
    );
  };

  return (
    <div className="input-wrapper">
      {renderLabel()}
      <div className="input__container">
        {icon && iconPosition === 'left' && renderIcon()}
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          autoComplete={autoComplete}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          {...props}
        />
        {icon && iconPosition === 'right' && renderIcon()}
      </div>
      {renderHelperText()}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
