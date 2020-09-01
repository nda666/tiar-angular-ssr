import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../animations/index';
import * as screenfull from 'screenfull';
import {Screenfull} from 'screenfull';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [slideInAnimation]
})
export class AdminComponent implements OnInit {
  isCollapsed = false;
  isFullscreen = false;
  
  sf = screenfull;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  toggleFullscreen() {
  
    if (this.sf.enabled) {
      this.sf.toggle();
    }
  }

  constructor() {
    this.sf.on('change', () => {
      if(this.sf.enabled){
        this.isFullscreen = this.sf.isFullscreen;
      }
    });
   }

  ngOnInit(): void {
  }

}
