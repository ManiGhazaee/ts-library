/**
 * (arrayDiff doesnt count duplicated elements as diff).
 * returns a array containing all values that array1 has and array2 doesnt and array2 has and array1 doesnt.
 * @example
 * let arr1 = [1, 2, 3, 0];
 * let arr2 = [1, 4, 3, 5, 2];
 * arrayDiff(arr1, arr2); // returns [0, 4, 5]
 */
export function arrayDiff<T>(arr1: T[], arr2: T[]) {
        let set = new Set(arr2);
        let diff = [];

        for (let i = 0; i < arr1.length; i++) {
                if (set.has(arr1[i])) {
                        set.delete(arr1[i]);
                } else {
                        diff.push(arr1[i]);
                }
        }
        for (let i of set) {
                diff.push(i);
        }

        return diff;
}
/**
 * removes duplicated values from an array.
 * @example
 * let array = [1, 2, 2, 3];
 * rmDuplicate(array); // returns [1, 2, 3]
 */
export function rmDuplicate<T>(array: T[]) {
        return [...new Set(array)];
}

/**
 * Creates a deep copy of the given object or array using JSON serialization and deserialization.
 * @param {object|array} source - The object or array to copy.
 * @returns {object|array} A new object or array with the same properties and values as the source.
 */
export function deepCopy<T>(source: T): T {
        return JSON.parse(JSON.stringify(source));
}
