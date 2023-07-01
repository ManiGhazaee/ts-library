export {};

declare global {
        interface Array<T> {
                toPopped(): T[];
                toPushed(...items: T[]): T[];
                toShifted(): T[];
                toUnshifted(...items: T[]): T[];
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
let test = [1];
test.shift();
test.unshift();

const arr = [1, 2, 3];
const shifted = arr.toShifted();
console.log(shifted);
console.log(arr);

const arr1 = [1, 2, 3];
const unshifted = arr.toUnshifted();
console.log(unshifted);
console.log(arr1);
