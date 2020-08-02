import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    recipes: any = [];
    favoriteRecipes: any = [];

    constructor(private http: HttpClient){

    }

    getRecipes(data: any): Observable<any>{
      const parameters = {
        q: data.q,
        app_id: 'fe34feed',
        app_key: '305f31f55a51a74e251a32a89c7ac20c',
        to: '100'
      }
      const returnRecipes = this.http.get('https://api.edamam.com/search', {params: parameters});
      return returnRecipes
    }
  }