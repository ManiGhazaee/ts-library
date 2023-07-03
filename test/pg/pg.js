"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!Array.prototype.toPopped) {
        Array.prototype.toPopped = function () {
                if (this.length === 0) return undefined;
                const popped = this.slice();
                popped.pop();
                return popped;
        };
}
if (!Array.prototype.toPoppedx) {
        Array.prototype.toPoppedx = function () {
                if (this.length === 0) return undefined;
                return this.slice(0, this.length - 2);
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
const print = console.log.bind(console);
function printf(...args) {
        console.log(...args);
}
let arr = [];
for (let i = 0; i < 100000; i++) {
        arr.push(Math.random() * Math.pow(2, 32));
}

