"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        const copy = [...this];
        copy.push(...items);
        return copy;
    };
}
if (!Array.prototype.toPushedx) {
    Array.prototype.toPushedx = function (...items) {
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
const arr = Array(1000000).fill(256);
const push = Array(10000).fill(512);
let t3 = performance.now();
const pushedW = arr.toPushed(...push);
console.log(pushedW[pushedW.length - 1])
console.log(performance.now() - t3);

let t1 = performance.now();
const pushed = arr.toPushed(...push);
console.log(pushed[pushed.length - 1])
console.log(performance.now() - t1);
let t2 = performance.now();
const pushedx = arr.toPushedx(...push);
console.log(pushedx[pushedx.length - 1])
console.log(performance.now() - t2);
