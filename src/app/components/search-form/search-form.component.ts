import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  recipes: any = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  recipeFormSubmitted(data: any) {
    const recipeSerach: any = {
      q: data.q,
      health: data.health,
      diet: data.diet
    };

    this.recipeService.getRecipes(recipeSerach).subscribe((data: any) => {
      this.recipeService.recipes = data.hits.recipes;
      console.log(data);
    });


  }
}