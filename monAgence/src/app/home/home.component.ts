import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  private forSale = true;

  ngOnInit(): void {
  }

  getColorForSaleText = (val: any): String => {
    return val.forSale ? "green" : "red";
  }

  isForSale(): boolean {
    return this.forSale;
  }

  getProperties(): any[] {
    return [
      {
        'title': 'Ma superbe maison',
        'category': 'Maison',
        'forSale': false
      },
      {
        'title': 'Petit appartement',
        'category': 'Appartement',
        'forSale': true
      },
      {
        'title': 'Belle villa',
        'category': 'Maison',
        'forSale': false
      }
    ];
  }
}
