import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  private finaldata = [];
  private apiurl = "http://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
  getData() {
     return this.http.get(this.apiurl);
  }
}
