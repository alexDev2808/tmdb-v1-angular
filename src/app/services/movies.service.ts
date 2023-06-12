import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateMovieDTO, Movie, MovieImages, MovieResponse } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private api_key = '?api_key=cde7198c18b190672c943bf7464e5bed';
  private url_api = 'https://api.themoviedb.org/3/movie';
  private upcoming = '/upcoming';



  constructor(
    private http: HttpClient
  ) { }

  getAllMovies() {
    return this.http.get<MovieResponse>(this.url_api + this.upcoming + this.api_key);
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.url_api}/${id}${this.api_key}`);
  }

  getImages(id: string) {
    return this.http.get<MovieImages>(`${this.url_api}/${id}/images${this.api_key}`);
  }

  create(dto: CreateMovieDTO) {
    return this.http.post<Movie>(`${this.url_api}${this.api_key}`, dto);
  }
}
