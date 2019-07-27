import { Observable, fromEventPattern } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCompany } from './storage';
import { Company } from './company.model';
import { User, addUser } from '../user';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companys$: Observable<Company[]>;
  users$: Observable<User[]>;

  constructor(private store: Store<{ companys: Company[] }>) {
    this.companys$ = this.store.select('companys');
    this.users$ = this.store.select('users');
  }

  ngOnInit() {
    this.users$.subscribe(users => {
      if (!users.length) {
        return;
      }

      const company = this.generateInitualDummyCompany(users[0].id);
      this.store.dispatch(addCompany({ company }));
      debugger;
    });
  }

  generateInitualDummyCompany(userId: string): Company {
    const company = {
      id: '1',
      CIF: 123123312,
      addres: 'Carrer de Balmes',
      name: 'Plain Colon',
      userIds: [userId]
    } as Company;

    return company;
  }

  mapRelationBetweenComapnyAndUsers(company: Company, useres: User[]): User[] {
    const arrayOfUsers = company.userIds.map(ids =>
      useres.find(u => u.id === ids)
    );
    return arrayOfUsers;
  }
}
