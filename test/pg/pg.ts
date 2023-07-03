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

const print = console.log.bind(console);

function printf(...args: any[]) {
        console.log(...args);
}

let arr = [];
for (let i = 0; i < 10000; i++) {
        arr.push(Math.random() * Math.pow(2, 32));
}

let times = [];
for (let i = 0; i < arr.length; i++) {
        print(arr[i]);
}
let t1 = performance.now();
for (let i = 0; i < arr.length; i++) {
        print(arr[i]);
}
times.push(performance.now() - t1);

let t2 = performance.now();
for (let i = 0; i < arr.length; i++) {
        printf(arr[i]);
}
times.push(performance.now() - t2);

console.table(times);
