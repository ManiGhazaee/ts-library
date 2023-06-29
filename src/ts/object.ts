/**
 * Function to check if an object is empty
 */
export function isObjectEmpty(obj: object) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
}
