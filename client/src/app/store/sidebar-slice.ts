import { StateCreator } from "zustand";

export interface SidebarSlice {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (status: boolean) => void;
}

export const createSidebarSlice: StateCreator<
  SidebarSlice,
  [],
  [],
  SidebarSlice
> = (set) => ({
  isSidebarCollapsed: false,
  setIsSidebarCollapsed : (status) => {
    set({
      isSidebarCollapsed: status,
    });
  },
});
