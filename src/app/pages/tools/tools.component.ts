/**
 * Copyright 2023, Kevin Medzorian 
 * This file is part of KFOSS.
 * KFOSS is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * KFOSS is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with KFOSS. If not, see <https://www.gnu.org/licenses/>.
 **/
import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { tools, Tool } from 'src/app/shared/models/tools.model';

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
