"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person3 = (function () {
    function Person3() {
        var _this = this;
        this.name = '';
        this.city = '';
        this.age = 31;
        this.sayHallo = function () { return 'HI im' + _this.name; };
    }
    return Person3;
}());
;
var Emploee = (function (_super) {
    __extends(Emploee, _super);
    function Emploee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.departament = '';
        return _this;
    }
    return Emploee;
}(Person3));
;
var emp = new Emploee();
console.log(emp.departament);
var Burger = (function () {
    function Burger(breadType, meatType, ketchup, secretComponentAmount) {
        this.breadType = breadType;
        this.meatType = meatType;
        this.ketchup = ketchup;
        this.secretComponentAmount = secretComponentAmount;
    }
    ;
    Burger.prototype.setSecretComponentAmount = function (amount) {
        this.secretComponentAmount = amount;
    };
    ;
    return Burger;
}());
;
var burger = new Burger('Black', 'Pork', true, 30);
console.log(burger);
var Ganster = (function () {
    function Ganster() {
    }
    Ganster.prototype.shoot = function () {
        Ganster.bullets--;
        console.log('Shoot!!! Bullets amount is ' + Ganster.bullets);
    };
    ;
    Ganster.bullets = 20;
    return Ganster;
}());
;
var g1 = new Ganster();
var g2 = new Ganster();
g1.shoot();
g1.shoot();
g2.shoot();
g2.shoot();
g2.shoot();
g2.shoot();
var AppState = (function () {
    function AppState(inc) {
        if (inc === void 0) { inc = function () { AppState.instanceRef.counter++; }; }
        this.inc = inc;
        this.counter = 0;
    }
    ;
    AppState.getInstance = function () {
        if (AppState.instanceRef === undefined) {
            AppState.instanceRef = new AppState();
        }
        return AppState.instanceRef;
    };
    ;
    return AppState;
}());
;
var a1 = AppState.getInstance();
var a2 = AppState.getInstance();
a1.inc();
a1.inc();
a2.inc();
console.log(a1.counter);
var Car = (function () {
    function Car(engine, diesel, company) {
        this.engine = engine;
        this.diesel = diesel;
        this.company = company;
    }
    Car.prototype.getCompany = function () {
        return this.company;
    };
    return Car;
}());
;
var Truk = (function (_super) {
    __extends(Truk, _super);
    function Truk(engine, diesel, company, IsTrailer) {
        var _this = _super.call(this, engine, diesel, company) || this;
        _this.IsTrailer = IsTrailer;
        return _this;
    }
    Truk.prototype.getCompany = function () {
        var company = _super.prototype.getCompany.call(this);
        console.log(this.sendRequest(company));
        return '';
    };
    Truk.prototype.sendRequest = function (comp) {
        return "Sended request to ".concat(comp);
    };
    return Truk;
}(Car));
;
var truck1 = new Truk('V8', true, 'Volvo', true);
console.log(truck1);
console.log(truck1.getCompany());
var Guy = (function () {
    function Guy(name) {
        this.name = name;
    }
    Guy.prototype.changeAddress = function (newAddr) {
        console.log('Seted new adres' + newAddr);
    };
    Guy.prototype.giveDayOff = function () {
        console.log('Give dayoof 4 this guy ' + this.name);
    };
    Guy.prototype.promoute = function (percent) {
        this.giveDayOff();
    };
    return Guy;
}());
;
var EmploeeGuy = (function (_super) {
    __extends(EmploeeGuy, _super);
    function EmploeeGuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmploeeGuy.prototype.incracePay = function (percent) {
        console.log('Increased EMOLOEE pay to the ' + this.name + ' for ' + percent + '%');
    };
    return EmploeeGuy;
}(Guy));
;
var ContractorGuy = (function (_super) {
    __extends(ContractorGuy, _super);
    function ContractorGuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContractorGuy.prototype.incracePay = function (percent) {
        console.log('Increased CONTRACTOR pay to the ' + this.name + ' for ' + percent + '%');
    };
    return ContractorGuy;
}(Guy));
;
var worckers = [];
worckers[0] = new EmploeeGuy('Garry');
worckers[1] = new ContractorGuy('Tsigan');
worckers.forEach(function (w) {
    w.incracePay(20);
});
