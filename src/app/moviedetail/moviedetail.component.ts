import { Component, OnInit } from '@angular/core';
import { PubsubService } from '../pubsub.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  myvariable;
  constructor(private pubsub:PubsubService) { }

  ngOnInit() {
    this.pubsub.getSubscriber().subscribe((event)=>{
      this.myvariable=event;
    })
  }

}
