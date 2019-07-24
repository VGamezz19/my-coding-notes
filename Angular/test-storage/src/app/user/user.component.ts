import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { addUser, addUsers } from './storage';
import { User } from './user.model';
import { Company, addUserToCompany } from '../company';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users$: Observable<User[]>;
  companys$: Observable<Company[]>;
  selectCompanys = [];

  userForm = this.fb.group({
    name: [''],
    lastName: [''],
    age: [0],
    companyId: ['']
  });

  constructor(
    private store: Store<{ users: User[] }>,
    private fb: FormBuilder
  ) {
    this.users$ = store.pipe(select('users'));
    this.companys$ = store.pipe(select('companys'));
  }

  ngOnInit() {
    this.generateNewUseres([this.generateUser('Victor', 'Gamez', 22)]);
    this.companys$.subscribe(companys => {
      if (companys) {
        this.selectCompanys = companys.map(({ id, name }) => ({ id, name }));
      }
    });
  }

  onSubmit() {
    const { name, lastName, age, companyId } = this.userForm.value;
    const user = this.generateUser(name, lastName, age);

    this.userForm.reset();
    this.addNewUser(user);
    this.store.dispatch(addUserToCompany({ companyId, userId: user.id }));
  }

  addNewUser(user: User) {
    this.store.dispatch(addUser({ user }));
  }

  generateNewUseres(users: User[]) {
    this.store.dispatch(addUsers({ users }));
  }

  generateUser(name: string, lastName: string, age: number): User {
    return { name, lastName, age, id: String(Math.random() * 100 + 2) } as User;
  }
}
