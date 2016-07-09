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
                        template: "\n  <!-- this is the new syntax for ng-repeat -->\n  <ul *ngFor=\"#person of people\">\n    <li>\n     {{person.name}} - {{person.height}}\n    </li>\n  </ul>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PeopleListComponent);
                return PeopleListComponent;
            }());
            exports_1("PeopleListComponent", PeopleListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlb3BsZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUFBO29CQUNFLFdBQU0sR0FBYTt3QkFDakIsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFDO3dCQUNuRCxFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUM7d0JBQ3BELEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQztxQkFDdEQsQ0FBQztnQkFFSixDQUFDO2dCQWxCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsb0tBT1Q7cUJBQ0YsQ0FBQzs7dUNBQUE7Z0JBUUYsMEJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELHFEQU9DLENBQUEiLCJmaWxlIjoicGVvcGxlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BlcnNvbn0gZnJvbSAnLi9wZXJzb24nO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGVvcGxlLWxpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8IS0tIHRoaXMgaXMgdGhlIG5ldyBzeW50YXggZm9yIG5nLXJlcGVhdCAtLT5cbiAgPHVsICpuZ0Zvcj1cIiNwZXJzb24gb2YgcGVvcGxlXCI+XG4gICAgPGxpPlxuICAgICB7e3BlcnNvbi5uYW1lfX0gLSB7e3BlcnNvbi5oZWlnaHR9fVxuICAgIDwvbGk+XG4gIDwvdWw+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUGVvcGxlTGlzdENvbXBvbmVudHtcbiAgcGVvcGxlOiBQZXJzb25bXSA9IFtcbiAgICB7bmFtZTogJ01vaGFtZWQgUm9tZGhhbmknLCBoZWlnaHQ6IDE3MCwgd2VpZ2h0OiA3NH0sXG4gICAge25hbWU6ICdSYW15IEJlbiBDaGFhYmVuZScsIGhlaWdodDogMTgwLCB3ZWlnaHQ6IDgwfSxcbiAgICB7bmFtZTogJ01vaGFtZWQgQWxpIEhhbW1hcicsIGhlaWdodDogMTc4LCB3ZWlnaHQ6IDc1fSxcbiAgXTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
