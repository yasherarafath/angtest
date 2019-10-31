import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angtest';
  months = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"];

  // isavailable = false; //variable is set to true
  isavailable = true; //variable is set to true

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
