import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetail } from "../service/api";

const useGetMovieDetail = (id: number | null) => {
  return useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => (id ? fetchMovieDetail(id) : null),
    enabled: !!id,
  });
};

export default useGetMovieDetail;
