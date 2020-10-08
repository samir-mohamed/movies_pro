import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) {


   }

   getTrending(mediaType):Observable<any>
   {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=f1aca93e54807386df3f6972a5c33b50`)
   }


   getItemDetails(mediaType , id)
   {
     return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
   }


}
