import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private myFavMovies: Movie[] = [];
  private myFavs = new BehaviorSubject<Movie[]>([]);

  myFavs$ = this.myFavs.asObservable();

  constructor() {


  }

  getMyFavMovies() {
    return this.myFavMovies;
  }

  addMovie(movie: Movie) {
    this.myFavMovies.push(movie);
    this.myFavs.next(this.myFavMovies);
  }
}
