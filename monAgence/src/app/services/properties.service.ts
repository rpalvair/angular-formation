import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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

  private subject: Subject<any> = new Subject();

  emitProperty() {
    let i = 0;
    let interval = setInterval(() => {
      this.subject.next(this.properties[i])
      i++
      console.debug("i =", i)
      console.debug("this.properties.length =", this.properties.length)
      if (i === this.properties.length) {
        console.debug("complete")
        clearInterval(interval)
        this.subject.complete()
      }
    }, 1000)

  }

  getProperties() {
    return this.subject
  }
}
