import {Component, OnInit} from '@angular/core';
import  {User} from '../model/user';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'test',
  styleUrls: ['./test.component.css'],
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit{

  user = new User('klaus',22);
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstname: '',
      lastname: ''
    });
  }

  submitForm(): void {
    console.log(this.myForm);
  }

}
