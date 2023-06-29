/**
 * `0 <= random <= n - 1`
 * @param {number} n
 * @returns {number}
 */
export function random(n: number): number {
        return Math.floor(Math.random() * n);
}
