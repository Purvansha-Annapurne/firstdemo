import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.page.html',
  styleUrls: ['./new-account.page.scss'],
})
export class NewAccountPage implements OnInit {
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
  // changeType(input_field_password, num){
  //   if(input_field_password.type=="password")
  //     input_field_password.type = "text";
  //   else
  //     input_field_password.type = "password";

  //   if(num == 1)
  //     this.toggle1 = !this.toggle1;
  //   else
  //     this.toggle2 = !this.toggle2;
  // }

}
