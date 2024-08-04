import { create } from "zustand";

export const useColor = create((set) => {
  return {
    colorToEdit: null,
    setColorToEdit: (color) => set({ colorToEdit: color }),
    clearColorToEdit: () => set({ colorToEdit: null }),
  };
});
