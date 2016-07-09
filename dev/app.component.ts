import {Component} from 'angular2/core';
import {PeopleListComponent} from './people-list.component';
import {MyComponentComponent} from './my-component.component';
import {PuzzleComponent} from './puzzle/puzzle.component';
@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 3 {{ pageTitle }}</h1>
        <p>Hello World in Fast Print Sahline!</p>
        <people-list></people-list>
        <my-component></my-component>
        <puzzle></puzzle>
    `,
    directives: [PeopleListComponent, MyComponentComponent, PuzzleComponent]
})
export class AppComponent {
pageTitle: string = "Acme Product";
}
