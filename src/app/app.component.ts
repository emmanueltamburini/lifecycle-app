import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycles';

  public show: boolean = true;

  public onHide(): void {
    this.show = !this.show;
  }
}
