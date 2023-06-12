import { Component, OnInit } from '@angular/core';
import { CreateMovieDTO, Movie, MovieImages, UrlPosters } from 'src/app/models/movie.model';
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
  movieChosen: Movie  = {
    adult: false,
    backdrop_path: '',
    genres: [],
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
    vote_count: 0,
    runtime: 0,
    tagline: ''
  }
  movieChosenImgs: MovieImages = {
    backdrops: [],
    id: 0,
    logos: [],
    posters: []
  }

  urlImg = "https://image.tmdb.org/t/p/original";



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
      this.toggleShowDetail();
      this.movieChosen = data;
    })

    this.moviesService.getImages(id)
    .subscribe(data => {
      this.movieChosenImgs = data;
    })
  }

  createNewMovie() {
    const movie: CreateMovieDTO = {
      adult: false,
      backdrop_path: '',
      original_languaje: '',
      original_title: '',
      overview: '',
      popularity: 0,
      poster_path: '',
      release_date: '',
      title: '',
      video: false,
      vote_average: 0,
      vote_count: 0,
      runtime: 0,
      tagline: '',
      genreId: 1
    }

    this.moviesService.create(movie)
    .subscribe(data => {
      console.log("created", data);
      this.movies.unshift(data)
    })
  }
}
