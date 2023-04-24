import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DropDownAnimation, FadeIn, FadeOut } from '../animations';
import { MainComponent } from 'src/app/main/main.component';
import { menu, Menu } from '../models/dropdown.model';

// Animation delay for fadein/fadeout
const DELAY = 200;

interface Title {
  text: string; 
  size: number; // Uses size in 'rem'
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

  titles:   Title[]    = [ {text: 'Kfoss.', size: 4},
                         {text: 'Free & Open Source', size: 2}];
  currentTitle: Title   = this.titles[0];
  
  showDropdownTitle = false;
  showTitle = true; // Used for fading in/out different titles.
  showRight = true; // Show the 'kevin medzorian' right logo/text.

  // Only uses dropdown when not on home page.
  dropdown = {
    open: false,
    menu: {
      items: menu as Menu[], // All Menu items (except for current)
      current: menu[0] as Menu | undefined // Current menu item.
    },
  };
  
  constructor(public element: ElementRef, public renderer: Renderer2, public router: Router, public app: MainComponent) {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    this.checkShowRight();
  }

  checkShowRight() {
    const changeAtWidth = (this.currentTitle == this.titles[0]) ? 360 : 500;
    this.showRight = window.innerWidth > changeAtWidth;
  }

  animatedTitleChange(text: Title) {
    this.showTitle = false;
    setTimeout(()=>{
      this.currentTitle = text;
      this.checkShowRight();
      this.showTitle = true;
    }, DELAY);
  }

  @HostListener('window:scroll', ['$event'])
  resizeHeader() {
    if (this.router.url == '/') {
      const currentHeaderHeight = this.initialHeight - window.scrollY;

      if (currentHeaderHeight < this.minHeight){
        this.stickyHeader();       // Force a fixed/sticky header.

        // Check if need to update title text
        if (this.showTitle && this.currentTitle != this.titles[1])
          this.animatedTitleChange(this.titles[1]);
    
      } else {

        // Check if need to update title text
        if (this.showTitle && this.currentTitle != this.titles[0])
          this.animatedTitleChange(this.titles[0]);

        this.concurrentDomHeader(); // force concurrent-dom header
      }
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
    console.log("[HeaderComponent] Current Component: ", event.constructor.name);
    this.app.currentComponent = event.constructor.name;

    if (this.router.url == '/')
      this.onFancyHeaderComponent();
    else
      this.onSimpleHeaderComponent();
  }

  onFancyHeaderComponent() {
    this.showTitle = true;
    this.currentTitle = this.titles[0];
    window.scrollTo(0, 0);
    this.concurrentDomHeader(); // Force concurrent DOM styling.
    this.resizeHeader();
  }

  onSimpleHeaderComponent() {
    setTimeout(() => {
      this.showDropdownTitle = true;
    }, DELAY);

    this.dropdown.menu.current = menu.find(x => x.route == this.router.url.substring(1));
    this.dropdown.menu.items = menu.filter(x => x != this.dropdown.menu.current);
    this.stickyHeader(); // Force sticky styling.
    this.outlet!.nativeElement.style.marginTop  = this.minHeight - 30 + 'px';
  }
}