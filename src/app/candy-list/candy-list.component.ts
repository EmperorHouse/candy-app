import { Component, OnInit, Output } from '@angular/core';
import { CandyDataService } from '../candy-data.service';
import { Candy } from '../candy';
import { EventEmitter } from 'events';
import { getCanActivateChild } from '@angular/router/src/utils/preactivation';

@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrls: ['./candy-list.component.css']
})
export class CandyListComponent implements OnInit {

  candies: Candy[];

  constructor(private candyDataService: CandyDataService) {
  }

  ngOnInit() {
    this.getCandy();
  }

  getCandy(){
    this.candyDataService.getCandy().subscribe(c => (this.candies = c));
    console.log(this.candies);
  }

  deleteCandy(candy: Candy){
    this.candyDataService.deleteCandy(candy).subscribe(c => (console.log(c)));
  }

}
