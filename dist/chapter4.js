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
function printMe(value) {
    console.log(value);
    return value;
    ;
}
;
var s = printMe('Hello');
var Something = (function () {
    function Something(someone) {
        this.someone = someone;
    }
    return Something;
}());
;
var some = printMe(new Something('grrr'));
var Pair = (function () {
    function Pair(key, value) {
        this.key = key;
        this.value = value;
    }
    return Pair;
}());
;
function compare(pair1, pair2) {
    return pair1.key === pair2.key &&
        pair1.value === pair2.value;
}
;
var pair1 = new Pair('Loe', 31);
var pair2 = new Pair('Loe', 31);
console.log(compare(pair1, pair2));
var pair3 = new Pair('Apple', 'one');
var pair4 = new Pair('apple', 'two');
console.log(compare(pair3, pair4));
;
var UserRoles;
(function (UserRoles) {
    UserRoles["admin"] = "Administrator";
    UserRoles["manager"] = "Manager";
})(UserRoles || (UserRoles = {}));
;
function loadUser() {
    return JSON.parse('{"name": "Katya", "role": "Administrator"}');
}
;
var user = loadUser();
switch (user.role) {
    case UserRoles.admin:
        console.log('Show admin panel');
        break;
    case UserRoles.manager:
        console.log('Hide admin panel');
        break;
    default:
        console.log('Wrong args');
}
;
var outerFunc = function (someValue) { return function (mulplaer) { return someValue * mulplaer; }; };
var innerFunc = outerFunc(10);
console.log(innerFunc(6));
var stringFunc = function (someStr) { return function (rec) { return someStr.length + rec; }; };
var voidFunc = function () { return function (rec) { return 5 + rec; }; };
var numberFunc = function (someNum) { return function (rec) { return someNum * rec; }; };
