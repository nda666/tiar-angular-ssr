import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../../animations/index';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [slideInAnimation]
})
export class WelcomeComponent implements OnInit {

  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
