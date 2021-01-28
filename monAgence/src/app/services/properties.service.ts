import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor() { }


  private properties = [
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

  getProperties(): Promise<any[]> {
    return new Promise(
      (resolve, reject) => {
        resolve(this.properties);
      }
    );
  }
}
