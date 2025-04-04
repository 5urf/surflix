// components/movies/MovieCard.tsx
import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import { useShallow } from "zustand/shallow";
import { useModalStore } from "../../store/modalStore";
import { makeImagePath } from "../../utils/imgUtil";

const Card = styled(motion.div)`
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
  }
`;

const PosterContainer = styled.div`
  width: 100%;
  position: relative;
  padding-top: 150%;
  overflow: hidden;
`;

const Poster = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
`;

const Info = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;

  transition: opacity 0.3s ease-in-out;
`;

const MovieTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const Rating = styled.span`
  font-size: 1.2rem;
  color: #ffd700;
`;

interface IMovieCardProps {
  id: number;
  title: string;
  posterPath: string;
  voteAverage: number;
}

const cardVariants: Variants = {
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
    },
  },
};

const MovieCard = ({ id, title, posterPath, voteAverage }: IMovieCardProps) => {
  const { openModal } = useModalStore(
    useShallow((state) => ({
      openModal: state.openModal,
    }))
  );
  return (
    <Card
      variants={cardVariants}
      whileHover='hover'
      layoutId={String(id)}
      onClick={() => openModal(id)}
    >
      <PosterContainer>
        <Poster src={`${makeImagePath(posterPath, "w500")}`} alt={title} />
      </PosterContainer>
      <Info>
        <MovieTitle>{title}</MovieTitle>
        <Rating>★ {voteAverage.toFixed(1)}</Rating>
      </Info>
    </Card>
  );
};

export default MovieCard;
