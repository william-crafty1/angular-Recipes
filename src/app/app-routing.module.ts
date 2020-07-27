import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDisplayComponent } from './components/main-display/main-display.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { AboutComponent } from "./components/about/about.component";

const recipeRoutes: Routes = [
  {path: '', component: MainDisplayComponent},
  {path: 'about-the-idiot-sandwich', component: AboutComponent},
  {path: 'favorite-recipes', component: FavoritesComponent},
  {path: 'search', component: SearchFormComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path:'**', redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(recipeRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
