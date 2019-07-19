# Best practices JS

Why we should discuse about that it?

Javascript is taking over everything, and is satrting to be every where. JS es different, and some times is nice or bad.

**Don't Code in a Vacuum (solo)** and don't believe everything you read.

The most important writing code, is try to be the best to understand. Becouse we are wrating these code for other developer. There isn't a perfect code. Only if is undertable or not.

## Semicolons

Semicolons are optional in JavaScript. Use by consistency with other languages; prevent the .01% issues.
Use them with ESlint.

## use strinct

```js
// No ERROR
hola = "hola"

function qutal() {
    "use strict";
    // ERROR
    adios= "adios";

    // NO ERROR
    var adios = "adios"
}
```

## Read Only Properties

```js
var obj = {};

Object.defineProperty(obj, 'readOnly', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'This var is read only'
});

console.log(obj.readOnly) // This var is read only

obj.readOnly = 'I Wrote this';

console.log(obj.readOnly) // This var is read only

```

## This

```js
var obj = function() {
    this.hello = 'hello';

    this.greet = function() {
        console.log(this.hello);
    }

    this.delayGreeting = function() {
        setTimeout(this.greet, 1000)
    }
}

var greeter = new obj();

greeter.hello // hello
greeter.greet() // hello
greeter.delayGreeting() // undefined.

```

how to solve it

```js
var obj = function() {
    this.hello = 'hello';

    this.greet = function() {
        console.log(this.hello);
    }

    this.delayGreeting = function() {
        setTimeout(this.greet.bind(this), 1000)
    }
}

var greeter = new obj();

greeter.hello // hello
greeter.greet() // hello
greeter.delayGreeting() // hello.

```

or

Using copy of this.

```js
var obj = function() {
    var _this = this;

    _this.hello = 'hello';

    _this.greet = function() {
        console.log(_this.hello);
    }

    _this.delayGreeting = function() {
        setTimeout(_this.greet, 1000)
    }
}

var greeter = new obj();

greeter.hello // hello
greeter.greet() // hello
greeter.delayGreeting() // hello.

```

or by using Arrow Function... best solution i think xD
