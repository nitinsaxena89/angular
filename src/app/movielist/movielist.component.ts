import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovielistService } from '../movielist.service';
import { PubsubService } from '../pubsub.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movies;
  version;
  i=0;
  constructor(private http: HttpClient,private movieListService:MovielistService,private pubsub:PubsubService) { }

  ngOnInit() {
    this.movieListService.getMovieList().subscribe(
      (result) => {
        this.movies = result;
      }
    )
    this.version = this.movieListService.getVersion();
  }

  handlePublish(){
    console.log("Published..."+this.i);
    this.i = this.i+1;
    this.pubsub.getPublisher().next(this.i);
  }

}
