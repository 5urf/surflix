import { useQuery } from "@tanstack/react-query";
import { fetchNowPlaying } from "movieAPI";

const useGetNowPlayingList = () => {
  return useQuery({
    queryKey: ["nowPlayingList"],
    queryFn: fetchNowPlaying,
  });
};

export default useGetNowPlayingList;
