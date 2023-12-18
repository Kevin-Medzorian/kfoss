/**
 * Copyright 2023, Kevin Medzorian 
 * This file is part of KFOSS.
 * KFOSS is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * KFOSS is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with KFOSS. If not, see <https://www.gnu.org/licenses/>.
 **/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoaderComponent } from './common/loader/loader.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { SafeHtmlPipe } from './common/safe-html.pipe';

// Get baseHref from compilation.
export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ToolsComponent,
    PageNotFoundComponent,
    AboutComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    NgbDropdownModule,
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
