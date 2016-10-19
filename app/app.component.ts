import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular App</h1><p>{{pageTitle}}</p>'
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
 }
