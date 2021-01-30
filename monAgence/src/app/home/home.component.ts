import { PropertiesService } from './../services/properties.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private propertiesService: PropertiesService) { }

  private forSale = true;

  private properties: any[] = [];

  private subscribtion: Subscription;

  ngOnInit(): void {
    this.subscribtion = this.propertiesService.getProperties()
      .subscribe(
        (data) => {
          console.log("Data = ", data)
          this.properties =  data
        }
      )
    this.propertiesService.emitProperty()
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

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
    console.log("unsubscribe")
  }
}
