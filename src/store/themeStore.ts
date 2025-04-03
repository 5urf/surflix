// src/store/themeStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IThemeStore {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<IThemeStore>()(
  persist(
    (set) => ({
      isDarkMode: true,

      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "theme",
    }
  )
);
