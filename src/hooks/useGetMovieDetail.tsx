import { useQuery } from "@tanstack/react-query";
import MovieAPI from "../service/MovieAPI";

const useGetMovieDetail = (id: string) => {
  return useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => MovieAPI.fetchMovieDetail(id),
    enabled: !!id,
  });
};

export default useGetMovieDetail;
