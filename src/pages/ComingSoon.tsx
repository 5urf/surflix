import MoviePageWrapper from "../components/common/MoviePageWrapper";
import useGetComingSoonList from "../hooks/useGetComingSoonList";

const ComingSoon = () => {
  const queryResult = useGetComingSoonList();
  return <MoviePageWrapper queryResult={queryResult} />;
};

export default ComingSoon;
