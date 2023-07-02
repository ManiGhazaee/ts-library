export {};

declare global {
        interface Array<T> {
                toPopped(): T[] | undefined;
                toPoppedx(): T[] | undefined;
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

export function shuffleArray<T>(arr: T[]): T[] {
        let R;
        let i = 0;
        while (i < arr.length) {
                R = Math.floor(Math.random() * arr.length);
                [arr[i], arr[R]] = [arr[R], arr[i]];
                i++;
        }
        return arr;
}

function clamp(min: number, numbers: number, max: number): number;
function clamp(min: number, numbers: number[], max: number): number[];
function clamp(min: number, numbers: number | number[], max: number): number | number[] {
        if (min > max) throw new Error(`The minimum value cannot be greater than the maximum value.\nmin: ${min}\nmax: ${max}`);
        if (!Array.isArray(numbers)) {
                return Math.max(Math.min(numbers, max), min);
        } else {
                let result: number[] = [];
                for (let i = 0; i < numbers.length; i++) {
                        result.push(Math.max(Math.min(numbers[i], max), min));
                }
                return result;
        }
}

let arr = [1, 2];
const ans = clamp(5, arr, 3);
console.log(ans);
