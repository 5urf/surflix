import { UseQueryResult } from "@tanstack/react-query";
import styled from "styled-components";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import Movies from "../movies/Movies";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 2rem;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 2.4rem;
  text-align: center;
  line-height: 1.4;

  ${({ theme }) => theme.mobile} {
    font-size: 1.8rem;
    padding: 0 2rem;
  }
`;

const RetryButton = styled.button`
  padding: 1.2rem 2.4rem;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f40612;
  }

  ${({ theme }) => theme.mobile} {
    font-size: 1.4rem;
    padding: 1rem 2rem;
  }
`;

interface IMoviePageWrapperProps {
  queryResult: UseQueryResult<
    Movie.MovieListResponse | Movie.MovieListWithDatesResponse
  >;
}

const MoviePageWrapper = ({ queryResult }: IMoviePageWrapperProps) => {
  const { data, isPending, error, refetch } = queryResult;

  if (isPending) return <LoadingSpinner />;

  if (error) {
    return (
      <ErrorContainer>
        <ErrorMessage>영화 정보를 불러오는데 실패했습니다.</ErrorMessage>
        <ErrorMessage>잠시 후 다시 시도해주세요.</ErrorMessage>
        <RetryButton onClick={() => refetch()}>다시 시도</RetryButton>
      </ErrorContainer>
    );
  }

  if (!data) return null;

  return <Movies movies={data} />;
};

export default MoviePageWrapper;
