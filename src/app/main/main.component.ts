import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public currentComponent: string = "";
  public ignorePages = ['PageNotFoundComponent'];
  public enableLoader = false;

  // Use this file to store commonly used variables, functions, etc...
  constructor(@Inject(APP_BASE_HREF) public baseHref: string){
  }

}
