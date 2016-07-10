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
    var TestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent() {
                    this.Myname = '';
                }
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'test',
                        templateUrl: 'templates/test.tpl.html',
                        inputs: ['Myname']
                    }), 
                    __metadata('design:paramtypes', [])
                ], TestComponent);
                return TestComponent;
            }());
            exports_1("TestComponent", TestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUE7b0JBQ0UsV0FBTSxHQUFHLEVBQUUsQ0FBQztnQkFDZCxDQUFDO2dCQVBEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFdBQVcsRUFBQyx5QkFBeUI7d0JBQ3JDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztxQkFDbkIsQ0FBQzs7aUNBQUE7Z0JBR0Ysb0JBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHlDQUVDLENBQUEiLCJmaWxlIjoidGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rlc3QnLFxuICB0ZW1wbGF0ZVVybDondGVtcGxhdGVzL3Rlc3QudHBsLmh0bWwnXG4gIGlucHV0czogWydNeW5hbWUnXVxufSlcbmV4cG9ydCBjbGFzcyBUZXN0Q29tcG9uZW50e1xuICBNeW5hbWUgPSAnJztcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
