import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form)
    const title = form.value['title']
    console.log("title", title)
  }
}
