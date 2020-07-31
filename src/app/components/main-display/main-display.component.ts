import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { QuotesService } from "../../quotes.service";

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {
  searchList = false;
  showDetail: boolean;
  selectedRecipe: any;
  ramsayQuote: string;

  constructor(private recipeService : RecipeService,
              private quotesService : QuotesService) { }

  ngOnInit(): void {
    this.showDetail = false;
    this.ramsayQuote = this.quotesService.getRandomQuote().quote;
  }

  getRecipes(){
    console.log(this.recipeService.recipes);
    return this.recipeService.recipes;
  }

  addFavorites(recipe: any){
    this.recipeService.favoriteRecipes.push(recipe);
  }
  
  displayDetail(recipe: any) { 
    this.showDetail = true;
    this.selectedRecipe = recipe.recipe;
  }

  

}
