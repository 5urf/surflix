import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetail } from "../service/api";

const useGetMovieDetail = (id: string) => {
  return useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => fetchMovieDetail(id),
    enabled: !!id,
  });
};

export default useGetMovieDetail;
