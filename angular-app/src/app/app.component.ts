import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1> {{ title }} </h1> <p> {{ description }} is cool`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  description = 'A new app'
}
