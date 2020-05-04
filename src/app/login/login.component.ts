import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user.model';

//Google
import  { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login'


declare function init_Plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private userGoogle: SocialUser;
  private loggedIn: boolean;

  email: string;
  recuerdame = false;

  constructor(private router: Router, public userService: UserService,
              private authService: AuthService) { }

  ngOnInit(): void {
    init_Plugins();

    this.authService.authState.subscribe( user =>{
      this.userGoogle = user;
    })

    this.email = localStorage.getItem('email') || '';

    if( this.email !== ''){
      this.recuerdame = true;
    }


  }



  loadingDashboard(f: NgForm) {

    if (!f.valid) {
      return;
    } else {


      const { email, password } = f.value;
      const user = new User(null, email, password);

      this.userService.login(user, this.recuerdame).subscribe(resp => {

        console.log(resp);
        this.router.navigate(['/dashboard']);
      })
    }
  }


  loginGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then( resp => {
      this.userService.loginGoogle(this.userGoogle.idToken).subscribe( res => {
      this.router.navigate(['/dashboard']);

      }, err => {
        console.log(err)
      })
    });
  }


}
