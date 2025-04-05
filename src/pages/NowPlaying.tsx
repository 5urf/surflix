import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import Movies from "../components/movies/Movies";
import useGetNowPlayingList from "../hooks/useGetNowPlayingList";

const NowPlaying = () => {
  const { data, isPending } = useGetNowPlayingList();

  if (isPending || !data) return <LoadingSpinner />;

  return <Movies movies={data} />;
};

export default NowPlaying;
