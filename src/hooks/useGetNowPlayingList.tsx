import { useQuery } from "@tanstack/react-query";
import MovieAPI from "../service/MovieAPI";

const useGetNowPlayingList = () => {
  return useQuery({
    queryKey: ["nowPlayingList"],
    queryFn: MovieAPI.fetchNowPlaying,
  });
};

export default useGetNowPlayingList;
