import { Person } from './person';

export class PeopleService{
  getAll() : Person[] {
    return [
    {name: 'Mohamed Romdhani', height: 170, weight: 74, user:'Romdhane'},
    {name: 'Ramy Ben Chaabene', height: 180, weight: 80, user:'Chaabene'},
    {name: 'Mohamed Belaid', height: 178, weight: 75, user:'Aid'},
  ];
  }
}
