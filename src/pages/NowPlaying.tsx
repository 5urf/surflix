import Movies from "../components/movies/Movies";
import useGetNowPlayingList from "../hooks/useGetNowPlayingList";

const NowPlaying = () => {
  const { data, isPending } = useGetNowPlayingList();

  //FIXME - 임시
  if (isPending || !data) return <div>Loading ...</div>;

  return <Movies movies={data} />;
};

export default NowPlaying;
