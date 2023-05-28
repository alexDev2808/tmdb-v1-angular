export interface Movie {
  adult: boolean,
  backdrop_path: string,
  genres: Genres[],
  id: string,
  original_languaje: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  runtime: number,
  tagline: string
}

export interface Genres {
  id: number,
  name: string
}

export interface MovieResponse {
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number
}

export interface MovieImages {
  backdrops: [],
  id: number,
  logos: [],
  posters: UrlPosters[]
}

export interface UrlPosters {
  aspect_ratio: number,
  height: number,
  iso_639_1: string,
  file_path: string,
  vote_average: number,
  vote_count: number,
  width: number
}
