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
                }
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n  <h1>[style.color]=\"inputElement.value === 'yes' ? 'red':'gray'\" </h1>\n  <h2>Hello <span [style.color]=\"inputElement.value === 'yes' ? 'red':'gray'\">{{name}}</span></h2>\n  <p>Try to write 'yes' inside input !!\n    <span [class.is-awesome]=\"inputElement.value === 'yes'\"> Is it awesome?</span>\n  <input type=\"text\" #inputElement (keyup)=\"0\">\n  <button [disabled]=\"inputElement.value !== 'yes'\" >Only enabled if 'yes' was entered</button>\n  <test></test>\n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7b0JBQ0UsU0FBSSxHQUFDLGdCQUFnQixDQUFDO2dCQUN4QixDQUFDO2dCQWhCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUMsNmRBUVY7d0JBQ0QsU0FBUyxFQUFDLENBQUMseUJBQXlCLENBQUM7d0JBQ3JDLFVBQVUsRUFBQyxDQUFDLDhCQUFhLENBQUM7cUJBQ3pCLENBQUM7O3dDQUFBO2dCQUdGLDJCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1REFFQyxDQUFBIiwiZmlsZSI6Im15LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gJy4vdGVzdC5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktY29tcG9uZW50JyxcbiAgdGVtcGxhdGU6YFxuICA8aDE+W3N0eWxlLmNvbG9yXT1cImlucHV0RWxlbWVudC52YWx1ZSA9PT0gJ3llcycgPyAncmVkJzonZ3JheSdcIiA8L2gxPlxuICA8aDI+SGVsbG8gPHNwYW4gW3N0eWxlLmNvbG9yXT1cImlucHV0RWxlbWVudC52YWx1ZSA9PT0gJ3llcycgPyAncmVkJzonZ3JheSdcIj57e25hbWV9fTwvc3Bhbj48L2gyPlxuICA8cD5UcnkgdG8gd3JpdGUgJ3llcycgaW5zaWRlIGlucHV0ICEhXG4gICAgPHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJ1wiPiBJcyBpdCBhd2Vzb21lPzwvc3Bhbj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiPlxuICA8YnV0dG9uIFtkaXNhYmxlZF09XCJpbnB1dEVsZW1lbnQudmFsdWUgIT09ICd5ZXMnXCIgPk9ubHkgZW5hYmxlZCBpZiAneWVzJyB3YXMgZW50ZXJlZDwvYnV0dG9uPlxuICA8dGVzdD48L3Rlc3Q+XG5gLFxuc3R5bGVVcmxzOlsnc3JjL2Nzcy9teWNvbXBvbmVudC5jc3MnXSxcbmRpcmVjdGl2ZXM6W1Rlc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50Q29tcG9uZW50e1xuICBuYW1lPVwiTW9oYW1lZCBCZWxhaWRcIjtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
