'use client';
import { useRef, useState } from 'react';
import style from './AuthForm.module.scss';

import AuthInput from '@/shared/ui/inputs/AuthInput/AuthInput';
import {
  validateEmail,
  validatePassword,
} from '@/features/auth/model/validation';

import { login } from '@/features/auth/api/authApi';
import { useUserStore } from '@/entities/user/model/userStore';

const AuthForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const setUser = useUserStore(state => state.setUser);
  const setToken = useUserStore(state => state.setToken);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value.trim() || '';
    const password = passwordRef.current?.value.trim() || '';

    const validationErrors: { [key: string]: string } = {};

    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) validationErrors.email = emailValidation.error!;

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) validationErrors.password = passwordValidation.error!;

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await login(email, password);
        setToken(response.token);
        setUser(response.user);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrors({ general: error.message });
        } else {
          setErrors({ general: 'Произошла неизвестная ошибка' });
        }
      }
       finally {
        setLoading(false);
      }
    }
  };

  return (
    <form className={style.body} onSubmit={handleSubmit} noValidate>
      <AuthInput
        id="email"
        name="email"
        type="email"
        label="Почта"
        placeholder="Введите почту:"
        hint="Введите почту в формате example@mail.com"
        error={errors.email}
        ref={emailRef}
        disabled={loading}
      />

      <AuthInput
        id="password"
        name="password"
        type="password"
        label="Пароль"
        placeholder='Введите пароль:'
        hint='Можно использовать латинские буквы (A-Z, a-z), цифры (0-9) и спецсимволы: !"№%;:?()'
        error={errors.password}
        ref={passwordRef}
        disabled={loading}
      />

      <button
        className={style.submit}
        type="submit"
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? 'Вход...' : 'Войти'}
      </button>

      {errors.general && (
        <div className={style.errorMessage}>{errors.general}</div>
      )}
    </form>
  );
};

export default AuthForm;
