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
  showLogo = false;
  showSpinner = false;
  show = true;

  ngOnInit(){
    console.log("ready state: ", document.readyState);

    document.body.style.overflow = 'hidden';

    window.addEventListener('load', () => {
      document.body.style.overflow = 'unset';
      this.continue();
    });

    setTimeout(()=>this.continue(), 1500);

  }

  continue() {
    this.show = false;
    document.body.style.overflow = 'unset';
  }
}
