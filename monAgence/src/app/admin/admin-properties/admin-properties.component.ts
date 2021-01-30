import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  propertiesForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initPropertiesForm()
  }

  onSubmit() {
    console.log(this.propertiesForm.value)
    const title = this.propertiesForm.value['title']
    console.log("title", title)
  }

  initPropertiesForm() {
    this.propertiesForm = this.formBuilder.group(
      {
        title: '',
        category: '',
        surface: '',
        rooms: '',
        description: '',
        price: ''
      }
    )
  }
}
