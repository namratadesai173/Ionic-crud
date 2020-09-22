import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user, userModelFormBuilder } from '../shared/models/user-model';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user : userModelFormBuilder = new userModelFormBuilder();
  userModel : user =  this.user.userModel
  flag : any;

  constructor(private loginservice : LoginService,
    private router : Router ) { }

  ngOnInit() {
    this.userModel;
  }

  getLogin() {
    this.loginservice.loginUser(this.userModel).subscribe(res => {
      this.flag = res.body;
      console.log("Flag =="+this.flag);
      if(this.flag == 'SUCCESS') {
        this.router.navigateByUrl('tas');
      }
    });
  }

}
