import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-Recipes';

  recipesParams: object = {
    q: "chicken",
    health: "peanut-free",
    diet: "low-fat"
  }

  constructor(private service: RecipeService){}

  ngOnInit(){
    this.service.getRecipes(this.recipesParams).subscribe(data =>{
      console.log(data);
    });
  }

  // getRecipes(){
  //   console.log(this.service.recipes);
  //   return this
  // }
}
