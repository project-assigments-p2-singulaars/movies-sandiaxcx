import { Component, Input, OnInit, inject } from '@angular/core';
import { Movies } from '../shared/interfaces/movies';
import { MovieComponent } from "../movie/movie.component";
import { Observable } from 'rxjs';
import { MovieService } from '../shared/services/movie.service';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [MovieComponent, RouterLink, AsyncPipe]
})
export class HomeComponent{
  // @Input() movies!:Movies[];
  // movies!: Observable <Movies[]>
  // constructor(private movieService:MovieService){}

  // ngOnInit(): void {
  //   this.movies = this.movieService.getMovies()
  // }

  // getMovies(id: number) {
  //   const movieDetails = this.movieService.getMovies(id);
  //   console.log('Movie Details:', movieDetails);
  //   }

    // @Input() movies!: Movies[];
    // @Input('id') id!: string;
    // movie!: Movies;
    // products!: Observable<Movies[]>

    // constructor(private movieService:MovieService){}

  
    // ngOnInit(): void {
    //   this.products = this.movieService.getMovies()
    //   const movie = this.movies.find(movie => movie.id === +this.id);
    //   if (movie) {
    //     this.movie = movie;
    //   }
    // }
    // @Input() movies!:Movies[];
    
    // products!: Observable < Movies[] >

    // // products!: Product[];
    // constructor(private movieService:MovieService){}
  
    // ngOnInit(): void {
    //   this.products = this.movieService.getMovies()
    // }
    // @Input() id!: string;
    // movies!:Movies;
    // movieService = inject(MovieService);
    // movieDetail!:Observable<Movies>
    
    // ngOnInit(): void {
    //   let id = parseInt(this.id);
  
    //   this.movieDetail = this.movieService.getMovieById(id)
    //   this.movieDetail.subscribe((response:Movies)=>{
    //     this.movies=response;
    //   })
    // }

    movies!: Observable<Movies[]>;

    @Input('id') id!: string;
    // movie!: Movies;

    constructor(private movieService:MovieService){}


    ngOnInit(): void {
      console.log(this.movies)
      this.movies = this.movieService.getMovies()
      console.log(this.movies)
    }
}
