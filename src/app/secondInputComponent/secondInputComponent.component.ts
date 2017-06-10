import {Component,Input} from '@angular/core';
import  {User} from '../model/user';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'secondInputComponent',
  styleUrls: ['secondInputComponent.component.css'],
  templateUrl: 'secondInputComponent.component.html',
})
export class SecondInputComponent {
  @Input() outerForm: FormGroup;
}
