import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  showDetail: boolean;
  selectedRecipe: any;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.showDetail = false;
  }

  getFavoriteRecipes(favorite: any) { 
    console.log(this.recipeService.favoriteRecipes);
    let uniqueRecipes = this.recipeService.favoriteRecipes.filter((c, index) => {
      return this.recipeService.favoriteRecipes.indexOf(c) === index;
  });
    return uniqueRecipes;
  }

  displayDetail(recipe: any) { 
    this.showDetail = true;
    this.selectedRecipe = recipe.recipe;
  }

  removeFavorite(favorite: any) { 
    const favoriteIndex = this.recipeService.favoriteRecipes.indexOf(favorite);
    this.recipeService.favoriteRecipes.splice(favoriteIndex, 1);
  }

}
