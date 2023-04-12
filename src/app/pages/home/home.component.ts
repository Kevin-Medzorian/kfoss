import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { MainComponent } from 'src/app/main/main.component';


@Component({
  selector: 'home',
  standalone: true,
  imports: [NgbCarouselModule, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public app: MainComponent){}
  imagePath = this.app.baseHref + 'assets/images/';
	images = ['sample-code.png', 'sample-unity.png', 'sample-smss-inverted.png'].map((n) => this.imagePath + n);
}
