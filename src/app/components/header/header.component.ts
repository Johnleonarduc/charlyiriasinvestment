import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars= faBars;

  navbarOpen = false;
  clicked = false;

  toggleNav() {
    this.navbarOpen = !this.navbarOpen;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
