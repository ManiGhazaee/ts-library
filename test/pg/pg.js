"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!Array.prototype.toPopped) {
        Array.prototype.toPopped = function () {
                if (this.length === 0) return undefined;
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
if (!Array.prototype.toShifted) {
        Array.prototype.toShifted = function () {
                var copy = this.slice();
                copy.shift();
                return copy;
        };
}
if (!Array.prototype.toUnshifted) {
        Array.prototype.toUnshifted = function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                        items[_i] = arguments[_i];
                }
                var copy = this.slice();
                copy.unshift.apply(copy, items);
                return copy;
        };
}
var test = [1];
test.shift();
test.unshift();
var arr = [1, 2, 3];
var shifted = arr.toShifted();
console.log(shifted);
console.log(arr);
var arr1 = [2, 3];
var unshifted = arr.toUnshifted(1);
console.log(unshifted);
console.log(arr1);
