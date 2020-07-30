import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  recipeFormSubmitted(formData: any) {
    const recipeSearch: any = {
      q: formData.q,
      diet: formData.diet
    };

    this.recipeService.getRecipes(recipeSearch).subscribe((data: any) => {
      const recipeArrayDiet = data.hits.filter(recipe => recipe.recipe.dietLabels.includes(formData.diet));
      this.recipeService.recipes =  recipeArrayDiet;
    });


  }
}