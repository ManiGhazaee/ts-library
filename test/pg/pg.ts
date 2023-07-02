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

let arr = Array(100000).fill(256);
let t1 = performance.now();
for (let i = 0; i < 90000; i++) {
        let poped = arr.toPopped();
        if (i === 8999 && typeof poped !== "undefined") {
                console.log(poped[poped?.length - 1]);
        }
}
let t2 = performance.now();
console.log(t2 - t1);

let t3 = performance.now();
for (let i = 0; i < 90000; i++) {
        let poped = arr.toPoppedx();
        if (i === 8999 && typeof poped !== "undefined") {
                console.log(poped[poped?.length - 1]);
        }
}
let t4 = performance.now();
console.log(t4 - t3);

let t5 = performance.now();
for (let i = 0; i < 90000; i++) {
        let poped = arr.toPopped();
        if (i === 8999 && typeof poped !== "undefined") {
                console.log(poped[poped?.length - 1]);
        }
}
let t6 = performance.now();
console.log(t6 - t5);
