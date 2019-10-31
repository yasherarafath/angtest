import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  testvar = 'Entered in new component created';
  title = 'angtest';
  // serviceproperty = "Service Created";
  todaydate;
  months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  // isavailable = false; //variable is set to true
  isavailable = true; //variable is set to true}

  constructor(private myservice: TestserviceService) {

  }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
  }

  countrychange(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("select is changed");
    console.log(event);
  }
  buttonclick(event) {
    this.isavailable = !this.isavailable;
    // variable is toggled onclick of the button 
  }

}
