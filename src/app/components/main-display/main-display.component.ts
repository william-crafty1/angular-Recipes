import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {
  searchList = false;
  favoriteRecipes = [];
  showDetail: boolean;
  selectedRecipe: any;

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.showDetail = false;
  }

  getRecipes(){
    console.log(this.recipeService.recipes);
    return this.recipeService.recipes
  }

  addFavorites(recipe: any){
    this.favoriteRecipes.push(recipe);
  }
  
  displayDetail(recipe: any) { 
    this.showDetail = true;
    this.selectedRecipe = recipe.recipe;
  }

  

}
