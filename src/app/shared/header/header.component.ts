import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DropDownAnimation, FadeIn, FadeOut } from '../animations';
import { MainComponent } from 'src/app/main/main.component';
import { menu } from '../models/dropdown.model';

const DELAY = 200;
interface Title {
  text: string;
  size: number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [FadeIn(DELAY), FadeOut(DELAY), DropDownAnimation]
})
export class HeaderComponent {
  // Define element references.
  @ViewChild('header') header?: ElementRef;
  @ViewChild('outlet') outlet?: ElementRef;
  @ViewChild('title')  title? : ElementRef;

  initialHeight: number = 300;
  minHeight:     number =  85;
  newHeight:     number =   0;

  titles: Title[]    = [ {text: 'Kfoss.', size: 4},
                         {text: 'Free & Open Source', size: 2}];
  currentTitle: Title   = this.titles[0];

  showTitle = true;
  showRight = true;

  dropdown = {
    open: false,
    menu: menu
  };
  
  constructor(public element: ElementRef, public renderer: Renderer2, public router: Router, public app: MainComponent) {
    //window.scrollTo(0, 0);
  }
  ngAfterViewInit() {
    this.checkShowRight();
  }

  checkShowRight() {
    if (this.currentTitle == this.titles[0]) {
      this.showRight = window.innerWidth > 360;
    } else {
      this.showRight = window.innerWidth > 500;
    }
  }

  animatedTitleChange(text: Title) {
    this.showTitle = false;
    setTimeout(()=>{
      this.currentTitle = text;
      this.checkShowRight();
      this.showTitle = true;
    }, DELAY);
  }

  resizeHeader(ev: any) {
    const currentHeaderHeight = this.initialHeight - window.scrollY;

    if (currentHeaderHeight <= this.minHeight){
      // Force a fixed/sticky header.
      this.stickyHeader();
      if (this.showTitle && this.currentTitle != this.titles[1])
        this.animatedTitleChange(this.titles[1]);
    } else {
      // force an concurrent-dom header
      if (this.showTitle && this.currentTitle != this.titles[0])
        this.animatedTitleChange(this.titles[0]);
      this.concurrentDomHeader();
    }
  }

  stickyHeader() {
    // Force a fixed/sticky header.
    this.outlet!.nativeElement.style.marginTop  = this.initialHeight + 'px';
    this.header!.nativeElement.style.height     = this.minHeight + "px";
    this.header!.nativeElement.style.position   = "fixed";
  }

  concurrentDomHeader() {
    // Force an concurrent-dom header
    this.outlet!.nativeElement.style.marginTop = 'unset';
    this.header!.nativeElement.style.height = this.initialHeight + "px";
    this.header!.nativeElement.style.position = "unset";
  }

  // Sets the currentComponent var in MainComponent using router-outlet 'activate' callback event.
  onActivate(event: any): void {
    this.app.currentComponent = event.constructor.name;
    if (this.app.currentComponent == 'HomeComponent') {
      this.concurrentDomHeader();

      document.addEventListener('scroll', (ev) => {
        this.resizeHeader(ev);
      });

    } else {
      this.stickyHeader();
    }
    window.onresize = () => this.checkShowRight();
  }
}