import { PropertiesService } from './../../services/properties.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  propertiesForm: FormGroup;
  propertiesSubscription: Subscription;
  properties: any[] = [];
  toDelete : any;

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
        price: ['', Validators.required]
      }
    )
  }

  onSubmit() {
    console.log(this.propertiesForm.value)
    const title = this.propertiesForm.value['title']
    console.log("title", title)
    const property = this.propertiesForm.value
    this.propertiesService.createProperty(property)
    console.log("properties", this.properties)
    $('#propertiesFormModal').modal('hide')
  }

  resetForm() {
    this.propertiesForm.reset()
  }

  onDeleteProperty(property: any) {
    console.log("Delete property",property)
    this.toDelete = property;
    $('#deletePropertyModal').modal('show')
  }

  onConfirmDelete() {
    this.propertiesService.deleteProperty(this.toDelete)
    $('#deletePropertyModal').modal('hide')
    this.toDelete = null
  }

  onCancelDelete() {
    this.toDelete = null
  }
}
