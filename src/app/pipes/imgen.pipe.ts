import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICE } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImgenPipe implements PipeTransform {

  transform(image: string, type: string = 'usuarios'): string {


    let url = URL_SERVICE + '/api/load-image/';
    if (image.indexOf('https') >= 0) {

      return image;
    }
    if (!image) {
      return url += 'usuarios/xxxxx';
    }else{

      switch (type) {
        case 'usuarios':
          url += 'usuarios/' + image;
          break;

        case 'hopitales':
          url += 'hospitales/' + image;
          break;

        case 'medicos':
          url += 'medicos/' + image;
          break;
        default:
          console.log('tipo de imagen no existe, medicos, hospitales, usuarios');
          url += 'usuarios/' + image;
          break;
      }
    }

    console.log(url)

    return url;
  }

}
