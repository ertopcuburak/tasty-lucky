import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealApiHandlerService {
  randomMeal:BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http:HttpClient) { 

  }

  public setRandomMeal() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
    this.http.get<any>(apiUrl).subscribe(data=> {
      this.randomMeal.next(data.meals[0]);
    });
  }

  public getRandomMeal(){
    return this.randomMeal.value;
  }
}
