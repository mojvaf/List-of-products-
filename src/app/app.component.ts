import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div>
   <h1>{{pageTile}}</h1>
   <p>Day one</p>
   <pm-products></pm-products>
  </div>
  `
})

export class AppComponent{
 pageTile: string = 'follow the lecture' 
}
