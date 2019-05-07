import { CandyDataService } from './../candy-data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private candyDataService: CandyDataService) {
  }

  ngOnInit() {
  }

  getCount(){
    return this.candyDataService.getCount();
  }

}
