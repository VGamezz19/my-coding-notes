import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface Addres {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface User {
  name: string;
  lastName: string;
  age: number;
  addres: Addres;
}

class Form<T> {
  constructor(private fb: FormBuilder, private entity: T) {}

  build() {
    return this.fb.group(this.entity);
  }
}

@Component({
  selector: 'app-dinamic-form',
  templateUrl: './dinamic-form.component.html',
  styleUrls: ['./dinamic-form.component.scss']
})
export class DinamicFormComponent implements OnInit {
  user = {
    name: '',
    lastName: '',
    age: 0,
    addres: {
      city: '',
      state: '',
      street: '',
      zip: ''
    }
  } as User;

  custom = new Form<User>(this.fb, this.user).build();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.custom);
  }
}
