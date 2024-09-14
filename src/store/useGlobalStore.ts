import { create } from "zustand";

interface GlobalStoreProps {
  isLogedIn: boolean;
  setIsLogedIn: (isLogedIn: boolean) => void;
}

export const useGlobalStore = create<GlobalStoreProps>((set) => ({
  isLogedIn: false,
  setIsLogedIn: (isLogedIn: boolean) => set({ isLogedIn }),
}));
