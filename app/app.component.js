System.register(['angular2/core', './people-list.component', './my-component.component', './puzzle/puzzle.component'], function(exports_1, context_1) {
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
    var core_1, people_list_component_1, my_component_component_1, puzzle_component_1;
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
            },
            function (puzzle_component_1_1) {
                puzzle_component_1 = puzzle_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = "Acme Product";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Angular 3 {{ pageTitle }}</h1>\n        <p>Hello World in Fast Print Sahline!</p>\n        <people-list></people-list>\n        <my-component></my-component>\n        <puzzle></puzzle>\n    ",
                        directives: [people_list_component_1.PeopleListComponent, my_component_component_1.MyComponentComponent, puzzle_component_1.PuzzleComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtvQkFDQSxjQUFTLEdBQVcsY0FBYyxDQUFDO2dCQUNuQyxDQUFDO2dCQWJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw4TUFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywyQ0FBbUIsRUFBRSw2Q0FBb0IsRUFBRSxrQ0FBZSxDQUFDO3FCQUMzRSxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQZW9wbGVMaXN0Q29tcG9uZW50fSBmcm9tICcuL3Blb3BsZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge015Q29tcG9uZW50Q29tcG9uZW50fSBmcm9tICcuL215LWNvbXBvbmVudC5jb21wb25lbnQnO1xuaW1wb3J0IHtQdXp6bGVDb21wb25lbnR9IGZyb20gJy4vcHV6emxlL3B1enpsZS5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMT5Bbmd1bGFyIDMge3sgcGFnZVRpdGxlIH19PC9oMT5cbiAgICAgICAgPHA+SGVsbG8gV29ybGQgaW4gRmFzdCBQcmludCBTYWhsaW5lITwvcD5cbiAgICAgICAgPHBlb3BsZS1saXN0PjwvcGVvcGxlLWxpc3Q+XG4gICAgICAgIDxteS1jb21wb25lbnQ+PC9teS1jb21wb25lbnQ+XG4gICAgICAgIDxwdXp6bGU+PC9wdXp6bGU+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUGVvcGxlTGlzdENvbXBvbmVudCwgTXlDb21wb25lbnRDb21wb25lbnQsIFB1enpsZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbnBhZ2VUaXRsZTogc3RyaW5nID0gXCJBY21lIFByb2R1Y3RcIjtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
