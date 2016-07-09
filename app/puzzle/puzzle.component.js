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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Num = Math.round(Math.random());
                    this.switch2Num = Math.round(Math.random());
                    this.switch3Num = Math.round(Math.random());
                    this.switch4Num = Math.round(Math.random());
                    console.log(this.switch1Num, this.switch2Num, this.switch3Num, this.switch4Num);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'puzzle',
                        template: "\n  <section class=\"setup\">\n   <h2>Game Setup</h2>\n   Enter your name please:\n   <input type=\"text\" #name (keyup)=\"0\">\n  </section>\n  <section\n  [style.display]=\"name.value==='' ? 'none':'block' \"\n  [ngClass]=\"{\n    puzzle:true,\n    solved: switch1.value == switch1Num &&\n            switch2.value == switch2Num &&\n            switch3.value == switch3Num &&\n            switch4.value == switch4Num\n  }\"\n  >\n   <h2>The puzzle | {{ switch1.value == switch1Num &&\n           switch2.value == switch2Num &&\n           switch3.value == switch3Num &&\n           switch4.value == switch4Num ? 'SOLVED':'NOT SOLVED' }}</h2>\n   <p>Welcome <span class=\"name\">{{name.value}}</span> </p>\n   <br>\n   Switch1: <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n   Switch2: <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n   Switch3: <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n   Switch4: <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n  </section>\n  <h2 [hidden]=\"switch1.value != switch1Num ||\n          switch2.value != switch2Num ||\n          switch3.value != switch3Num ||\n          switch4.value != switch4Num\">\n  Congratulations {{name.value}}, you did it!</h2>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUNBO2dCQUFBO2dCQWlCQSxDQUFDO2dCQVhDLGtDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDaEYsQ0FBQztnQkFoREg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFDLHdyQ0FnQ1Y7cUJBQ0EsQ0FBQzs7bUNBQUE7Z0JBa0JGLHNCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCw2Q0FpQkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHV6emxlJyxcbiAgdGVtcGxhdGU6YFxuICA8c2VjdGlvbiBjbGFzcz1cInNldHVwXCI+XG4gICA8aDI+R2FtZSBTZXR1cDwvaDI+XG4gICBFbnRlciB5b3VyIG5hbWUgcGxlYXNlOlxuICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cbiAgPC9zZWN0aW9uPlxuICA8c2VjdGlvblxuICBbc3R5bGUuZGlzcGxheV09XCJuYW1lLnZhbHVlPT09JycgPyAnbm9uZSc6J2Jsb2NrJyBcIlxuICBbbmdDbGFzc109XCJ7XG4gICAgcHV6emxlOnRydWUsXG4gICAgc29sdmVkOiBzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW0gJiZcbiAgICAgICAgICAgIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bSAmJlxuICAgICAgICAgICAgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2gzTnVtICYmXG4gICAgICAgICAgICBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDROdW1cbiAgfVwiXG4gID5cbiAgIDxoMj5UaGUgcHV6emxlIHwge3sgc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtICYmXG4gICAgICAgICAgIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bSAmJlxuICAgICAgICAgICBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW0gJiZcbiAgICAgICAgICAgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtID8gJ1NPTFZFRCc6J05PVCBTT0xWRUQnIH19PC9oMj5cbiAgIDxwPldlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tuYW1lLnZhbHVlfX08L3NwYW4+IDwvcD5cbiAgIDxicj5cbiAgIFN3aXRjaDE6IDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gxIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgU3dpdGNoMjogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDIgKGtleXVwKT1cIjBcIj48YnI+XG4gICBTd2l0Y2gzOiA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMyAoa2V5dXApPVwiMFwiPjxicj5cbiAgIFN3aXRjaDQ6IDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2g0IChrZXl1cCk9XCIwXCI+PGJyPlxuICA8L3NlY3Rpb24+XG4gIDxoMiBbaGlkZGVuXT1cInN3aXRjaDEudmFsdWUgIT0gc3dpdGNoMU51bSB8fFxuICAgICAgICAgIHN3aXRjaDIudmFsdWUgIT0gc3dpdGNoMk51bSB8fFxuICAgICAgICAgIHN3aXRjaDMudmFsdWUgIT0gc3dpdGNoM051bSB8fFxuICAgICAgICAgIHN3aXRjaDQudmFsdWUgIT0gc3dpdGNoNE51bVwiPlxuICBDb25ncmF0dWxhdGlvbnMge3tuYW1lLnZhbHVlfX0sIHlvdSBkaWQgaXQhPC9oMj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBzd2l0Y2gxTnVtOiBudW1iZXI7XG4gIHN3aXRjaDJOdW06IG51bWJlcjtcbiAgc3dpdGNoM051bTogbnVtYmVyO1xuICBzd2l0Y2g0TnVtOiBudW1iZXI7XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnN3aXRjaDFOdW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgIHRoaXMuc3dpdGNoMk51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgdGhpcy5zd2l0Y2gzTnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICB0aGlzLnN3aXRjaDROdW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoMU51bSwgdGhpcy5zd2l0Y2gyTnVtLHRoaXMuc3dpdGNoM051bSwgdGhpcy5zd2l0Y2g0TnVtKVxuICB9XG5cblxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
