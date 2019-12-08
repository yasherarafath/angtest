import { Component } from '@angular/core';
import { TestserviceService } from './testservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persondata;
  emailid;
  formdata;
  formvalues;
  constructor(private myservice: TestserviceService,private fb: FormBuilder) {

  }

  // ngOnInit() {
  //   this.myservice.getData().subscribe((data) => {
  //     this.persondata = Array.from(Object.keys(data), k => data[k]);
  //   });
  // }

  ngOnInit() {
    // this.formdata = new FormGroup({
    //    emailid: new FormControl('', Validators.compose([
    //       Validators.required,
    //       Validators.pattern("[^ @]*@[^ @]*")
    //    ])),
    //    passwd: new FormControl("", this.passwordvalidation)
    // });
    this.formdata = this.fb.group({
      emailid: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
      passwd: ['', this.passwordvalidation]
    })
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { "passwd": true };
    }
  }
  onClickSubmit(data) { 
    console.log(data);
    this.formvalues = data;
    this.emailid = data.emailid; 
  }

}
