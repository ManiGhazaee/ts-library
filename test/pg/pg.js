"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = void 0;

if (!Array.prototype.toPopped) {
        Array.prototype.toPopped = function () {
                if (this.length === 0) return undefined;
                return this.slice(0, this.length - 1);
        };
}
if (!Array.prototype.toPushed) {
        Array.prototype.toPushed = function (...items) {
                let copy = this.slice(0);
                copy.push(...items);
                return copy;
        };
}
if (!Array.prototype.toShifted) {
        Array.prototype.toShifted = function () {
                return this.slice(1);
        };
}
if (!Array.prototype.toUnshifted) {
        Array.prototype.toUnshifted = function (...items) {
                let copy = this.slice(0);
                copy.unshift(...items);
                return copy;
        };
}

if (!Array.prototype.toSorted) {
        Array.prototype.toSorted = function (compareFn) {
                return this.slice(0).sort(compareFn);
        };
}
function shuffleArray(arr) {
        let R;
        let i = 0;
        while (i < arr.length) {
                R = Math.floor(Math.random() * arr.length);
                [arr[i], arr[R]] = [arr[R], arr[i]];
                i++;
        }
        return arr;
}
exports.shuffleArray = shuffleArray;

let arr = [2, 1, 3];
console.log(arr.toPopped());
console.log(arr);
console.log(arr.toShifted());
console.log(arr);
console.log(arr.toUnshifted(4));
console.log(arr);
console.log(arr.toPushed(4));
console.log(arr);
console.log(arr.toSorted());
console.log(arr);
