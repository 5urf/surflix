const BASE_URL = "https://movies-api.nomadcoders.workers.dev";

const fetchWithErrorHandling = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchPopular = async (): Promise<Movie.MovieListResponse> => {
  return fetchWithErrorHandling(`${BASE_URL}/popular`);
};

export const fetchNowPlaying =
  async (): Promise<Movie.MovieListWithDatesResponse> => {
    return fetchWithErrorHandling(`${BASE_URL}/now-playing`);
  };

export const fetchComingSoon =
  async (): Promise<Movie.MovieListWithDatesResponse> => {
    return fetchWithErrorHandling(`${BASE_URL}/coming-soon`);
  };

export const fetchMovieDetail = async (
  id: number
): Promise<Movie.MovieDetail> => {
  return fetchWithErrorHandling(`${BASE_URL}/movie?id=${id}`);
};
