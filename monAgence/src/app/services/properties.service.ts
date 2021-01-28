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

  getProperties(): Observable<any> {
    return new Observable((observer) => {
      if (this.properties && this.properties.length > 0) {
        let i = 0;
        let interval = setInterval(() => {
          observer.next(this.properties[i])
          i++
          console.debug("i =", i)
          console.debug("this.properties.length =", this.properties.length)
          if (i === this.properties.length) {
            console.debug("complete")
            clearInterval(interval)
            observer.complete()
          }
        }, 1000)
      } else {
        const error = new Error("Properties do not exist or are empty");
        observer.error(error)
      }
    });
  }
}
