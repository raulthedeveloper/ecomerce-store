import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/services/get/get.service';
import { PostService } from 'src/app/services/post/post.service';
import { DeleteService } from 'src/app/services/delete/delete.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-admin-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  constructor(private getService: GetService,private postService: PostService, private deleteService: DeleteService) { }
  data:any[] = []

  ngOnInit(): void {
    this.getService.getLocations().subscribe((locations) =>(this.data = locations))

  }

  addLocation(data:Location){
    this.postService.addLocation(data).subscribe(() =>(this.ngOnInit()))

  }
  refreshTable(){
    this.ngOnInit();
  }


  deleteLocation(id:number){
    this.deleteService.deleteLocation(id).subscribe();
  }
}
