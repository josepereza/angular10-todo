import { Component } from '@angular/core';

//Decorator: includes metada from the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoApp';
  name: string = '';

  constructor() {
    this.name = 'alex';
  }

  changeName(name: string): void {
    this.name = 'alexios';
  }
}
