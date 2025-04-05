import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import Movies from "../components/movies/Movies";
import useGetComingSoonList from "../hooks/useGetComingSoonList";

const ComingSoon = () => {
  const { data, isPending } = useGetComingSoonList();

  if (isPending || !data) return <LoadingSpinner />;

  return <Movies movies={data} />;
};

export default ComingSoon;
