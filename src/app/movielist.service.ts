import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {

  constructor(private http:HttpClient) { console.log("Instantiated..."); }

  getVersion() {
    return 1.0;
  }

  getMovieList(){
    return this.http.get("http://www.mocky.io/v2/5d2475842f00005970241974");
  }
}
