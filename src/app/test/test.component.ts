import { Component, OnInit } from '@angular/core';
// import { ChangeTextDirective } from '../change-text.directive';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testvar = 'Entered in new component created';
  constructor() { }

  ngOnInit() {
  }

}
