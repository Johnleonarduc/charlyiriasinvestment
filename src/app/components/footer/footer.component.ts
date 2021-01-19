import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhone, faMapMarker} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fafacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faWhatsapp = faWhatsapp;
  faMapMarker = faMapMarker;

}
