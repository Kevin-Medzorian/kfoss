import { Component, ElementRef, Renderer2, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FadeIn, FadeOut } from '../animations';

const DELAY = 200;
interface Title {
  text: string;
  size: number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [FadeIn(DELAY), FadeOut(DELAY)]
})
export class HeaderComponent implements OnInit {
  @ViewChild('title', { static: false }) titleElem! : ElementRef;
  initialHeight: number = 300;
  minHeight:     number =  85;
  newHeight:     number =   0;

  titles: Title[]    = [ {text: 'Kfoss.', size: 4},
                         {text: 'Free & Open Source', size: 2}];
  currentTitle: Title   = this.titles[0];
  showTitle = true;
  showRight = true;

  // Elements
  header?: HTMLElement;
  outlet?: HTMLElement;
  title?:  HTMLElement;

  constructor(public element: ElementRef, public renderer: Renderer2, public router: Router) {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    this.header = document.getElementById('header')!;
    this.outlet = document.getElementById('outlet')!;
    this.title  = document.getElementById('title')!;
    this.outlet.style.marginTop = this.initialHeight + 'px';
  }

  ngAfterViewInit() {
    document.addEventListener('scroll', (ev) => {
      this.resizeHeader(ev);
    });

    window.onresize = () =>{
      this.checkShowRight();
    } 
  }

  checkShowRight() {
    if (this.currentTitle == this.titles[0]) {
      this.showRight = window.innerWidth > 400;
    } else {
      this.showRight = window.innerWidth > 600;
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
    this.newHeight = this.initialHeight - window.scrollY / 2;

    if (this.newHeight < this.minHeight) {
      this.newHeight = this.minHeight;
      if (this.currentTitle != this.titles[1])
        this.animatedTitleChange(this.titles[1]);
    } else if (this.currentTitle != this.titles[0]){ 
      this.animatedTitleChange(this.titles[0]);
    }

    // let fontsize = this.newHeight / this.initialHeight;
    // if (fontsize >= 0.5) {
    //   this.header!.style.fontSize = fontsize + 'em';
    // }

    this.header!.style.height = this.newHeight + 'px';

    if (this.newHeight > 100)
      this.outlet!.style.marginTop = this.newHeight + window.scrollY + 'px';

  }

}