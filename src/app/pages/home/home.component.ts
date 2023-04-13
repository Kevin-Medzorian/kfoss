import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { MainComponent } from 'src/app/main/main.component';
import { FadeIn, FadeOut } from 'src/app/shared/animations';

const DELTA=200;

interface Tool {
  title: string;
  text: string;
  hov?: boolean;
}

@Component({
  selector: 'home',
  standalone: true,
  imports: [NgbCarouselModule, NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [FadeIn(DELTA), FadeOut(DELTA/2)]
})
export class HomeComponent {

  tools: Tool[] = [
    {title: 'Spanish Accents Tool', text: 'Simple, always-visible accents utility for typing spanish accent characters.'},
    {title: 'Lightweight Screenshot Utility', text: "Minimal screenshot tool called 'Screencapper'."},
    {title: 'Automatic Definition Finder', text: 'Given a list of words, this tool returns a list of definitions using the internet.'},
    {title: 'Secure Text/Password Encrypter', text: 'Simple, lightweight C+Qt program that will encrypt/decrypt text using a provided hash.'},
    {title: 'Ad-Free Android Metronome', text: 'Simple, ad-free Android Metronome app.'},
  ];
  constructor(public app: MainComponent){
  }
  imagePath = this.app.baseHref + 'assets/images/';
	images = ['sample-code.png', 'sample-unity.png', 'sample-smss-inverted.png'].map((n) => this.imagePath + n);
}
