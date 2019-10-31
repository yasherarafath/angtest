import { Component } from '@angular/core';
import { TestserviceService } from './testservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private myservice: TestserviceService) {

  }

  ngOnInit() {
    this.myservice.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k => data[k]);
    });
  }

}
