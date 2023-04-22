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
