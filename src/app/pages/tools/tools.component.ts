import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {

  public currentTool: string = "";

  constructor(private router: Router){
    this.currentTool = router.url.substring(1);
  }

  ngOnInit() {

  }
}
