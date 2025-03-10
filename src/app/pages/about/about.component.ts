/**
 * Copyright 2023, Kevin Medzorian 
 * This file is part of KFOSS.
 * KFOSS is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * KFOSS is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with KFOSS. If not, see <https://www.gnu.org/licenses/>.
 **/
import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren, Renderer2 } from '@angular/core';
import logo_index from 'src/assets/images/tech/index.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @ViewChildren("images") images: QueryList<ElementRef> | undefined;
  @ViewChild("page") page: ElementRef | undefined;
  
  public resizeTimeout: any;
  public touched = false;
  public logos = logo_index.icons.sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5);;  // Randomized
  document = document;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.randomlyLayoutIcons();
  }

  @HostListener('window:resize', ['$event'])
  resized() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => this.randomlyLayoutIcons(), 100);
  }
  
  randomlyLayoutIcons(): void {
    let pageHeight = this.page!.nativeElement.clientHeight;
    let x = 50, y = 50;
    const x_increment = 350;
    const y_increment = 250;
    const marginSize = (1/3) * this.document.body.clientWidth;
    const middleSize = this.document.body.clientWidth - (2 * marginSize);

    this.images!.forEach(img => {
      if (x > this.document.body.clientWidth - 75) {
        x = 50;
        y += y_increment;
      }

      if (y > pageHeight) {
        this.renderer.setStyle(img.nativeElement, 'display', 'none');
      } else {
        this.renderer.setStyle(img.nativeElement, 'display', 'unset');
      }

      this.renderer.setStyle(img.nativeElement, 'top', `${y + (Math.random() * 100) - 50}px`);
      this.renderer.setStyle(img.nativeElement, 'left', `${x + (Math.random() * 100) - 50}px`);

      let random = (Math.random() * 80) - 40;
      if (Math.abs(random) < 5) {
        random = (Math.random() * 80) - 40;
      }

      this.renderer.setStyle(img.nativeElement, 'transform', `rotate(${random}deg)`);
      x += x_increment;

      if (x > marginSize + 50 && x < marginSize + middleSize - 150) {
        x = marginSize + middleSize;
      }
    });
  }
}
