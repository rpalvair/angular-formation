import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon Agence';

  private forSale = true;

  getColorForSaleText = (val: any) : String => {
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
