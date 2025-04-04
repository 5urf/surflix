import { useShallow } from "zustand/shallow";
import useGetMovieDetail from "../../hooks/useGetMovieDetail";
import { useModalStore } from "../../store/modalStore";
import MovieDetailModal from "./MovieDetailModal";

const MovieDetailModalContainer = () => {
  const { movieId } = useModalStore(
    useShallow((state) => ({
      movieId: state.movieId,
    }))
  );
  const { data, isPending } = useGetMovieDetail(movieId);

  //FIXME - 초안 수정 예정
  if (isPending || !data) return <div>로딩</div>;

  return <MovieDetailModal detailData={data} />;
};

export default MovieDetailModalContainer;
