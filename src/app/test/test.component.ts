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

    // STEP1 - prepare the form model for later usage
    this.myForm = this.formBuilder.group({
      firstname: this.user.username,
      lastname: ''
    });

    // STEP2 - when data loaded, use the real data and bind it to the model;
    this.myForm.controls['lastname'].setValue("Detlef");
  }

  submitForm(): void {
    // STEP3 - when form submitted, extract data from Form field and create JSON Values
    // or use the JSON filter with pipe
    console.log(this.myForm);
  }

}
