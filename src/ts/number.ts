/**
 * `0 <= random <= n - 1`
 */
export function random(n: number): number {
        return Math.floor(Math.random() * n);
}

/**
 * Clamp a number or numbers in a array around a min and max value.
 */
export function clamp(min: number, numbers: number, max: number): number;
export function clamp(min: number, numbers: number[], max: number): number[];
export function clamp(min: number, numbers: number | number[], max: number): number | number[] {
        if (min > max) throw new Error(`The minimum value cannot be greater than the maximum value.\nmin: ${min}\nmax: ${max}`);
        if (!Array.isArray(numbers)) {
                return Math.max(Math.min(numbers, max), min);
        } else {
                let result: number[] = [];
                for (let i = 0; i < numbers.length; i++) {
                        result.push(Math.max(Math.min(numbers[i], max), min));
                }
                return result;
        }
}

/**
 * Returns an array of digits in a given integer number.
 * @example
 * getDigits(123); // [1, 2, 3]
 * getDigits(-456); // [4, 5, 6]
 * getDigits(0); // [0]
 */
export function getDigits(number: number): number[] {
        if (number === 0) return [0];
        else if (number < 0) number *= -1;

        let result: number[] = [];
        while (number !== 0) {
                result.unshift(number % 10);
                number = Math.floor(number / 10);
        }
        return result;
}

/**
 * Returns an array of digits in a given floating-point number.
 * @example
 * getDigitsFloat(3.14159); // [3, 1, 4, 1, 5, 9]
 * getDigitsFloat(-0.123); // [0, 1, 2, 3]
 * getDigitsFloat(42); // [4, 2]
 */
export function getDigitsFloat(number: number): number[] {
        return number
                .toString()
                .split("")
                .map((v) => parseInt(v))
                .filter((v) => !isNaN(v));
}
