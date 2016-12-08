import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <h1>Helloooo {{name}}</h1>
      <my-detail></my-detail>
  `,
  styleUrls:['app/app.component.css']
})
export class AppComponent  { name = 'Angular'; }
