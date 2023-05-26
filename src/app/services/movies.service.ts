import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieResponse } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  api_key = '?api_key=cde7198c18b190672c943bf7464e5bed';
  url_api = 'https://api.themoviedb.org/3/movie/upcoming';

  constructor(
    private http: HttpClient
  ) { }

  getAllMovies() {
    return this.http.get<MovieResponse>(this.url_api + this.api_key);
  }
}
