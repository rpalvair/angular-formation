import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  getProperties(): Observable<any[]> {
    let i = 0;
    return new Observable((observer) => {
      if (this.properties && this.properties.length > 0) {
        let interval = setInterval(() => {
          observer.next(this.properties)
          i++
        }, 3000)
        if (i === 3) {
          observer.complete
          clearInterval(interval)
        }
      } else {
        const error = new Error("Properties do not exist or are empty");
        observer.error(error)
      }
    });
  }
}
