import {Component,Input} from '@angular/core';
import  {User} from '../model/user';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'firstInputComponent',
  styleUrls: ['firstInputComponent.component.css'],
  templateUrl: 'firstInputComponent.component.html',
})
export class FirstInputComponent {
  @Input() user: User;
  @Input() outerForm: FormGroup;
}
