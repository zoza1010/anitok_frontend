'use client';
import { forwardRef, InputHTMLAttributes } from 'react';
import style from './AuthInput.module.scss';

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, hint, error, className, ...rest }, ref) => {
    return (
      <div className={style.wrapper}>
        <label className={style.label}>
          {label}
          {hint && <span className={style.hint}>{hint}</span>}
        </label>
        <input
          ref={ref}
          className={`${style.input} ${error ? style.inputError : ''} ${className || ''}`}
          {...rest}
        />
        {error && <div className={style.error}>{error}</div>}
      </div>
    );
  }
);

AuthInput.displayName = 'AuthInput';

export default AuthInput;
