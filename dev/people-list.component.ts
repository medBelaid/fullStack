import { Component } from 'angular2/core';
import {Person} from './person';
import { PeopleService } from './people.service';
@Component({
  selector: 'people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul *ngFor="#person of people">
    <li>
     {{person.name}} - {{person.height}}
    </li>
  </ul>
  `,
  providers: [PeopleService]
})
export class PeopleListComponent{
people: Person[] = [];
constructor(private _peopleService : PeopleService){
  this.people = _peopleService.getAll();
}
}
