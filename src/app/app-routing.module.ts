import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDisplayComponent } from './components/main-display/main-display.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


const recipeRoutes: Routes = [
  {path: 'main-display', component: MainDisplayComponent},
  {path: '', redirectTo: '/main-display', pathMatch:'full'},
  {path: 'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(recipeRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
