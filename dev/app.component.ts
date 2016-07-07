import {Component} from 'angular2/core';
import {PeopleListComponent} from './people-list.component';
@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 3 Boilerplate {{ pageTitle }}</h1>
        <p>Hello World in Fast Print Sahline!</p>
        <people-list>
    `,
    directives: [PeopleListComponent]
})
export class AppComponent {
pageTitle: string = "Acme Product";
}
