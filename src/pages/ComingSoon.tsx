import Movies from "../components/movies/Movies";
import useGetComingSoonList from "../hooks/useGetComingSoonList";

const ComingSoon = () => {
  const { data, isPending } = useGetComingSoonList();

  //FIXME - 임시
  if (isPending || !data) return <div>Loading ...</div>;

  return <Movies movies={data} />;
};

export default ComingSoon;
