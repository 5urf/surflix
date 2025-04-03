import { useQuery } from "@tanstack/react-query";
import MovieAPI from "../service/MovieAPI";

const useGetPopularList = () => {
  return useQuery({
    queryKey: ["popularList"],
    queryFn: MovieAPI.fetchPopular,
  });
};

export default useGetPopularList;
