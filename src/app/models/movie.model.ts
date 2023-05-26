export interface Movie {
  // id: string,
  // title: string,
  // poster: string,
  // overview: string
  adult: boolean,
  backdrop_path: string,
  genre_ids: [],
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
  vote_count: number
}

export interface MovieResponse {
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number
}
