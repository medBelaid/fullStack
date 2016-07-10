System.register(['angular2/core', './test.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                    this.name = "Mohamed Belaid";
                    this.name2 = "";
                    this.values = '';
                }
                MyComponentComponent.prototype.onKeyup = function (value) {
                    this.values += value + ' | ';
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n  <h3>[style.color]=\"inputElement.value === 'yes' ? 'red':'gray'\" </h3>\n  <h2>Hello <span [style.color]=\"inputElement.value === 'yes' ? 'red':'gray'\">{{name}}</span></h2>\n  <p>Try to write 'yes' inside input !!\n    <span [class.is-awesome]=\"inputElement.value === 'yes'\"> Is it awesome?</span>\n  <input type=\"text\" #inputElement (keyup)=\"0\">\n  <button [disabled]=\"inputElement.value !== 'yes'\" >Only enabled if 'yes' was entered</button>\n  <h2>Event Binding && Two Way Databinding</h2>\n  <input [value]=\"name\" #input2 (keyup)=\"onKeyup(input2.value) \">\n  <p>{{values}}\n  <br>\n  <input [(ngModel)]=\"name\">\n  <section class=\"parent\">\n    <h2>this is the parent component</h2>\n    <h4>Please enter your name</h4>\n    <input [(ngModel)]=\"name2\"> <p>{{name2}}</p>\n    <section class=\"child\">\n      <test [Myname]=\"name2\"></test>\n    </section>\n  </section>\n",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkE7Z0JBQUE7b0JBQ0UsU0FBSSxHQUFDLGdCQUFnQixDQUFDO29CQUN0QixVQUFLLEdBQUMsRUFBRSxDQUFDO29CQUNULFdBQU0sR0FBQyxFQUFFLENBQUM7Z0JBSVosQ0FBQztnQkFIQyxzQ0FBTyxHQUFQLFVBQVEsS0FBYTtvQkFDbkIsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixDQUFDO2dCQWhDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUMsbzRCQW9CVjt3QkFDRCxTQUFTLEVBQUMsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDckMsVUFBVSxFQUFDLENBQUMsOEJBQWEsQ0FBQztxQkFDekIsQ0FBQzs7d0NBQUE7Z0JBUUYsMkJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELHVEQU9DLENBQUEiLCJmaWxlIjoibXktY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VGVzdENvbXBvbmVudH0gZnJvbSAnLi90ZXN0LmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTpgXG4gIDxoMz5bc3R5bGUuY29sb3JdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJyA/ICdyZWQnOidncmF5J1wiIDwvaDM+XG4gIDxoMj5IZWxsbyA8c3BhbiBbc3R5bGUuY29sb3JdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJyA/ICdyZWQnOidncmF5J1wiPnt7bmFtZX19PC9zcGFuPjwvaDI+XG4gIDxwPlRyeSB0byB3cml0ZSAneWVzJyBpbnNpZGUgaW5wdXQgISFcbiAgICA8c3BhbiBbY2xhc3MuaXMtYXdlc29tZV09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnXCI+IElzIGl0IGF3ZXNvbWU/PC9zcGFuPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRFbGVtZW50IChrZXl1cCk9XCIwXCI+XG4gIDxidXR0b24gW2Rpc2FibGVkXT1cImlucHV0RWxlbWVudC52YWx1ZSAhPT0gJ3llcydcIiA+T25seSBlbmFibGVkIGlmICd5ZXMnIHdhcyBlbnRlcmVkPC9idXR0b24+XG4gIDxoMj5FdmVudCBCaW5kaW5nICYmIFR3byBXYXkgRGF0YWJpbmRpbmc8L2gyPlxuICA8aW5wdXQgW3ZhbHVlXT1cIm5hbWVcIiAjaW5wdXQyIChrZXl1cCk9XCJvbktleXVwKGlucHV0Mi52YWx1ZSkgXCI+XG4gIDxwPnt7dmFsdWVzfX1cbiAgPGJyPlxuICA8aW5wdXQgWyhuZ01vZGVsKV09XCJuYW1lXCI+XG4gIDxzZWN0aW9uIGNsYXNzPVwicGFyZW50XCI+XG4gICAgPGgyPnRoaXMgaXMgdGhlIHBhcmVudCBjb21wb25lbnQ8L2gyPlxuICAgIDxoND5QbGVhc2UgZW50ZXIgeW91ciBuYW1lPC9oND5cbiAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJuYW1lMlwiPiA8cD57e25hbWUyfX08L3A+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgPHRlc3QgW015bmFtZV09XCJuYW1lMlwiPjwvdGVzdD5cbiAgICA8L3NlY3Rpb24+XG4gIDwvc2VjdGlvbj5cbmAsXG5zdHlsZVVybHM6WydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddLFxuZGlyZWN0aXZlczpbVGVzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnRDb21wb25lbnR7XG4gIG5hbWU9XCJNb2hhbWVkIEJlbGFpZFwiO1xuICBuYW1lMj1cIlwiO1xuICB2YWx1ZXM9Jyc7XG4gIG9uS2V5dXAodmFsdWU6IHN0cmluZyl7XG4gICAgdGhpcy52YWx1ZXMgKz0gdmFsdWUgKyAnIHwgJztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
