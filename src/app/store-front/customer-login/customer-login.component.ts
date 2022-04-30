import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {

  signUp:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSignUp():void{
    this.signUp = true;
  }

  onSignIn():void{
    this.signUp = false;
  }

  onSubmit():void{
    console.log("you have submitted the form")
  }

}
