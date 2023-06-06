/**
 * Copyright 2023, Kevin Medzorian 
 * This file is part of KFOSS.
 * KFOSS is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * KFOSS is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with KFOSS. If not, see <https://www.gnu.org/licenses/>.
 **/
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
  public enableLoader = true;
  public validRoute = true;
  
  // Use this file to store commonly used variables, functions, etc...
  constructor(@Inject(APP_BASE_HREF) public baseHref: string, public router: Router) {
    router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof NavigationEnd)
    ).subscribe(e => this.onNewRoute(e));
  }

  // Callback for whenever a route is activated.
  public onNewRoute(e: RouterEvent) {
    window.scrollTo(0,0);
    const allPaths = this.router.config.map(x => "/" + x.path);

    this.validRoute = allPaths.includes(e.url);
    this.enableLoader = document.readyState != "complete";
  }


}
