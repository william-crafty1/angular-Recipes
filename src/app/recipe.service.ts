import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    recipes: any = [];

    constructor(private http: HttpClient){

    }

    getRecipes(data: any): Observable<any>{
      const parameters = {
        q: data.q,
        app_id: '650ae839',
        app_key: '284ef404822101158223b8d34e979603',
        to: '20'
      }
      const returnRecipes = this.http.get('https://api.edamam.com/search', {params: parameters});
      return returnRecipes
    }
  }