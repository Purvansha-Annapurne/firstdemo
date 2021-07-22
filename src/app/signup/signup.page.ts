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
}
