import { Injectable } from '@angular/core';
import { Candy } from './candy';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandyDataService {

  // array of candy
  candies: Candy[] = [];

  // method to get candy
  // was: getCandy(): Candy[] {
  getCandy(): Observable<Candy[]> {
    // was: return this.candies;
    console.log(this.candies);
    return of(this.candies);
  }

  // method to add candy
  addCandy(candy: Candy) {
    this.candies.push(candy);
    console.log(this.candies);
  }

  deleteCandy(candy):Observable<Candy[]> {
    const index = this.candies.indexOf(candy);
    return of(this.candies.splice(index, 1));
  }

  getCount(){
    return this.candies.length;
  }

  constructor() { }
}
