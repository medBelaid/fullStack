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
                        template: "\n  <!-- this is the new syntax for ng-repeat -->\n  <ul *ngFor=\"#person of people\">\n    <li>\n     {{person.name}} - {{person.user}}:{{person.height}}\n    </li>\n  </ul>\n  "
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof people_service_1.PeopleService !== 'undefined' && people_service_1.PeopleService) === 'function' && _a) || Object])
                ], PeopleListComponent);
                return PeopleListComponent;
                var _a;
            }());
            exports_1("PeopleListComponent", PeopleListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL3Blb3BsZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUVBLDZCQUFvQixjQUE4QjtvQkFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO29CQURsRCxXQUFNLEdBQWEsRUFBRSxDQUFDO29CQUVsQixJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDeEMsQ0FBQztnQkFmSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsb0xBT1Q7cUJBQ0YsQ0FBQzs7dUNBQUE7Z0JBTUYsMEJBQUM7O1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCxxREFLQyxDQUFBIiwiZmlsZSI6ImpzL3Blb3BsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSAnLi9wZXJzb24nO1xuaW1wb3J0IHsgUGVvcGxlU2VydmljZSB9IGZyb20gJy4vcGVvcGxlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZW9wbGUtbGlzdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDwhLS0gdGhpcyBpcyB0aGUgbmV3IHN5bnRheCBmb3IgbmctcmVwZWF0IC0tPlxuICA8dWwgKm5nRm9yPVwiI3BlcnNvbiBvZiBwZW9wbGVcIj5cbiAgICA8bGk+XG4gICAgIHt7cGVyc29uLm5hbWV9fSAtIHt7cGVyc29uLnVzZXJ9fTp7e3BlcnNvbi5oZWlnaHR9fVxuICAgIDwvbGk+XG4gIDwvdWw+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUGVvcGxlTGlzdENvbXBvbmVudHtcbnBlb3BsZTogUGVyc29uW10gPSBbXTtcbmNvbnN0cnVjdG9yKHByaXZhdGUgX3Blb3BsZVNlcnZpY2UgOiBQZW9wbGVTZXJ2aWNlKXtcbiAgICB0aGlzLnBlb3BsZSA9IF9wZW9wbGVTZXJ2aWNlLmdldEFsbCgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
