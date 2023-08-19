/**
 * Copyright 2023, Kevin Medzorian 
 * This file is part of KFOSS.
 * KFOSS is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * KFOSS is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with KFOSS. If not, see <https://www.gnu.org/licenses/>.
 **/

import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';

// Define all routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kevin-medzorian', component: AboutComponent},
];

// Route all tools to the same component.
const tools: string[] = ['accents', 'metronome', 'definition-finder', 'encrypter', 'screencapper'];
tools.forEach(t => routes.push({ path: t, component: ToolsComponent}));

// Define PageNotFound route
const PageNotFound: Route = { path: '**', component: PageNotFoundComponent };

@NgModule({
  imports: [RouterModule.forRoot(routes.concat(PageNotFound))],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
