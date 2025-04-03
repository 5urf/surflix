const BASE_URL = "https://movies-api.nomadcoders.workers.dev";

class MovieAPI {
  static async fetchPopular() {
    const response = await fetch(`${BASE_URL}/popular`);
    return response.json();
  }

  static async fetchNowPlaying() {
    const response = await fetch(`${BASE_URL}/now-playing`);
    return response.json();
  }

  static async fetchComingSoon() {
    const response = await fetch(`${BASE_URL}/coming-soon`);
    return response.json();
  }

  static async fetchMovieDetail(id: string) {
    const response = await fetch(`${BASE_URL}/movie?id=${id}`);
    return response.json();
  }
}

export default MovieAPI;
