import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PubsubService } from '../pubsub.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  username:string;
  password:string;
  constructor(private router:Router,private pubsub: PubsubService) { }

  ngOnInit() {
  }

  handleLogin(){
    console.log("login is clicked");
    console.log(this.username);
    console.log(this.password);
    this.pubsub.getLoginPublisher().next("LOGIN");
    this.router.navigate(['']);
    sessionStorage.setItem("loggedIn","true");
  }

  handleLogout(){
     sessionStorage.setItem("loggedIn","true");
  }
}
