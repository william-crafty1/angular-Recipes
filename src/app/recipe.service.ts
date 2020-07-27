import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    recipes: any;

    constructor(private http: HttpClient){

    }

    getRecipes(data: any): Observable<any>{
      const parameters = {
        app_key: '284ef404822101158223b8d34e979603',
        app_id: '650ae839',
        q: data.q ? data.q : '',
        health: data.health ? data.health : '',
        diet: data.diet ? data.diet : '', 

      }
        return this.http.get('https://api.edamam.com/search', {params: parameters});
    }
  }