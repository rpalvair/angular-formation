import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarTitle = "AgenceImmo"
  private disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  isDisabled(): boolean {
      return this.disabled;
  }

  onClick() {
    console.log("on click");
    this.disabled = !this.disabled;
  }
}
