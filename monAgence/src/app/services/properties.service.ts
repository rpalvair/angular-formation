import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import { Subject } from 'rxjs';
import { Property } from '../interfaces/property';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor() { }


  private properties: Property[] = [
    // {
    //   'title': 'Ma superbe maison',
    //   'category': 'Maison',
    //   'surface': 100,
    //   'forSale': false,
    //   'price': 400000,
    //   'rooms': 4
    // },
    // {
    //   'title': 'Petit appartement',
    //   'category': 'Appartement',
    //   'rooms': 4,
    //   'forSale': true,
    //   'surface': 100,
    //   'price': 280000

    // },
    // {
    //   'title': 'Belle villa',
    //   'category': 'Maison',
    //   'forSale': false,
    //   'surface': 100,
    //   'price': 30000,
    //   'rooms': 5
    // }
  ];

  private subject: Subject<any> = new Subject();

  emitProperty() {
    firebase.database().ref("/properties").on('value', (snapshot) => {
      console.log("value from db " + JSON.stringify(snapshot.val()));
      this.properties = snapshot.val() ? snapshot.val() : []
      this.subject.next(this.properties)
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.message);
    })

  }

  createProperty(property: Property) {
    if (!property.description) {
      property.description = ""
    }
    console.log("adding property", property)
    this.properties.push(property)
    console.log("properties", this.properties)
    this.saveProperties()
  }

  deleteProperty(property: Property) {
    console.log("Delete property", property)
    const index = this.properties.indexOf(property);
    if (index > -1) {
      this.properties.splice(index, 1);
    }
    console.log("properties", this.properties)
    this.saveProperties()
  }

  updateProperty(property: Property, index: number) {
    console.log(`Update property ${JSON.stringify(property)} at index ${index}`)
    if (index > -1) {
      this.properties.splice(index, 1, property);
    }
    console.log("properties", this.properties)
    this.saveProperties()
  }

  private saveProperties() {
    firebase.database().ref("/properties").set(this.properties)
  }

  uploadFile(file: File): Promise<any> {
    return new Promise<any>(
      (resolve, reject) => {
        const uniqueId = Date.now().toString() + file.name
        const upload: firebase.storage.UploadTask = firebase.storage().ref().child("images/properties" + uniqueId).put(file)
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            console.log("Loading...")
          },
          (error) => {
            console.error(error)
            reject(error)
          },
          () => {
            console.log("Completed")
            upload.snapshot.ref.getDownloadURL().then((downloadURL) => {
              console.log('File available at', downloadURL);
              resolve(downloadURL)
            });
          })
      }
    )
  }

  removeFile(url: string) {
    if (url) {
      const reference: firebase.storage.Reference = firebase.storage().refFromURL(url)
      reference.delete().then(
        () => console.log("file" + url + "deleted")
      ).catch(
        (error) => console.error(error)
      )
    }
  }

  getProperties() {
    return this.subject
  }

}
