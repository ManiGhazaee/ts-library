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
