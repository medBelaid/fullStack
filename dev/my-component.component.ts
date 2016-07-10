import {Component} from 'angular2/core';
import {TestComponent} from './test.component';
@Component({
  selector: 'my-component',
  template:`
  <h3>[style.color]="inputElement.value === 'yes' ? 'red':'gray'" </h3>
  <h2>Hello <span [style.color]="inputElement.value === 'yes' ? 'red':'gray'">{{name}}</span></h2>
  <p>Try to write 'yes' inside input !!
    <span [class.is-awesome]="inputElement.value === 'yes'"> Is it awesome?</span>
  <input type="text" #inputElement (keyup)="0">
  <button [disabled]="inputElement.value !== 'yes'" >Only enabled if 'yes' was entered</button>
  <h2>Event Binding && Two Way Databinding</h2>
  <input [value]="name" #input2 (keyup)="onKeyup(input2.value) ">
  <p>{{values}}
  <br>
  <input [(ngModel)]="name">
  <section class="parent">
    <h2>this is the parent component</h2>
    <h4>Please enter your name</h4>
    <input [(ngModel)]="name2"> <p>{{name2}}</p>
    <section class="child">
      <test [Myname]="name2"></test>
    </section>
  </section>
`,
styleUrls:['src/css/mycomponent.css'],
directives:[TestComponent]
})
export class MyComponentComponent{
  name="Mohamed Belaid";
  name2="";
  values='';
  onKeyup(value: string){
    this.values += value + ' | ';
  }
}
