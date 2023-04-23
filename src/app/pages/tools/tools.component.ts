import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tools, Tool } from 'src/app/shared/models/tools.model';
import { menu } from 'src/app/shared/models/dropdown.model';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {

  public currentTool: Tool | undefined;

  constructor(private router: Router){
    this.currentTool = tools.find(x => x.route == router.url.substring(1));
  }

  ngOnInit() {
  }
}
