'use client';
import { useRef, useState } from 'react';
import style from './RegisterForm.module.scss';

import AuthInput from '@/shared/ui/inputs/AuthInput/AuthInput';
import {
  validateEmail,
  validatePassword,
  validateUsername
} from '@/features/auth/model/validation';
import { register } from '@/features/auth/api/authApi';
import { useUserStore } from '@/entities/user/model/userStore';

const RegisterForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const setUser = useUserStore(state => state.setUser);
  const setToken = useUserStore(state => state.setToken);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const username = usernameRef.current?.value.trim() || '';
    const email = emailRef.current?.value.trim() || '';
    const password = passwordRef.current?.value.trim() || '';
    const confirmPassword = confirmPasswordRef.current?.value.trim() || '';

    const validationErrors: { [key: string]: string } = {};

    const usernameValidation = validateUsername(username);
    if (!usernameValidation.valid) validationErrors.username = usernameValidation.error!;

    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) validationErrors.email = emailValidation.error!;

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) validationErrors.password = passwordValidation.error!;

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Пароли не совпадают';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await register(username, email, password, confirmPassword);
        setToken(response.token);
        setUser(response.user);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrors({ general: error.message });
        } else {
          setErrors({ general: 'Произошла неизвестная ошибка' });
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form className={style.body} onSubmit={handleSubmit} noValidate>
      <AuthInput
        id="username"
        name="username"
        type="text"
        label="Имя пользователя"
        placeholder="Введите имя пользователя:"
        hint="Имя пользователя должно состоять минимум из 4 символов"
        error={errors.username}
        ref={usernameRef}
      />

      <AuthInput
        id="email"
        name="email"
        type="email"
        label="Почта"
        placeholder="Введите почту:"
        hint="Введите почту в формате example@mail.com"
        error={errors.email}
        ref={emailRef}
      />

      <AuthInput
        id="password"
        name="password"
        type="password"
        label="Пароль"
        placeholder="Введите пароль:"
        hint='Можно использовать латинские буквы (A-Z, a-z), цифры (0-9) и спецсимволы: !"№%;:?()'
        error={errors.password}
        ref={passwordRef}
      />

      <AuthInput
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        label="Повторите пароль"
        placeholder="Повторите пароль:"
        hint="Пароли должны совпадать"
        error={errors.confirmPassword}
        ref={confirmPasswordRef}
      />

      <button className={style.submit} type="submit" disabled={loading}>
        {loading ? 'Регистрируем...' : 'Зарегистрироваться'}
      </button>

      {errors.general && (
        <div className={style.errorMessage}>{errors.general}</div>
      )}
    </form>
  );
};

export default RegisterForm;
