import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_BASE_HREF, NgFor, PlatformLocation } from '@angular/common';

// Get baseHref from compilation.
export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    { /* Provider allows APP_BASE_HREF to be injected into various components 'constructor' */
      provide: APP_BASE_HREF,
      useFactory: getBaseHref,
      deps: [PlatformLocation]
    }
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
