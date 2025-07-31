'use client';

import { memo, useEffect, useRef, useState, useCallback } from 'react';
import {
  useNotificationStore,
  Notification,
} from '@/widgets/modals/Notification/useNotificationStore';

import styles from './NotificationList.module.scss';
import CloseIcon from '@/shared/ui/cross/CrossCloseButton/CrossCloseButton';


const NotificationItem = memo(function NotificationItem({
  id,
  message,
  type,
  autoClose = 4,
  action,              
  onClose,
}: Notification & { onClose: (id: string) => void }) {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => onClose(id), 300);
  }, [id, onClose]);

  const startTimer = useCallback(() => {
    if (typeof autoClose === 'number' && !isHoveredRef.current) {
      timerRef.current = setTimeout(handleClose, autoClose * 1000);
    }
  }, [autoClose, handleClose]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  return (
    <div
      className={`${styles.notification} ${styles[type]} ${
        isClosing ? styles.exiting : ''
      }`}
      onMouseEnter={() => {
        isHoveredRef.current = true;
        clearTimer();
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        startTimer();
      }}
    >
      <div className={styles.content}>{message}</div>

      <button className={styles.closeButton} onClick={handleClose}>
        <CloseIcon/>
      </button>

      <div className={styles.actionsRow}>
        <button className={styles.bottomCloseButton} onClick={handleClose}>
          Закрити
        </button>

        {action && <div className={` ${styles.customAction}`}>{action}</div>}
      </div>
    </div>
  );
});

export default function NotificationList() {
  const notifications = useNotificationStore((s) => s.notifications);
  const removeNotification = useNotificationStore((s) => s.removeNotification);

  if (notifications.length === 0) return null;

  return (

      <div className={styles.container}>
        {notifications.map((n) => (
          <NotificationItem key={n.id} {...n} onClose={removeNotification} />
        ))}
      </div>
  );
}
