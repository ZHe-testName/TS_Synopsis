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
