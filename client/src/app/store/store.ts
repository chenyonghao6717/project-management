import { createSidebarSlice, SidebarSlice } from "@/app/store/sidebar-slice";
import { create } from "zustand";
import { createStyleSlice, StyleSlice } from "./style-slice";
import { createProjectsSlice, ProjectsSlice } from "./projects-slices";

type StoreState = SidebarSlice & StyleSlice;

export const useStore = create<StoreState>()((...a) => ({
  ...createSidebarSlice(...a),
  ...createStyleSlice(...a),
}));
