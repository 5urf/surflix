import MainBanner from "./banner/MainBanner";
import MovieGrid from "./MovieGrid";

interface IMoviesProps {
  movies: Movie.MovieListResponse;
}

const Movies = ({ movies }: IMoviesProps) => {
  return (
    <>
      <MainBanner firstMovie={movies.results[0]} />
      <MovieGrid movies={movies.results} />
    </>
  );
};

export default Movies;
