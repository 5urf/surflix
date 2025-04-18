import { useShallow } from "zustand/shallow";
import useGetMovieDetail from "../../hooks/useGetMovieDetail";
import { useModalStore } from "../../store/modalStore";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import Modal from "../modal/Modal";
import MovieDetail from "./MovieDetail";

const MovieDetailModal = () => {
  const { movieId, closeModal, isOpen } = useModalStore(
    useShallow((state) => ({
      movieId: state.movieId,
      closeModal: state.closeModal,
      isOpen: state.isOpen,
    }))
  );
  const { data, isPending } = useGetMovieDetail(movieId);

  if (!isOpen) return null;

  return (
    <Modal onClose={closeModal}>
      {isPending || !data ? (
        <LoadingSpinner type='modal' />
      ) : (
        <MovieDetail detailData={data} />
      )}
    </Modal>
  );
};

export default MovieDetailModal;
