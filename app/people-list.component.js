System.register(['angular2/core', './people.service'], function(exports_1, context_1) {
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
    var core_1, people_service_1;
    var PeopleListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (people_service_1_1) {
                people_service_1 = people_service_1_1;
            }],
        execute: function() {
            PeopleListComponent = (function () {
                function PeopleListComponent(_peopleService) {
                    this._peopleService = _peopleService;
                    this.people = [];
                    this.people = _peopleService.getAll();
                }
                PeopleListComponent = __decorate([
                    core_1.Component({
                        selector: 'people-list',
                        template: "\n  <!-- this is the new syntax for ng-repeat -->\n  <ul *ngFor=\"#person of people\">\n    <li>\n     {{person.name}} - {{person.height}}\n    </li>\n  </ul>\n  ",
                        providers: [people_service_1.PeopleService]
                    }), 
                    __metadata('design:paramtypes', [people_service_1.PeopleService])
                ], PeopleListComponent);
                return PeopleListComponent;
            }());
            exports_1("PeopleListComponent", PeopleListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlb3BsZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUVBLDZCQUFvQixjQUE4QjtvQkFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO29CQURsRCxXQUFNLEdBQWEsRUFBRSxDQUFDO29CQUVwQixJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDeEMsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLG9LQU9UO3dCQUNELFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzNCLENBQUM7O3VDQUFBO2dCQU1GLDBCQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCxxREFLQyxDQUFBIiwiZmlsZSI6InBlb3BsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQZXJzb259IGZyb20gJy4vcGVyc29uJztcbmltcG9ydCB7IFBlb3BsZVNlcnZpY2UgfSBmcm9tICcuL3Blb3BsZS5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Blb3BsZS1saXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPCEtLSB0aGlzIGlzIHRoZSBuZXcgc3ludGF4IGZvciBuZy1yZXBlYXQgLS0+XG4gIDx1bCAqbmdGb3I9XCIjcGVyc29uIG9mIHBlb3BsZVwiPlxuICAgIDxsaT5cbiAgICAge3twZXJzb24ubmFtZX19IC0ge3twZXJzb24uaGVpZ2h0fX1cbiAgICA8L2xpPlxuICA8L3VsPlxuICBgLFxuICBwcm92aWRlcnM6IFtQZW9wbGVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBQZW9wbGVMaXN0Q29tcG9uZW50e1xucGVvcGxlOiBQZXJzb25bXSA9IFtdO1xuY29uc3RydWN0b3IocHJpdmF0ZSBfcGVvcGxlU2VydmljZSA6IFBlb3BsZVNlcnZpY2Upe1xuICB0aGlzLnBlb3BsZSA9IF9wZW9wbGVTZXJ2aWNlLmdldEFsbCgpO1xufVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
