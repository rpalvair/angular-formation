import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon Agence';

  private forSale = true;

  getForSaleValue() {
    return this.forSale ? "green" : "red";
  }

  isForSale(): boolean {
    return this.forSale;
  }
}
