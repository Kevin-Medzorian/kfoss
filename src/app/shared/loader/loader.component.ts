import { Component } from '@angular/core';
import { FadeOut } from '../animations';

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
    document.body.style.overflow = 'hidden';

    window.addEventListener('load', () => {
      document.body.style.overflow = 'unset';
      setTimeout(()=>this.continue(), 100);
    });

    setTimeout(()=>this.continue(), 2000);

  }

  continue() {
    this.show = false;
    document.body.style.overflow = 'unset';
  }
}
