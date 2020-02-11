import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { RestServicesService } from '../rest-services.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent{
  public placesData:any = [] ;
  constructor(private http: HttpClient, private RestServices: RestServicesService) {
    this.RestServices.getJSON().subscribe(data => {
      this.placesData = JSON.parse(JSON.stringify(data));
        console.log(data);
    });
  }
  

  ngOnInit(): void {
  }

}