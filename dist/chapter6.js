"use strict";
var Greeting = (function () {
    function Greeting() {
    }
    Greeting.sayHallo = function (name) {
        console.log('Hello, ' + name);
    };
    return Greeting;
}());
;
Greeting.sayHallo('John');
//# sourceMappingURL=chapter6.js.map