import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  glassPolishing = false;
  changeGlasses = false;
  glassWelding = false;

  constructor() {
    this.glassPolishing = true;
  }

  ngOnInit(): void {
  }

  glassPolishingType() {
    this.glassPolishing = true
    this.changeGlasses = false
    this.glassWelding = false
  }

  changeGlassesType() {
    this.glassPolishing = false
    this.changeGlasses = true
    this.glassWelding = false
  }

  glassWeldingType() {
    this.glassPolishing = false
    this.changeGlasses = false
    this.glassWelding = true
  }
}
