import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';


@Component({
  selector: 'home',
  standalone: true,
  imports: [NgbCarouselModule, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imagePath = '/assets/images/';
	images = ['sample-code.png', 'sample-unity.png', 'sample-smss-inverted.png'].map((n) => this.imagePath + n);
}
