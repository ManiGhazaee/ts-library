"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!Array.prototype.toPopped) {
    Array.prototype.toPopped = function () {
        if (this.length === 0)
            return undefined;
        var popped = this.slice();
        popped.pop();
        return popped;
    };
}
if (!Array.prototype.toPushed) {
    Array.prototype.toPushed = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var copy = this.slice();
        copy.push.apply(copy, items);
        return copy;
    };
}
var arr = [1, 2, 3];
var newArr = arr.toPushed(4, 5, 6);
console.log(newArr); // [1, 2, 3, 4, 5, 6]
console.log(arr); // [1, 2, 3]
var emptyArr = [];
var anotherArr = emptyArr.toPushed("a", "b", "c");
console.log(anotherArr); // ['a', 'b', 'c']
console.log(emptyArr); // []
