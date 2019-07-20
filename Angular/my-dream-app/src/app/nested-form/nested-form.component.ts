import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(0),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor() {}

  updateProfileGroup() {
    this.profileForm.setValue({
      firstName: 'Victor',
      lastName: 'Gamez',
      age: 22,
      address: {
        street: 'Av/Once de septiembre',
        city: 'El Prat del Llobregat',
        state: 'Catalunya',
        zip: '08820'
      }
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
