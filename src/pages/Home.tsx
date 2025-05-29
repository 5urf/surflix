import MoviePageWrapper from "../components/common/MoviePageWrapper";
import useGetPopularList from "../hooks/useGetPopularList";

const Home = () => {
  const queryResult = useGetPopularList();
  return <MoviePageWrapper queryResult={queryResult} />;
};

export default Home;
