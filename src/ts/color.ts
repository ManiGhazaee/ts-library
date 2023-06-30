/**
 * sets given color to a element or elements.
 */
export function color(elements: HTMLElement | HTMLElement[], color: string) {
        const elems = Array.isArray(elements) ? elements : [elements];
        for (let i = 0; i < elems.length; i++) {
                elems[i].style.color = color;
        }
}
/**
 * turns string of rgb to array containing rgb values `[r, g, b]`
 * @example rgbToArray("rgb(189, 22, 89)") // [189, 22, 89]
 */
export function rgbToArray(string: string): number[] {
        const str: string[] = string.match(/\d+/g) ?? [];
        return str.map(Number);
}

/**
 *
 */
export function betweenTwoColor(color1: number[], color2: number[], percent: number): number[] {
        let diff1 = Math.abs(color1[0] - color2[0]);
        let diff2 = Math.abs(color1[1] - color2[1]);
        let diff3 = Math.abs(color1[2] - color2[2]);

        let smaller1 = color1[0] > color2[0] ? color2[0] : color1[0];
        let smaller2 = color1[1] > color2[1] ? color2[1] : color1[1];
        let smaller3 = color1[2] > color2[2] ? color2[2] : color1[2];

        let sign1 = smaller1 === color2[0] ? -1 : 1;
        let sign2 = smaller2 === color2[1] ? -1 : 1;
        let sign3 = smaller3 === color2[2] ? -1 : 1;

        return [color1[0] + (sign1 * (diff1 * percent)) / 100, color1[1] + (sign2 * (diff2 * percent)) / 100, color1[2] + (sign3 * (diff3 * percent)) / 100];
}

/**
 * turns array containing rgb values to string `"rgb(r, g, b)"`
 * @example arrayToRgb([222, 45, 88]); // "rgb(222, 45, 88)"
 */
export function arrayToRgb(arr: number[]): string {
        return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
}

/**
 * turns rgb array to hex string
 * @example rgbToHex([68, 419, 0]); // #44ff00
 */
export function rgbToHex(array: number[]): string {
        return "#" + ((1 << 24) + (array[0] << 16) + (array[1] << 8) + array[2]).toString(16).slice(1);
}
