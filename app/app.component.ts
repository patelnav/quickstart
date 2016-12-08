import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
      <h1>Helloooo {{name}}</h1>
      <my-detail></my-detail>
  `,
  styleUrls:['app.component.css']
})
export class AppComponent  { name = 'Angular'; }
