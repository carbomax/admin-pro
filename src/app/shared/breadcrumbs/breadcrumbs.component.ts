import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {


  title: string;

  constructor(private router: Router, private currentTitle: Title, private meta: Meta) {

    this.getRouterData().subscribe( resp => {
      this.title = resp['title'];
      this.currentTitle.setTitle( this.title );

      const metaDefinition: MetaDefinition ={
        name: 'description',
        content: this.title
      }
      this.meta.updateTag( metaDefinition )
    })
   }

  ngOnInit(): void {
  }

  getRouterData(){

    return  this.router.events.pipe(
      filter( event => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.data.title),
      map( event => event.snapshot.data)
    )
  }

}
