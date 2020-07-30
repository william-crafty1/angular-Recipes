import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {
  searchList = false;

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  getRecipes(){
    console.log(this.recipeService.recipes);
    return this.recipeService.recipes
  }

}
