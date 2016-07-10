import {Component} from 'angular2/core';

@Component({
  selector: 'test',
  templateUrl:'templates/test.tpl.html'
  inputs: ['Myname']
})
export class TestComponent{
  Myname = '';
}
