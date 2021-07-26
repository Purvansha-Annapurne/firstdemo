import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  password: string;
  // show= false;
  show: boolean;
  usrnm: string;
  email: string;
  pass: string;
  constructor() { }

  ngOnInit() {
    this.password = 'password';
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;

    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  clickme()
  {
    // console.log('it does nothing',this.usrnm);
    localStorage.setItem('Users',this.usrnm);
    localStorage.setItem('Email',this.email);
    localStorage.setItem('Password',this.pass);


  }
}
