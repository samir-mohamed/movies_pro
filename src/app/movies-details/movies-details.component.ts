import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../movies.service'
@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  imgPrefix:string = "https://image.tmdb.org/t/p/w500";

  type:any;
  id:any;
  movieDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) {


    this.type  = _ActivatedRoute.snapshot.paramMap.get('type');
    this.id  = _ActivatedRoute.snapshot.paramMap.get('id');


    _MoviesService.getItemDetails(this.type , this.id).subscribe((data)=>{

        this.movieDetails = data;
    })
   }

  ngOnInit(): void {
  }

}
