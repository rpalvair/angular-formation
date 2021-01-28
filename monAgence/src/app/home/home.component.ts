import { PropertiesService } from './../services/properties.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private propertiesService: PropertiesService) { }

  private forSale = true;

  private properties: any[] = [];

  ngOnInit(): void {
    this.propertiesService.getProperties()
    .then(
      (data) => {
        console.log("Data = ",data)
        this.properties = data
      }
    ).catch(
      (error) => {
        console.error("Error =",error)
      }
    )
  }

  getColorForSaleText = (val: any): String => {
    return val.forSale ? "green" : "red";
  }

  isForSale(): boolean {
    return this.forSale;
  }

  getProperties(): any[] {
    return this.properties;
  }
}
