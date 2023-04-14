import { Component, ElementRef } from '@angular/core';
import { FadeIn, FadeOut } from '../animations';

const DELTA = 500;
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [FadeOut(DELTA)]
})
export class LoaderComponent {
  show = true;
  ngOnInit(){
    setTimeout(()=>{
      this.show=false;
    }, 500);
  }
}
