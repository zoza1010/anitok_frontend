import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/entities/user/model/userType';
import { logout as logoutApi } from '@/features/auth/api/authApi';

type UserStore = {
  user: User | null;
  token: string | null;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  clearAuth: () => void;
  logout: () => Promise<void>;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      clearAuth: () => {
        set({ user: null, token: null });
      },
      logout: async () => {
        const token = get().token;
        if (!token) {
          set({ user: null, token: null });
          return;
        }
        try {
          await logoutApi(token);
        } catch (e) {
          console.error('Logout API error:', e);
        }
        set({ user: null, token: null });
      },
    }),
    {
      name: 'auth',
    }
  )
);
