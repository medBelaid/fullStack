System.register(['angular2/core', './people-list.component'], function(exports_1, context_1) {
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
    var core_1, people_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (people_list_component_1_1) {
                people_list_component_1 = people_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = "Acme Product";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Angular 3 Boilerplate {{ pageTitle }}</h1>\n        <p>Hello World in Fast Print Sahline!</p>\n        <people-list>\n    ",
                        directives: [people_list_component_1.PeopleListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBQTtvQkFDQSxjQUFTLEdBQVcsY0FBYyxDQUFDO2dCQUNuQyxDQUFDO2dCQVhEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSwwSUFJVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQztxQkFDcEMsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UGVvcGxlTGlzdENvbXBvbmVudH0gZnJvbSAnLi9wZW9wbGUtbGlzdC5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMT5Bbmd1bGFyIDMgQm9pbGVycGxhdGUge3sgcGFnZVRpdGxlIH19PC9oMT5cbiAgICAgICAgPHA+SGVsbG8gV29ybGQgaW4gRmFzdCBQcmludCBTYWhsaW5lITwvcD5cbiAgICAgICAgPHBlb3BsZS1saXN0PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Blb3BsZUxpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5wYWdlVGl0bGU6IHN0cmluZyA9IFwiQWNtZSBQcm9kdWN0XCI7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
