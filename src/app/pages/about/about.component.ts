/**
 * Copyright 2023, Kevin Medzorian 
 * This file is part of KFOSS.
 * KFOSS is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * KFOSS is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with KFOSS. If not, see <https://www.gnu.org/licenses/>.
 **/
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import logo_index from 'src/assets/images/tech/index.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @ViewChildren("images") images: QueryList<ElementRef> | undefined;
  @ViewChild("page") page: ElementRef | undefined;
  
  public logos = logo_index.icons.sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5);;  // Randomized
  document = document;

  ngAfterViewInit(): void {
      let pageHeight = this.page!.nativeElement.clientHeight;
      let x = 50, y = 50;
      const x_increment = 350;
      const y_increment = 250;
      const marginSize = (1/3)*this.document.body.clientWidth;
      const middleSize = this.document.body.clientWidth - (2*marginSize);
      this.images!.forEach(img => {
        console.log(img)
        if (x > this.document.body.clientWidth - 75) {
          x = 50;
          y += y_increment;
        }

        if (y > pageHeight) {
          img.nativeElement.style.display = "none";
        }

        img.nativeElement.style.top = y + (Math.random() * 100) - 50 +"px";
        img.nativeElement.style.left = x + (Math.random() * 100) - 50 +"px";
        let random = (Math.random() * 80) - 40;
        if (Math.abs(random) < 5) {
          random = (Math.random() * 80) - 40;
        }

        (img.nativeElement as HTMLImageElement).style.transform = `rotate(${random}deg)`;
        x += x_increment;

        if (x > marginSize + 50 && x < marginSize + middleSize - 150) {
          x = marginSize + middleSize;
        }
      });
    }
}
