"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = void 0;
if (!Array.prototype.toPopped) {
    Array.prototype.toPopped = function () {
        if (this.length === 0)
            return undefined;
        const popped = this.slice();
        popped.pop();
        return popped;
    };
}
if (!Array.prototype.toPushed) {
    Array.prototype.toPushed = function (...items) {
        const copy = this.slice(0);
        copy.push(...items);
        return copy;
    };
}
if (!Array.prototype.toShifted) {
    Array.prototype.toShifted = function () {
        const copy = this.slice();
        copy.shift();
        return copy;
    };
}
if (!Array.prototype.toUnshifted) {
    Array.prototype.toUnshifted = function (...items) {
        const copy = this.slice();
        copy.unshift(...items);
        return copy;
    };
}
if (!Array.prototype.toUnshifted) {
    Array.prototype.toUnshifted = function (...items) {
        const copy = this.slice();
        copy.unshift(...items);
        return copy;
    };
}
if (!Array.prototype.toSorted) {
    Array.prototype.toSorted = function (compareFn) {
        const copy = this.slice();
        copy.sort(compareFn);
        return copy;
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
let arr = [1, 2, 3, 4, 5, 6, 7];
let shuffled = shuffleArray(arr);
console.log(shuffled); // [5, 2, 4, 3, 1, 7, 6]
