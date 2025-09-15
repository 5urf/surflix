import { create } from "zustand";

interface IUIState {
  isModalOpen: boolean;
  isMenuOpen: boolean;
  movieId: number | null;
  layoutId?: string;
}

interface IUIStore extends IUIState {
  openModal: (id: number, layoutId?: string) => void;
  closeModal: () => void;
  toggleMenu: () => void;
}

const initialState: IUIState = {
  isModalOpen: false,
  isMenuOpen: false,
  movieId: null,
  layoutId: undefined,
};

export const useUIStore = create<IUIStore>((set) => ({
  ...initialState,

  openModal: (id: number, layoutId?: string) =>
    set({
      isModalOpen: true,
      movieId: id,
      layoutId,
    }),

  closeModal: () =>
    set({
      isModalOpen: false,
      movieId: null,
      layoutId: undefined,
    }),

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
