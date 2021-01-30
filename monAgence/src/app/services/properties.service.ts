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
    this.subject.next(this.properties)
  }

  createProperty(property: any) {
    console.log("adding property", property)
    this.properties.push(property)
    console.log("properties", this.properties)
  }

  getProperties() {
    return this.subject
  }

}
