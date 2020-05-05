import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
//Sweet Alert
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  file: File;
  fileTemp: string;

  constructor(public userService: UserService) {

    this.user = this.userService.usuario;
  }

  ngOnInit(): void {
  }


  guardar(f) {
    console.log(this.user)
    console.log(f)
    this.userService.updateUser(this.user).subscribe(resp => {
      console.log(resp)

    })

  }

  onFileChange(event) {

    if (event.target.files.files || event.target.files.length) {
      this.file = event.target.files[0];
      if (!this.file) {
        Swal.fire('Archivo', 'Debe seleccionar un archivo', 'error');
        return;
      }

      if (this.file.type.indexOf('image') < 0) {

        Swal.fire('Solo imagenes', 'El archivo no es una imagen', 'error');
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onloadend = () => this.fileTemp = reader.result as string;

    } else {
      this.file = null;
      this.fileTemp = null;
      return;
    }
  }

  actualizarImage() {


    if (!this.file) {
      Swal.fire('Archivo', 'Debe seleccionar un archivo', 'error');
      return;
    }

    if (this.file.type.indexOf('image') < 0) {

      Swal.fire('Solo imagenes', 'El archivo no es una imagen', 'error');
      return;
    }



    const formData: FormData = new FormData();
    formData.append('image', this.file, this.file.name);
    this.userService.uploadImage(formData, 'usuarios', this.user._id)
      .subscribe(resp => {
        console.log(resp);
        this.fileTemp = null;
      });


  }

}
