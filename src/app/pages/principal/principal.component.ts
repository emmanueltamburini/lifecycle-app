import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html'
})
export class PrincipalComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy  {

  public name: string = '';

  public seconds: number = 0;

  private timeSubscription!: Subscription;

  constructor () {
    console.log('constructor is activated')
  }

  ngOnInit(): void {
    this.timeSubscription = interval(1000).subscribe(i => this.seconds = i);
    console.log('ngOnInit is activated')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is activated');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck is activated');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is activated');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is activated');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is activated');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is activated');
  }

  ngOnDestroy(): void {
    this.timeSubscription.unsubscribe();
    console.log('tiemr is cleaned');
    console.log('ngOnDestroy is activated');
  }

  public onSave (): void {

  }

  public onStop (): void {
    this.timeSubscription.unsubscribe();
  }
}
