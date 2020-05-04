import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//Sweet Alert
import Swal from 'sweetalert2';
import { UserService } from '../services/services.index';
import { User } from '../models/user.model';
import { Router } from '@angular/router';


declare function init_Plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {


  form: FormGroup;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    init_Plugins();

    this.form = new FormGroup({

      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.compareValues('password', 'password2') });

    this.form.setValue({
      name: 'Luis',
      email: 'test1@test1.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    })
  }

  compareValues(value1: string, value2: string) {


    return (group: FormGroup) => {

      const campo1 = group.controls[value1].value;
      const campo2 = group.controls[value2].value;

      if (campo1 === campo2) {
        return null;
      }

      return {
        sonIguales: true
      }
    }
  }


  register() {


    if (this.form.invalid) {
      console.log('Formulario Invalido');
      return;
    }

    if (!this.form.value.condiciones) {
      Swal.fire({
        icon: 'warning',
        title: 'Debe aceptar las condiciones'
      })
    }else{

      const { name, email, password} = this.form.value;
      this.userService.createUser(new User(name, email, password)).subscribe( (resp: any) => {

        Swal.fire({
          icon: 'success',
          title: 'User created',
          text: `${resp.user.email}`
        })

        this.router.navigate(['/login']);

      }, err => {
        console.log(err)
      })
    }
  }

}
