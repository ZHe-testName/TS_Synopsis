"use strict";
var num = 6;
var num1 = 6;
var str = 'string';
var lohn = 'John Smith';
function calcTax(city, income, depth) {
    if (city === 'NY') {
        return income * 0.06 - depth * 500;
    }
    else if (city === 'NJ') {
        return income * 0.05 - depth * 300;
    }
}
;
var padding;
var patient = {
    weight: 50,
    name: 'Jeka',
};
;
var SearchAction = (function () {
    function SearchAction(payload) {
        this.payload = payload;
        this.actionType = 'SEARCH';
    }
    ;
    return SearchAction;
}());
;
var SearchSuccessAction = (function () {
    function SearchSuccessAction(payload) {
        this.payload = payload;
        this.actionType = 'SUCCESS';
    }
    ;
    return SearchSuccessAction;
}());
;
var SearchFailedAction = (function () {
    function SearchFailedAction() {
        this.actionType = 'FAILLED';
    }
    return SearchFailedAction;
}());
;
;
;
function ABFunc(x) {
    if ('a' in x)
        return x.a;
    if ('b' in x)
        return x.b;
}
;
var personAdr1;
personAdr1 = JSON.parse('{"adress": "25 Broadway"}');
console.log(personAdr1.address);
var personAdr2;
personAdr2 = JSON.parse('{"adress": "25 Broadway"}');
//# sourceMappingURL=chapter2.js.map