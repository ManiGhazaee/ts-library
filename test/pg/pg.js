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
if (!Array.prototype.toSorted) {
        Array.prototype.toSorted = function (compareFn) {
                var copy = this.slice();
                copy.sort(compareFn);
                return copy;
        };
}
const arr = [2, 1, 4, 3];
const sorted = arr.toSorted((a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4]
console.log(arr); // [2, 1, 4, 3]
