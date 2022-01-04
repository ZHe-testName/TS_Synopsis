"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursdaay"] = 4] = "Thursdaay";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
;
var dayOff = WeekDays.Saturday;
var WeekDaysAuto;
(function (WeekDaysAuto) {
    WeekDaysAuto[WeekDaysAuto["Monday"] = 1] = "Monday";
    WeekDaysAuto[WeekDaysAuto["Tuesday"] = 2] = "Tuesday";
    WeekDaysAuto[WeekDaysAuto["Wednesday"] = 3] = "Wednesday";
    WeekDaysAuto[WeekDaysAuto["Thursdaay"] = 4] = "Thursdaay";
    WeekDaysAuto[WeekDaysAuto["Friday"] = 5] = "Friday";
    WeekDaysAuto[WeekDaysAuto["Saturday"] = 6] = "Saturday";
    WeekDaysAuto[WeekDaysAuto["Sunday"] = 7] = "Sunday";
})(WeekDaysAuto || (WeekDaysAuto = {}));
;
var newYear = WeekDaysAuto.Friday;
console.log(newYear);
console.log(WeekDaysAuto[4]);
var Direction;
(function (Direction) {
    Direction[Direction["FtoC"] = 0] = "FtoC";
    Direction[Direction["CtoF"] = 1] = "CtoF";
})(Direction || (Direction = {}));
;
var convertTemperature = function (temp, fromTo) {
    return fromTo === Direction.FtoC
        ?
            (temp - 32) * 5.0 / 9.0
        :
            temp * 9.0 / 5.0 + 32;
};
console.log(convertTemperature(53, Direction.CtoF));
var GoTo;
(function (GoTo) {
    GoTo["Up"] = "Up";
    GoTo["Down"] = "Down";
    GoTo["Left"] = "Left";
    GoTo["Right"] = "Right";
})(GoTo || (GoTo = {}));
;
function move(dir) { }
;
var ProductActionTypes;
(function (ProductActionTypes) {
    ProductActionTypes["Load"] = "Products load all";
    ProductActionTypes["Search"] = "Products search";
    ProductActionTypes["LoadFaailre"] = "Products load all with failre";
    ProductActionTypes["LoadSuccess"] = "Products load all with succes";
})(ProductActionTypes || (ProductActionTypes = {}));
;
console.log(function () { return ProductActionTypes.Load; });
console.log(function () { return ProductActionTypes.LoadFaailre; });
;
var a = ['Joe', 'Mary'];
var b = ['Joe', 'Mary'];
var c = ['Joe', false];
;
var Rectangle = (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.compareTo = function (value) {
        return this.height * this.width - value.height * value.width;
    };
    return Rectangle;
}());
;
var Programmer = (function () {
    function Programmer(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Programmer.prototype.compareTo = function (value) {
        return this.salary - value.salary;
    };
    return Programmer;
}());
;
var r1 = new Rectangle(3, 5);
var r2 = new Rectangle(10, 6);
var p1 = new Programmer('J', 2000);
console.log(r1.compareTo(r2));
