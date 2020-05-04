import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { User } from '../../models/user.model';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  usuario: User;
  token: string;

  constructor(public http: HttpClient, public router: Router) {

    this.cargarStorage();
  }

  cargarStorage(){

    if( localStorage.getItem('token') ){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('user'));
    } else{
      this.token = '';
      this.usuario = null;
    }
  }

  logout(){
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);

  }

  login(user: User, recuerdame: boolean = false) {

    if( recuerdame ){

      localStorage.setItem('email', user.email);

    }else{
      localStorage.removeItem('email');
    }
    return this.http.post(`${URL_SERVICE}/api/login`, user)
      .pipe(map((resp: any) => {
        this.saveLoginStorage(resp);
        return true;
      }))

  }

  loginGoogle(tokenGoogle: string){

    return this.http.post(`${URL_SERVICE}/api/login/google`, {token: tokenGoogle})
    .pipe(map((resp: any) => {
     this.saveLoginStorage(resp);
      return true;
    }))
  }

  createUser(user: User) {

    return this.http.post(`${URL_SERVICE}/api/users`, user);
  }

  saveLoginStorage(resp){
    localStorage.setItem( 'id', resp.id);
    localStorage.setItem( 'token', resp.token);
    localStorage.setItem('user' , JSON.stringify( resp.user));
    this.token = resp.token;
    this.usuario = resp.user;
  }

  estaLogueado(){
    return ( this.token.length > 50) ? true : false;
  }
}
