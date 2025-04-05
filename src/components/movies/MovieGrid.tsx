import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const Container = styled.div`
  padding: 0 6rem;
  margin-top: 5rem;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;
`;

const CardWrapper = styled(motion.div)``;

const gridVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardItemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

interface IMovieGridProps {
  movies: Movie.MovieListResponse["results"];
}

const MovieGrid = ({ movies }: IMovieGridProps) => {
  return (
    <Container>
      <Grid variants={gridVariants} initial='initial' animate='animate'>
        {movies.slice(1).map((movie) => (
          <CardWrapper key={movie.id} variants={cardItemVariants}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              voteAverage={movie.vote_average}
            />
          </CardWrapper>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieGrid;
