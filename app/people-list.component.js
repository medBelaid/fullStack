System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var PeopleListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PeopleListComponent = (function () {
                function PeopleListComponent() {
                    this.people = [
                        { name: 'Mohamed Romdhani', height: 170, weight: 74 },
                        { name: 'Ramy Ben Chaabene', height: 180, weight: 80 },
                        { name: 'Mohamed Ali Hammar', height: 178, weight: 75 },
                    ];
                }
                PeopleListComponent = __decorate([
                    core_1.Component({
                        selector: 'people-list',
                        template: "\n  <!-- this is the new syntax for ng-repeat -->\n  <ul *ngFor=\"#person of people\">\n    <li>\n     {{person.name}}\n    </li>\n  </ul>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PeopleListComponent);
                return PeopleListComponent;
            }());
            exports_1("PeopleListComponent", PeopleListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlb3BsZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFBQTtvQkFDRSxXQUFNLEdBQWE7d0JBQ2pCLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQzt3QkFDbkQsRUFBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFDO3dCQUNwRCxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUM7cUJBQ3RELENBQUM7Z0JBRUosQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLGdKQU9UO3FCQUNGLENBQUM7O3VDQUFBO2dCQVFGLDBCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCxxREFPQyxDQUFBIiwiZmlsZSI6InBlb3BsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW50ZXJmYWNlIFBlcnNvbntcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgd2VpZ2h0OiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZW9wbGUtbGlzdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDwhLS0gdGhpcyBpcyB0aGUgbmV3IHN5bnRheCBmb3IgbmctcmVwZWF0IC0tPlxuICA8dWwgKm5nRm9yPVwiI3BlcnNvbiBvZiBwZW9wbGVcIj5cbiAgICA8bGk+XG4gICAgIHt7cGVyc29uLm5hbWV9fVxuICAgIDwvbGk+XG4gIDwvdWw+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUGVvcGxlTGlzdENvbXBvbmVudHtcbiAgcGVvcGxlOiBQZXJzb25bXSA9IFtcbiAgICB7bmFtZTogJ01vaGFtZWQgUm9tZGhhbmknLCBoZWlnaHQ6IDE3MCwgd2VpZ2h0OiA3NH0sXG4gICAge25hbWU6ICdSYW15IEJlbiBDaGFhYmVuZScsIGhlaWdodDogMTgwLCB3ZWlnaHQ6IDgwfSxcbiAgICB7bmFtZTogJ01vaGFtZWQgQWxpIEhhbW1hcicsIGhlaWdodDogMTc4LCB3ZWlnaHQ6IDc1fSxcbiAgXTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
