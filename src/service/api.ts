const BASE_URL = "https://movies-api.nomadcoders.workers.dev";

export const fetchPopular = async (): Promise<Movie.MovieListResponse> => {
  const response = await fetch(`${BASE_URL}/popular`);
  return response.json();
};

export const fetchNowPlaying =
  async (): Promise<Movie.MovieListWithDatesResponse> => {
    const response = await fetch(`${BASE_URL}/now-playing`);
    return response.json();
  };

export const fetchComingSoon =
  async (): Promise<Movie.MovieListWithDatesResponse> => {
    const response = await fetch(`${BASE_URL}/coming-soon`);
    return response.json();
  };

export const fetchMovieDetail = async (
  id: string
): Promise<Movie.MovieDetail> => {
  const response = await fetch(`${BASE_URL}/movie?id=${id}`);
  return response.json();
};
