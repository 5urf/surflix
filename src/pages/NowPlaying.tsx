import MoviePageWrapper from "../components/common/MoviePageWrapper";
import useGetNowPlayingList from "../hooks/useGetNowPlayingList";

const NowPlaying = () => {
  const queryResult = useGetNowPlayingList();
  return <MoviePageWrapper queryResult={queryResult} />;
};

export default NowPlaying;
