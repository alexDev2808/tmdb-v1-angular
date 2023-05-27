import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { StoreService } from 'src/app/services/store.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  fecha = new Date();
  myFavMovies: Movie[] = [];
  movies: Movie[] = [];
  showMovieDetail = false;

  constructor(
    private storeService: StoreService,
    private moviesService: MoviesService

  ) {
    this.myFavMovies = this.storeService.getMyFavMovies();
  }

  ngOnInit(): void {
    this.moviesService.getAllMovies()
    .subscribe(data => {
      console.log(data);
      this.movies = data.results;
    })
  }

  onAddToFavs(movie: Movie) {
    this.storeService.addMovie(movie);
  }

  toggleShowDetail() {
    this.showMovieDetail = !this.showMovieDetail;
  }

  onShowDetail(id: string) {
    this.moviesService.getMovie(id)
    .subscribe(data => {
      console.log("Pelicula => ", data);

    })
  }
}
