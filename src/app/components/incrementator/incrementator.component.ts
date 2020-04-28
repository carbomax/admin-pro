import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styles: [
  ]
})
export class IncrementatorComponent implements OnInit {



  @ViewChild('htmlProgress') htmlProgress: ElementRef;

  @Input() progress: number = 50;

  @Output() updateProgress: EventEmitter<number> = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }

  increment(value: number) {

    this.progress += value;

    if (this.progress >= 100) {
      this.progress = 100;
      this.updateProgress.emit(this.progress);
      return;
    }

    if (this.progress <= 0) {
      this.progress = 0;
      this.updateProgress.emit(this.progress);
      return;
    }

    this.updateProgress.emit(this.progress);
    this.htmlProgress.nativeElement.focus();
  }


  progressChange(newValue: number) {

    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.htmlProgress.nativeElement.value = this.progress;
    this.updateProgress.emit(this.progress);
  }

}
