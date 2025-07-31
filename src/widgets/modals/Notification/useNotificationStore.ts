import { create } from 'zustand';
import { ReactNode } from 'react';


export type NotificationType = 'success' | 'error' | 'info';

export type Notification = {
  id: string;
  message: ReactNode;
  type: NotificationType;
  autoClose?: number | false;
  action?: ReactNode;
};

interface NotificationStore {
  notifications: Notification[];

  addNotification: (
    message: ReactNode,
    type?: NotificationType,
    autoClose?: number | false,
    action?: ReactNode,
  ) => void;

  removeNotification: (id: string) => void;
}


export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: [],

  addNotification: (message, type = 'info', autoClose = 4, action) => {
    const state = get();

    const isDuplicate = state.notifications.some(
      (n) => n.message === message && n.type === type,
    );
    if (isDuplicate || state.notifications.length >= 4) return;

    const id = Date.now().toString();

    const newNotification: Notification = {
      id,
      message,
      type,
      autoClose,
      action,
    };

    set({ notifications: [...state.notifications, newNotification] });

    if (typeof autoClose === 'number') {
      setTimeout(() => {
        set({
          notifications: get().notifications.filter((n) => n.id !== id),
        });
      }, autoClose * 1000);
    }
  },

  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));
