import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private myFavMovies: Movie[] = [];

  constructor() {


  }

  getMyFavMovies() {
    return this.myFavMovies;
  }

  addMovie(movie: Movie) {
    this.myFavMovies.push(movie);
  }
}
