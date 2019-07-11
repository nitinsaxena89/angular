import { Component, OnInit } from '@angular/core';
import { PubsubService } from '../pubsub.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn = false;
  constructor(private pubsub: PubsubService) { }

  ngOnInit() {
    this.pubsub.getLoginSubscriber().subscribe((event) => {
      this.loggedIn = true;
    })
  }
  handleLogout(){
    this.loggedIn=false;
    sessionStorage.removeItem("loggedIn");
  }
}
