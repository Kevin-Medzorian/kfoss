import { Component } from '@angular/core';
import { FadeOut } from '../animations';
import { NavigationEnd, Router } from '@angular/router';

const DELTA = 500;
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [FadeOut(DELTA)]
})
export class LoaderComponent {
  public showLogo = false;
  public showSpinner = false;
  public show = true;
  
  ngOnInit(){
    document.body.style.overflow = 'hidden';

    window.addEventListener('load', () => {
      document.body.style.overflow = 'unset';
      setTimeout(()=>this.continue(), 200);
    });

    setTimeout(()=>this.continue(), 1500);
  }

  continue() {
    this.show = false;
    document.body.style.overflow = 'unset';
  }
}
