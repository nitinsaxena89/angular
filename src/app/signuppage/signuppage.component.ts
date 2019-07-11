import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {
  user:User = new User();
  constructor(http:HttpClient) { 
    
  }

  ngOnInit() {
  }

  handleSignUp(){
    console.log(this.user.firstname);
  }
}

export class User{
  firstname;
  lastname;
  email;
  phone;
  country;
}