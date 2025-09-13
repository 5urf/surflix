import { useShallow } from "zustand/shallow";
import useGetMovieDetail from "../../hooks/useGetMovieDetail";
import { useUIStore } from "../../store/uiStore";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import Modal from "../modal/Modal";
import MovieDetail from "./MovieDetail";

const MovieDetailModal = () => {
  const { movieId, closeModal } = useUIStore(
    useShallow((state) => ({
      movieId: state.movieId,
      closeModal: state.closeModal,
    }))
  );
  const { data, isPending } = useGetMovieDetail(movieId);

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
