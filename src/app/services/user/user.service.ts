import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { User } from '../../models/user.model';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  usuario: User;
  token: string;

  constructor(public http: HttpClient, public router: Router) {

    this.cargarStorage();
  }

  cargarStorage() {

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);

  }

  login(user: User, recuerdame: boolean = false) {

    if (recuerdame) {

      localStorage.setItem('email', user.email);

    } else {
      localStorage.removeItem('email');
    }
    return this.http.post(`${URL_SERVICE}/api/login`, user)
      .pipe(map((resp: any) => {
        this.saveLoginStorage(resp.id, resp.token, resp.user);
        return true;
      }))

  }

  loginGoogle(tokenGoogle: string) {

    return this.http.post(`${URL_SERVICE}/api/login/google`, { token: tokenGoogle })
      .pipe(map((resp: any) => {
        this.saveLoginStorage(resp.id, resp.token, resp.user);
        return true;
      }))
  }

  createUser(user: User) {

    return this.http.post(`${URL_SERVICE}/api/users`, user);
  }

  saveLoginStorage(id, token, user) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.usuario = user;
  }

  estaLogueado() {
    return (this.token.length > 50) ? true : false;
  }

  updateUser(user: User) {

    return this.http.put(`${URL_SERVICE}/api/users/${user._id}?token=${this.token}`, user)
      .pipe(map((resp: any) => {
        this.saveLoginStorage(resp.user.id, this.token, resp.user);
        Swal.fire({
          icon: 'success',
          title: 'Usuario actualizado',
          text: `${resp.user.name}`
        })
        return true;
      }));
  }

  uploadImage(file, collection: string, id: string) {

    return this.http.put(`${URL_SERVICE}/api/upload/${collection}/${id}`, file)
      .pipe(map((resp: any) => {
        this.usuario.img = resp.user.img;
        this.saveLoginStorage(this.usuario._id, this.token, this.usuario);
        Swal.fire({
          icon: 'success',
          title: 'Imagen actualizada',
          text: `${resp.user.name}`
        })
        return true;
      }));
  }
}
