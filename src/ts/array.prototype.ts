export {};

declare global {
        interface Array<T> {
                mat(index: number): T[];
        }
}

/**
 * Returns the element of the array at the specified index, counting from the end if index is negative.
 * @example
 * const arr = [1, 2, 3];
 * arr.mat(0); // 1
 * arr.mat(-1); // 3
 * arr.mat(3); // undefined
 * arr.mat(-4); // undefined
 */
if (!Array.prototype.mat) {
        Array.prototype.mat = function <T>(index: number): T[] {
                if (index < 0) {
                        return this[this.length + index];
                }
                return this[index];
        };
}
