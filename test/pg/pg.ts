export {};

declare global {
        interface Array<T> {
                toPopped(): T[];
                toPushed(...items: T[]): T[];
                toShifted(): T[];
                toUnshifted(...items: T[]): T[];
                toSorted(compareFn?: (a: T, b: T) => number): T[];
        }
}

if (!Array.prototype.toPopped) {
        Array.prototype.toPopped = function () {
                if (this.length === 0) return undefined;
                const popped = this.slice();
                popped.pop();
                return popped;
        };
}

if (!Array.prototype.toPushed) {
        Array.prototype.toPushed = function (...items) {
                const copy = this.slice();
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
const arr = [2, 1, 4, 3];
const sorted = arr.toSorted((a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4]
console.log(arr); // [2, 1, 4, 3]
