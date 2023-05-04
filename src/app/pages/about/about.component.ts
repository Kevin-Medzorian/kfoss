import { Component } from '@angular/core';
import logo_index from 'src/assets/images/tech/index.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public logos = logo_index.icons;
}
