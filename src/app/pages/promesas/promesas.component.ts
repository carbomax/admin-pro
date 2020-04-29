import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres()
      .then(res => console.log('Success', res))
      .catch(err => console.log('Error', err));
  }

  ngOnInit(): void {
  }

  contarTres(): Promise<string> {

    return new Promise((res, rej) => {

      let contador = 0;
      const intervalo =setInterval(() => {

        contador += 1;
        console.log(contador)
        if (contador === 3) {
          rej('Finished ok!!')
          clearInterval(intervalo)
        }
      }, 1000)
    })
  }

}
