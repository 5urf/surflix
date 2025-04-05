import { create } from "zustand";

interface IModalState {
  isOpen: boolean;
  movieId: number | null;
  layoutId?: string;
}

interface IModalStore extends IModalState {
  openModal: (id: number, layoutId?: string) => void;
  closeModal: () => void;
}

const initialState: IModalState = {
  isOpen: false,
  movieId: null,
  layoutId: undefined,
};

export const useModalStore = create<IModalStore>((set) => ({
  ...initialState,

  openModal: (id: number, layoutId?: string) =>
    set({
      isOpen: true,
      movieId: id,
      layoutId: layoutId,
    }),

  closeModal: () =>
    set({
      isOpen: false,
      movieId: null,
      layoutId: undefined,
    }),
}));
