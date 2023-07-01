export {};

declare global {
        interface Array<T> {
                /**
                 * Returns a new array that is a copy of the original array with the last element removed.
                 */
                toPopped(): T[] | undefined;
                /**
                 * Adds one or more elements to the end of an array and returns a new array.
                 * @param  items - The elements to add to the end of the array.
                 */
                toPushed(...items: T[]): T[];
                /**
                 * Returns a new array with the first element removed.
                 */
                toShifted(): T[];
                /**
                 * Returns a new array with the specified elements added to the beginning.
                 * @param items - The items to add to the beginning of the array.
                 */
                toUnshifted(...items: T[]): T[];
                /**
                 * Creates a sorted copy of the array, using the provided compare function.
                 * @param compareFn - A function that defines the sort order.
                 * @example
                 * const arr = [2, 1, 4, 3];
                 * const sorted = arr.toSorted((a, b) => a - b);
                 * console.log(sorted); // [1, 2, 3, 4]
                 * console.log(arr); // [2, 1, 4, 3]
                 */
                toSorted(compareFn?: (a: T, b: T) => number): T[];
                /**
                 * Gets the last element of the array.
                 * @readonly
                 */
                readonly last: T | undefined;
        }
}

if (!Array.prototype.last) {
        Object.defineProperty(Array.prototype, "last", {
                get: function () {
                        return this[this.length - 1];
                },
        });
}

if (!Array.prototype.toPopped) {
        Array.prototype.toPopped = function () {
                if (this.length === 0) return undefined;
                const copy = this.slice();
                copy.pop();
                return copy;
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

if (!Array.prototype.toSorted) {
        Array.prototype.toSorted = function (compareFn) {
                const copy = this.slice();
                copy.sort(compareFn);
                return copy;
        };
}
