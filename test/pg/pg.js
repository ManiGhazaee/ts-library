"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.toPopped = function () {
    var popped = this.slice();
    popped.pop();
    return popped;
};
var arr = [1, 2, 3];
var poped = arr.toPopped();
console.log(poped);
console.log(arr);
