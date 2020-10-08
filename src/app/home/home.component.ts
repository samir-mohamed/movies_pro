import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  trendingMovies:any[];
  trendingTv:any[];
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";
  constructor( private _MoviesService:MoviesService) { 


    _MoviesService.getTrending('movies').subscribe((data)=>{


      data.results.sort(function (a, b) {
        return a.vote_average - b.vote_average;
      });

      this.trendingMovies = data.results.reverse().slice(0,10);

    });

    _MoviesService.getTrending('tv').subscribe((data)=>{

      this.trendingTv = data.results.slice(0,10);

    })
  }

  //  compare( a, b ) {
  //   if ( a.last_nom < b.last_nom ){
  //     return -1;
  //   }
  //   if ( a.last_nom > b.last_nom ){
  //     return 1;
  //   }
  //   return 0;
  // }
  
  //

  ngOnInit(): void {
  }

}
