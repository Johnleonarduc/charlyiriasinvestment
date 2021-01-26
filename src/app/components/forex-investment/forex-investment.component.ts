import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forex-investment',
  templateUrl: './forex-investment.component.html',
  styleUrls: ['./forex-investment.component.css']
})
export class ForexInvestmentComponent implements OnInit {

  principal:number = NaN;
  interestRate:number = 30;
  lengthOfTerm:string = '3';
  // interest:number = this.calculator();
  simpleInterest:boolean =true;
  compoundInterest:boolean =false;
  interestType:string = 'simple interest';
  
  calcOpen:boolean = false;

  toggleCalc(){
    this.calcOpen = !this.calcOpen;
  }

  calculator(){
    if(this.interestType === 'simple interest'){
        return this.principal*(this.interestRate/100)*(+this.lengthOfTerm);
    }else if(this.interestType === 'compound interest'){
      return this.principal*((1+ (this.interestRate/100))**(+this.lengthOfTerm));
    }else{
      return 0;
    }
  }

  
  constructor() { }

  ngOnInit(): void {
  }
}
