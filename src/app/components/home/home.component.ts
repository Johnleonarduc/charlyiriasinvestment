import { Component, OnInit } from '@angular/core';
import { faChevronCircleLeft, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  faChevronCircleLeft = faChevronCircleLeft;
  faChevronCircleRight = faChevronCircleRight;
  faCircle = faCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
