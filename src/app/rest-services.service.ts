import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class RestServicesService {

  constructor(private httpClient: HttpClient) { }

  public getJSON(): Observable<any> {
    return this.httpClient.get("./assets/mydata.json");
  }
}
