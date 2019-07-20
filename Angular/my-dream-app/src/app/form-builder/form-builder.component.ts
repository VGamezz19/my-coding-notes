import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    age: [0],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

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

  constructor(private fb: FormBuilder) {}
}
