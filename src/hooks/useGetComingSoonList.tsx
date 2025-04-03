import { useQuery } from "@tanstack/react-query";
import MovieAPI from "../service/MovieAPI";

const useGetComingSoonList = () => {
  return useQuery({
    queryKey: ["comingSoonList"],
    queryFn: MovieAPI.fetchComingSoon,
  });
};

export default useGetComingSoonList;
