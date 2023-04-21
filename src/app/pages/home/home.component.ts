import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { MainComponent } from 'src/app/main/main.component';
import { FadeIn, FadeOut } from 'src/app/shared/animations';
import { tools } from 'src/app/shared/models/tools.model';
import texture_index from 'src/assets/images/textures/index.json';

const DELTA=200;


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

  tools = tools;
  window = window;

  textures: Texture[] = [];
  imagePath = this.app.baseHref + 'assets/images/';
  rawTexturePath = this.imagePath + 'textures/raw/';
	images = ['sample-code.jpg', 'sample-unity.jpg', 'sample-smss-inverted.jpg'].map((n) => this.imagePath + n);

  constructor(public app: MainComponent){}

  ngOnInit() {
    this.preloadTextures();
  }

  preloadTextures() {
    const texture_urls: string[]           = texture_index.images.map(x => this.imagePath + 'textures/' + x);
    const promises:     Promise<Texture>[] = texture_urls.map(x => this.getBase64ImageFromUrl(x));

    Promise.all(promises).then(textures => {
      this.textures = textures;
    });
  }

  async getBase64ImageFromUrl(imageUrl: string): Promise<Texture> {
    const res = await fetch(imageUrl);
    const blob = await res.blob();
  
    return new Promise((resolve, reject) => {
      const reader  = new FileReader();
      reader.addEventListener("load", () => {
          const result: Texture = {url: reader.result?.toString(),
                                   fileName: imageUrl.split("/").pop()?.replace('.jpg', '.png')};
          resolve(result);
      }, false);
  
      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    });
  }
}
