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
      'surface': '100',
      'forSale': false,
      'price': 400000
    },
    {
      'title': 'Petit appartement',
      'category': 'Appartement',
      'rooms': 4,
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

  deleteProperty(property: any) {
    console.log("Delete property", property)
    const index = this.properties.indexOf(property);
    if (index > -1) {
      this.properties.splice(index, 1);
    }
    console.log("properties", this.properties)
  }

  updateProperty(property: any, index: number) {
    console.log(`Update property ${JSON.stringify(property)} at index ${index}`)
    if (index > -1) {
      this.properties.splice(index, 1, property);
    }
    console.log("properties", this.properties)
  }

  getProperties() {
    return this.subject
  }

}
