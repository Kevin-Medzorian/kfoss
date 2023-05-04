import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, Event } from '@angular/router';
import { tools, Tool } from 'src/app/shared/models/tools.model';
import { menu } from 'src/app/shared/models/dropdown.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  Math = Math

  public imageUrl: string = "/assets/images/tools/";
  public currentTool: Tool;

  constructor(private router: Router){
    this.currentTool = tools.find(x => x.route == router.url.substring(1)) || tools[0];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
