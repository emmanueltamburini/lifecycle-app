import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html'
})
export class ShowNameComponent implements OnChanges {

  @Input('name') name!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is activated', changes);
  }

}
