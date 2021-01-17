import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forex-investment',
  templateUrl: './forex-investment.component.html',
  styleUrls: ['./forex-investment.component.css']
})
export class ForexInvestmentComponent implements OnInit {


  
  calcOpen:boolean = false;

  toggleCalc(){
    this.calcOpen = !this.calcOpen;
  }

  
  constructor() { }

  ngOnInit(): void {
  }
}
