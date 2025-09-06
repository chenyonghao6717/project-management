import { StateCreator } from "zustand";

export interface StyleSlice {
  isDarkMode: boolean;
  setIsDarkMode: (status: boolean) => void;
}

export const createStyleSlice: StateCreator<StyleSlice, [], [], StyleSlice> = (
  set,
) => ({
  isDarkMode: false,
  setIsDarkMode: (status) => {
    set({
      isDarkMode: status,
    });
  },
});
