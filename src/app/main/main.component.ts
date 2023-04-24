import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router, RouterEvent, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public currentComponent: string = "";
  public ignorePages = ['PageNotFoundComponent']; //, 'ToolsComponent', 'AboutComponent'];
  public enableLoader = true;

  // Use this file to store commonly used variables, functions, etc...
  constructor(@Inject(APP_BASE_HREF) public baseHref: string, public router: Router) {
    router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof NavigationEnd)
    ).subscribe(e => this.onNewRoute(e));
  }

  // Callback for whenever a route is activated.
  public onNewRoute(e: RouterEvent) {
    this.enableLoader = document.readyState != "complete";
  }
}
