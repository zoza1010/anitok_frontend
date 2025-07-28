type ValidationResult = {
  valid: boolean;
  error?: string;
};

export function validateEmail(email: string): ValidationResult {
  if (!email) return { valid: false, error: "Email обязателен" };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: "Неверный формат email" };
  }

  return { valid: true };
}

export function validatePassword(password: string): ValidationResult {
  if (!password) return { valid: false, error: "Пароль обязателен" };

  if (password.length < 8) {
    return { valid: false, error: "Пароль должен быть минимум 8 символов" };
  }

  const allowedCharsRegex = /^[A-Za-z0-9!"№%;:?()]+$/;
  if (!allowedCharsRegex.test(password)) {
    return {
      valid: false,
      error:
        'Пароль может содержать только латинские буквы (A-Z, a-z), цифры (0-9) и спецсимволы: !"№%;:?()',
    };
  }


  return { valid: true };
}

export function validateUsername(username: string): ValidationResult {
  if (!username) return { valid: false, error: "Имя пользователя обязательно" };

  if (username.length < 4) {
    return { valid: false, error: "Имя пользователя должно быть минимум 4 символа" };
  }

  return { valid: true };
}
