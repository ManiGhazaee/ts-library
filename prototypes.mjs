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