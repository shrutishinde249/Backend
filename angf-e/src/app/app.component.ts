import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {slider,transformer,fader,stepper} from './route-animations'
@Component({
  selector: 'app-root',
  animations: [ // <-- add your animations here
    
    slider
  
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angf-e';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
