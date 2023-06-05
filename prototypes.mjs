/**
 * Returns the element of the array at the specified index, counting from the end if index is negative.
 * @param {number} index - The index of the element to retrieve. If negative, it counts from the end of the array.
 * @returns {*} - The element at the specified index, or undefined if the index is out of range.
 * @example
 * const arr = [1, 2, 3];
 * arr.mat(0); // 1
 * arr.mat(-1); // 3
 * arr.mat(3); // undefined
 * arr.mat(-4); // undefined
 */
Array.prototype.mat = function (index) {
        if (index < 0) {
                return this[this.length + index];
        }
        return this[index];
};

/**
 * A method added to the Array prototype that checks whether two arrays are equal.
 * @param {array} array - The array to compare with.
 * @returns {boolean|undefined} - Returns true if the arrays are equal, false if not. Returns undefined if the argument passed is not an array.
 * @example
 * // Returns true
 * [1, 2, 3].equals([1, 2, 3]);
 *
 * // Returns false
 * [1, 2, 3].equals([2, 1, 3]);
 *
 * // Returns false
 * [1, 2, undefined].equals([1, 2, 3]);
 */
Array.prototype.equals = function (array) {
        if (Array.isArray(array)) {
                try {
                        return JSON.stringify(this) === JSON.stringify(array);
                } catch (err) {
                        console.error(err);
                }
        }
        return undefined;
};