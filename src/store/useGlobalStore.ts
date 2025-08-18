import { create } from 'zustand';

interface GlobalStoreProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const useGlobalStore = create<GlobalStoreProps>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
}));
