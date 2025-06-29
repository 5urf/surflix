declare namespace Movie {
  interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  interface Dates {
    maximum: Date;
    minimum: Date;
  }

  interface MovieListResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }

  interface MovieListWithDatesResponse extends MovieListResponse {
    dates: Dates;
  }

  interface Genre {
    id: number;
    name: string;
  }

  interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }

  interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }

  interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }

  interface MovieDetail {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null | object;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
}

export as namespace Movie;
