import style from './LogoutButton.module.scss'

import { useUserStore } from '@/entities/user/model/userStore'
import { memo } from 'react';

import { useNotificationStore } from '@/widgets/modals/Notification/useNotificationStore';


const LogoutButton = () => {
  const token = useUserStore((state) => state.token);
  const logout = useUserStore((state) => state.logout);
  const addNotification = useNotificationStore((state) => state.addNotification);

  if (!token) return null;

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      addNotification('Вы успешно вышли из аккаунта', 'success');
    } else {
      addNotification('Ошибка при выходе из аккаунта', 'error');
    }
  };

  return (
    <button className={style.body} onClick={handleLogout}>
      <img src="/img/buttons/exit/exit.png" alt="" className={style.img} />
      <p className={style.text}>Выйти из аккаунта</p>
    </button>
  );
};



export default memo(LogoutButton);