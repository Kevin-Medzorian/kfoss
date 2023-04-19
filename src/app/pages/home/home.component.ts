import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { MainComponent } from 'src/app/main/main.component';
import { FadeIn, FadeOut } from 'src/app/shared/animations';
import texture_index from 'src/assets/images/textures/index.json';

const DELTA=200;

interface Tool {
  title: string;
  text: string;
  hov?: boolean | number;
  url: string;
}

interface Texture {
  url?: string;
  fileName?: string;
  hov?: boolean | number;
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
    {title: 'Spanish Accents Tool', text: 'Simple, always-visible accents utility for typing spanish accent characters.', url: this.app.baseHref + 'spanish-accents'},
    {title: 'Lightweight Screenshot Utility', text: "Minimal screenshot tool called 'Screencapper'.", url: this.app.baseHref + 'screencapper'},
    {title: 'Automatic Definition Finder', text: 'Given a list of words, this tool returns a list of definitions using the internet.', url: this.app.baseHref + 'definition-finder'},
    {title: 'Secure Text/Password Encrypter', text: 'Simple, lightweight C+Qt program that will encrypt/decrypt text using a provided hash.', url: this.app.baseHref + 'encrypter'},
    {title: 'Ad-Free Android Metronome', text: 'Simple, ad-free Android Metronome app.', url: this.app.baseHref + 'metronome'},
  ];
  window = window;

  textures: Texture[] = [];
  imagePath = this.app.baseHref + 'assets/images/';
  rawTexturePath = this.imagePath + 'textures/raw/';
	images = ['sample-code.png', 'sample-unity.png', 'sample-smss-inverted.png'].map((n) => this.imagePath + n);

  constructor(public app: MainComponent){}

  ngOnInit() {
    this.preloadTextures();
  }

  preloadTextures() {
    const texture_urls = texture_index.images.map(x => this.imagePath + 'textures/' + x);
    const promises: Promise<Texture>[] = texture_urls.map(x => { return this.getBase64ImageFromUrl(x) });

    Promise.all(promises).then((textures) => {
      this.textures = textures;
    });
  }

  async getBase64ImageFromUrl(imageUrl: string): Promise<Texture> {
    const res = await fetch(imageUrl);
    const blob = await res.blob();
  
    return new Promise((resolve, reject) => {
      const reader  = new FileReader();
      reader.addEventListener("load", function () {
          const result: Texture = {url: reader.result?.toString(),
                                   fileName: imageUrl.split("/").pop()?.split(".")[0] + '.png'};
          resolve(result);
      }, false);
  
      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    });
  }
}
