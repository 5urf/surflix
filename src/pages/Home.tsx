import Movies from "../components/movies/Movies";
import useGetPopularList from "../hooks/useGetPopularList";

const Home = () => {
  const { data, isPending } = useGetPopularList();

  //FIXME - 임시
  if (isPending || !data) return <div>Loading ...</div>;

  return <Movies movies={data} />;
};

export default Home;
