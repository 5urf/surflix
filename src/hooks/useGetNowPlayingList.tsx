import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchNowPlaying } from "../service/api";

const useGetNowPlayingList = () => {
  return useQuery({
    queryKey: ["nowPlayingList"],
    queryFn: fetchNowPlaying,
    placeholderData: keepPreviousData,
  });
};

export default useGetNowPlayingList;
