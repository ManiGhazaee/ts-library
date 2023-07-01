export {};

declare global {
        interface Array<T> {
                /**
                 * Returns the element of the array at the specified index, counting from the end if index is negative.
                 */
                mat(index: number): T | undefined;
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
                 * Gets the last element of the array.
                 * @readonly
                 */
                readonly last: T | undefined;
        }
}

if (!Array.prototype.mat) {
        Array.prototype.mat = function <T>(index: number): T {
                if (index < 0) {
                        return this[this.length + index];
                }
                return this[index];
        };
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
