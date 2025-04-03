import MainBanner from "./banner/MainBanner";
import MovieGrid from "./MovieGrid";

interface IMoviesProps {
  movies: Movie.MovieListResponse;
}

const Movies = ({ movies }: IMoviesProps) => {
  return (
    <>
      <MainBanner
        backdropPath={movies.results[0].backdrop_path}
        title={movies.results[0].title}
        overview={movies.results[0].overview}
      />
      <MovieGrid movies={movies.results} />
    </>
  );
};

export default Movies;
