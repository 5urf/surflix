import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import Movies from "../components/movies/Movies";
import useGetPopularList from "../hooks/useGetPopularList";

const Home = () => {
  const { data, isPending } = useGetPopularList();

  if (isPending || !data) return <LoadingSpinner />;

  return <Movies movies={data} />;
};

export default Home;
