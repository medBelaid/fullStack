import { Component } from 'angular2/core';
import {Person} from './person';
@Component({
  selector: 'people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul *ngFor="#person of people">
    <li>
     {{person.name}} - {{person.height}}
    </li>
  </ul>
  `
})
export class PeopleListComponent{
  people: Person[] = [
    {name: 'Mohamed Romdhani', height: 170, weight: 74},
    {name: 'Ramy Ben Chaabene', height: 180, weight: 80},
    {name: 'Mohamed Ali Hammar', height: 178, weight: 75},
  ];

}
