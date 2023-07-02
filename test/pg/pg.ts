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

function getDigits(number: number): number[] {
        if (number === 0) return [0];
        else if (number < 0) number *= -1;

        let result = [];
        while (number !== 0) {
                result.unshift(number % 10);
                number = Math.floor(number / 10);
        }
        return result;
}
function getDigitsFloat(number: number): number[] {
        const chars = number.toString().split("");
        return chars.map((v) => parseInt(v)).filter((v) => !isNaN(v));
}
console.log(getDigits(256));
