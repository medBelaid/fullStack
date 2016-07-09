System.register(['angular2/core', './people-list.component', './my-component.component'], function(exports_1, context_1) {
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
    var core_1, people_list_component_1, my_component_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (people_list_component_1_1) {
                people_list_component_1 = people_list_component_1_1;
            },
            function (my_component_component_1_1) {
                my_component_component_1 = my_component_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = "Acme Product";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Angular 3 Boilerplate {{ pageTitle }}</h1>\n        <p>Hello World in Fast Print Sahline!</p>\n        <people-list></people-list>\n        <my-component></my-component>\n    ",
                        directives: [people_list_component_1.PeopleListComponent, my_component_component_1.MyComponentComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtvQkFDQSxjQUFTLEdBQVcsY0FBYyxDQUFDO2dCQUNuQyxDQUFDO2dCQVpEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSwrTEFLVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywyQ0FBbUIsRUFBRSw2Q0FBb0IsQ0FBQztxQkFDMUQsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UGVvcGxlTGlzdENvbXBvbmVudH0gZnJvbSAnLi9wZW9wbGUtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtNeUNvbXBvbmVudENvbXBvbmVudH0gZnJvbSAnLi9teS1jb21wb25lbnQuY29tcG9uZW50JztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+QW5ndWxhciAzIEJvaWxlcnBsYXRlIHt7IHBhZ2VUaXRsZSB9fTwvaDE+XG4gICAgICAgIDxwPkhlbGxvIFdvcmxkIGluIEZhc3QgUHJpbnQgU2FobGluZSE8L3A+XG4gICAgICAgIDxwZW9wbGUtbGlzdD48L3Blb3BsZS1saXN0PlxuICAgICAgICA8bXktY29tcG9uZW50PjwvbXktY29tcG9uZW50PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Blb3BsZUxpc3RDb21wb25lbnQsIE15Q29tcG9uZW50Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xucGFnZVRpdGxlOiBzdHJpbmcgPSBcIkFjbWUgUHJvZHVjdFwiO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
