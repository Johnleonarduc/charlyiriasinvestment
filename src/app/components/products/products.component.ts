import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  calcOpen:boolean = false;

  toggleCalc(){
    this.calcOpen = !this.calcOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
