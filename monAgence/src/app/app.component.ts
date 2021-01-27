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
    return val.forSell ? "green" : "red";
  }

  isForSale(): boolean {
    return this.forSale;
  }

  getProperties(): any[] {
    return [
      {
        'title': 'Ma superbe maison',
        'category': 'Maison',
        'forSell': false
      },
      {
        'title': 'Petit appartement',
        'category': 'Appartement',
        'forSell': true
      },
      {
        'title': 'Belle villa',
        'category': 'Maison',
        'forSell': false
      }
    ];
  }
}
