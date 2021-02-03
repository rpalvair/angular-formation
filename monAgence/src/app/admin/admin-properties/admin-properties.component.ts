
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Property } from '../../interfaces/property';
import { PropertiesService } from './../../services/properties.service';
declare var $: any;

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  propertiesForm: FormGroup;
  propertiesSubscription: Subscription;
  properties: Property[] = [];
  toDelete: Property;
  private editMode: boolean = false;
  private indexToUpdate: number = null;
  photoLoading: boolean = false;
  photosUrl: any[];

  constructor(private formBuilder: FormBuilder, private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.initPropertiesForm()
    this.propertiesService.getProperties().subscribe(
      (data) => {
        console.log("data", data)
        this.properties = data
      }
    )
    this.propertiesService.emitProperty()
  }

  initPropertiesForm() {
    this.propertiesForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        category: ['', Validators.required],
        surface: ['', Validators.required],
        rooms: ['', Validators.required],
        description: '',
        price: ['', Validators.required],
        forSale: ''
      }
    )
  }

  onSubmit() {
    console.log(this.propertiesForm.value)
    const title = this.propertiesForm.value['title']
    console.log("title", title)
    const property: Property = this.propertiesForm.value
    property.photos = this.photosUrl ? this.photosUrl : []
    if (this.editMode) {
      console.log("Edit mode for property", property)
      this.propertiesService.updateProperty(property, this.indexToUpdate)
    } else {
      this.propertiesService.createProperty(property)
    }
    console.log("properties", this.properties)
    this.editMode = false
    this.indexToUpdate = null
    $('#propertiesFormModal').modal('hide')
  }

  resetForm() {
    this.propertiesForm.reset()
    this.editMode = false
    this.indexToUpdate = null
    this.photosUrl = []
  }

  onDeleteProperty(property: any) {
    console.log("Delete property", property)
    this.toDelete = property;
    $('#deletePropertyModal').modal('show')
  }

  onConfirmDelete() {
    this.propertiesService.removeFiles(this.toDelete.photos)
    this.propertiesService.deleteProperty(this.toDelete)
    $('#deletePropertyModal').modal('hide')
    this.toDelete = null
  }

  onCancelDelete() {
    this.toDelete = null
  }

  onEditProperty(property: Property) {
    this.editMode = true;
    this.indexToUpdate = this.properties.indexOf(property);
    this.photosUrl = property.photos ? property.photos : []
    $('#propertiesFormModal').modal('show')
    this.propertiesForm.get('title').setValue(property.title)
    this.propertiesForm.get('category').setValue(property.category)
    this.propertiesForm.get('surface').setValue(property.surface)
    this.propertiesForm.get('rooms').setValue(property.rooms)
    this.propertiesForm.get('description').setValue(property.description)
    this.propertiesForm.get('price').setValue(property.price)
    this.propertiesForm.get('forSale').setValue(property.forSale)
  }

  onUpLoadFile(event) {
    console.log("event", event)
    this.photoLoading = true
    this.propertiesService.uploadFile(event.target.files[0]).then(
      (url: string) => {
        console.log("url", url)
        this.photosUrl.push(url)
        this.photoLoading = false
      }
    )
  }

  deletePhoto(url: string) {
    this.propertiesService.removeFiles(new Array(url))
    this.photosUrl.splice(this.photosUrl.indexOf(url), 1)
  }
}
