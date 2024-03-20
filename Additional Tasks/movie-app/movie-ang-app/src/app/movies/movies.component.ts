import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  popular!: Object;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
        .getPopular().subscribe((data: object) => console.log(data));
  }


}
