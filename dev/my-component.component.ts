import {Component} from 'angular2/core';
import {TestComponent} from './test.component';
@Component({
  selector: 'my-component',
  template:`
  <h1>[style.color]="inputElement.value === 'yes' ? 'red':'gray'" </h1>
  <h2>Hello <span [style.color]="inputElement.value === 'yes' ? 'red':'gray'">{{name}}</span></h2>
  <p>Try to write 'yes' inside input !!
    <span [class.is-awesome]="inputElement.value === 'yes'"> Is it awesome?</span>
  <input type="text" #inputElement (keyup)="0">
  <button [disabled]="inputElement.value !== 'yes'" >Only enabled if 'yes' was entered</button>
  <test></test>
`,
styleUrls:['src/css/mycomponent.css'],
directives:[TestComponent]
})
export class MyComponentComponent{
  name="Mohamed Belaid";
}
