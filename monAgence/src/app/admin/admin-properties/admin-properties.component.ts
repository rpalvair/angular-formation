import { PropertiesService } from './../../services/properties.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  propertiesForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.initPropertiesForm()
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
  }
}
