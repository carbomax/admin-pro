import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() {

    this.regresaObservable().pipe(
      retry(2)
    )
    .subscribe(
      resp => console.log(resp),
      error => console.log('Ocurrio un error', error),
      () => console.log('Todo ha termiando')
    )

   }

  ngOnInit(): void {


  }


  regresaObservable(): Observable<number>{
    return new Observable( (observer: Subscriber<number>) => {

      let contador = 0;
      const interval = setInterval( () => {

        contador ++;
        observer.next(contador);
        if( contador === 3){
          clearInterval(interval);
          observer.complete();
        }

        if( contador === 2){
          observer.error('Socorro !!!')
        }

      }, 1000)
    })



  }

}
