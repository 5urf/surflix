import { create } from "zustand";

interface IModalState {
  isOpen: boolean;
  movieId: number | null;
}

interface IModalStore extends IModalState {
  openModal: (id: number) => void;
  closeModal: () => void;
}

const initialState: IModalState = {
  isOpen: false,
  movieId: null,
};

export const useModalStore = create<IModalStore>((set) => ({
  ...initialState,

  openModal: (id: number) =>
    set({
      isOpen: true,
      movieId: id,
    }),

  closeModal: () =>
    set({
      isOpen: false,
      movieId: null,
    }),
}));
