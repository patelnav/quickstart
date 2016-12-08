import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-detail',
  template: `<h2>I'm giving you {{name}}!</h2>`,
  styleUrls:['detail.component.css']
})
export class DetailComponent  { name = 'details'; }
