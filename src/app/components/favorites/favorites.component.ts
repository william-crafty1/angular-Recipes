import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }

  getFavoriteRecipes() { 
    return this.recipeService.favoriteRecipes;
  }

}
