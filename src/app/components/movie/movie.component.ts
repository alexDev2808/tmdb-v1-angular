import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  urlImg = "https://image.tmdb.org/t/p/original";

  @Input() movie: Movie = {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: '',
    original_languaje: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  }

  @Output() addedToFav = new EventEmitter<Movie>();
  @Output() showMovie = new EventEmitter<string>();

  onAddToFav () {
    this.addedToFav.emit(this.movie);
  }

  getUrlImg() {
    return this.urlImg + this.movie.poster_path;
  }

  onShowDetail() {
    this.showMovie.emit(this.movie.id);
  }
}
