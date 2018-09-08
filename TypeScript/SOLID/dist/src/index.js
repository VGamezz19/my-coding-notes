"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("../api/console");
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var Victor = new Person("Victor");
Victor.getName();
var TerminalVict = new console_1.Terminal();
TerminalVict.getTerminal();
