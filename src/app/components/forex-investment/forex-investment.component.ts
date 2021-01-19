import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forex-investment',
  templateUrl: './forex-investment.component.html',
  styleUrls: ['./forex-investment.component.css']
})
export class ForexInvestmentComponent implements OnInit {

  principal:number = 0;
  interestRate:number = 30;
  lengthOfTerm:string = '3';
  interest:number = 0;
  simpleInterest:boolean =true;
  compoundInterest:boolean =false;
  interestType:string = 'simple interest';
  
  calcOpen:boolean = false;

  toggleCalc(){
    this.calcOpen = !this.calcOpen;
  }

  calculator(){
    if(this.interestType === 'simple interest'){
        this.interest = this.principal*(this.interestRate/100)*(parseInt(this.lengthOfTerm, 10));
    }else if(this.interestType === 'compound interest'){
      this.interest = this.principal*((1+ (this.interestRate/100))**(parseInt(this.lengthOfTerm, 10)));
    }else{
      this.interest = 0;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
