import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/services/get/get.service';
import { Location } from 'src/app/DataInterfaces';

@Component({
  selector: 'app-store-locations',
  templateUrl: './store-locations.component.html',
  styleUrls: ['./store-locations.component.scss']
})
export class StoreLocationsComponent implements OnInit {

  public locations:Location[] | undefined

  constructor(private getService:GetService) { }

  ngOnInit(): void {
    this.getService.getLocations().subscribe((locations) =>(this.locations = locations))

  }


}
