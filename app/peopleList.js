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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlb3BsZUxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7b0JBQ0UsV0FBTSxHQUFhO3dCQUNqQixFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUM7d0JBQ25ELEVBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQzt3QkFDcEQsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFDO3FCQUN0RCxDQUFDO2dCQUVKLENBQUM7Z0JBbEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSxnSkFPVDtxQkFDRixDQUFDOzt1Q0FBQTtnQkFRRiwwQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQscURBT0MsQ0FBQSIsImZpbGUiOiJwZW9wbGVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbnRlcmZhY2UgUGVyc29ue1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB3ZWlnaHQ6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Blb3BsZS1saXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPCEtLSB0aGlzIGlzIHRoZSBuZXcgc3ludGF4IGZvciBuZy1yZXBlYXQgLS0+XG4gIDx1bCAqbmdGb3I9XCIjcGVyc29uIG9mIHBlb3BsZVwiPlxuICAgIDxsaT5cbiAgICAge3twZXJzb24ubmFtZX19XG4gICAgPC9saT5cbiAgPC91bD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBQZW9wbGVMaXN0Q29tcG9uZW50e1xuICBwZW9wbGU6IFBlcnNvbltdID0gW1xuICAgIHtuYW1lOiAnTW9oYW1lZCBSb21kaGFuaScsIGhlaWdodDogMTcwLCB3ZWlnaHQ6IDc0fSxcbiAgICB7bmFtZTogJ1JhbXkgQmVuIENoYWFiZW5lJywgaGVpZ2h0OiAxODAsIHdlaWdodDogODB9LFxuICAgIHtuYW1lOiAnTW9oYW1lZCBBbGkgSGFtbWFyJywgaGVpZ2h0OiAxNzgsIHdlaWdodDogNzV9LFxuICBdO1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
