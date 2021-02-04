

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../interfaces/property';
import { PropertiesService } from './../services/properties.service';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  property: Property;

  constructor(private activatedRoute: ActivatedRoute,
    private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    const propertyId: number = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    console.log("propertyId", propertyId)
    this.propertiesService.getProperty(propertyId).then(
      (value) => {
        this.property = value;
      }
    ).catch(
      (error) => console.error(error)
    )
  }


}
