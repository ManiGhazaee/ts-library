type ColorParameter = string | number[] | { red: number; green: number; blue: number; alpha: number };
type ColorObject = { red: number; green: number; blue: number; alpha: number };

export class Color {
        red: number;
        green: number;
        blue: number;
        alpha: number;
        constructor(color: ColorParameter) {
                this.red = this.colorParser(color).red;
                this.green = this.colorParser(color).green;
                this.blue = this.colorParser(color).blue;
                this.alpha = this.colorParser(color).alpha;
        }

        private colorParser(color: ColorParameter): ColorObject {
                if (this.isRgbArray(color)) {
                        return { red: color[0], green: color[1], blue: color[2], alpha: 255 };
                } else if (this.isRgbaArray(color)) {
                        return { red: color[0], green: color[1], blue: color[2], alpha: color[3] };
                } else if (this.isRgbString(color)) {
                        const array = this.rgbToArray(color);
                        return { red: array[0], green: array[1], blue: array[2], alpha: 255 };
                } else if (this.isRgbaString(color)) {
                        const array = this.rgbToArray(color);
                        return { red: array[0], green: array[1], blue: array[2], alpha: array[3] };
                } else if (this.isHex(color)) {
                        let array: number[];
                        if (color.length === 4 || color.length === 7) {
                                array = this.hexToRgbArray(color);
                                array.push(255);
                        } else if (color.length === 9) {
                                array = this.hexToRgbaArray(color);
                        } else {
                                array = [0, 0, 0, 0];
                        }
                        return { red: array[0], green: array[1], blue: array[2], alpha: array[3] };
                } else if (this.isColorObject(color)) {
                        return color;
                } else {
                        return { red: 0, green: 0, blue: 0, alpha: 0 };
                }
        }
        private isRgbArray(color: ColorParameter): color is number[] {
                return Array.isArray(color) && color.length === 3;
        }
        private isRgbaArray(color: ColorParameter): color is number[] {
                return Array.isArray(color) && color.length === 4;
        }
        private isRgbString(color: ColorParameter): color is string {
                return typeof color === "string" && color.slice(0, 3) === "rgb" && color[3] !== "a";
        }
        private isRgbaString(color: ColorParameter): color is string {
                return typeof color === "string" && color.slice(0, 4) === "rgba";
        }
        private isHex(color: ColorParameter): color is string {
                return typeof color === "string" && color[0] === "#";
        }
        private isColorObject(color: ColorParameter): color is ColorObject {
                return (
                        color !== null &&
                        typeof color === "object" &&
                        "red" in color &&
                        "green" in color &&
                        "blue" in color &&
                        "alpha" in color &&
                        Object.keys(color).length === 4 &&
                        typeof Object.values(color)[0] === "number" &&
                        typeof Object.values(color)[1] === "number" &&
                        typeof Object.values(color)[2] === "number" &&
                        typeof Object.values(color)[3] === "number"
                );
        }
        private rgbToArray(string: string): number[] {
                const str: string[] = string.match(/\d+/g) ?? [];
                const rgbArray = str.map(Number);
                if (rgbArray.length === 4) {
                        rgbArray[3] = Math.round(rgbArray[3] * 255);
                }
                return rgbArray;
        }
        private hexToRgbArray(h: string) {
                let r: number, g: number, b: number;
                if (h.length == 4) {
                        r = parseInt("0x" + h[1] + h[1]);
                        g = parseInt("0x" + h[2] + h[2]);
                        b = parseInt("0x" + h[3] + h[3]);
                } else if (h.length == 7) {
                        r = parseInt("0x" + h[1] + h[2]);
                        g = parseInt("0x" + h[3] + h[4]);
                        b = parseInt("0x" + h[5] + h[6]);
                } else {
                        r = 0;
                        g = 0;
                        b = 0;
                }

                return [r, g, b];
        }
        private hexToRgbaArray(h: string) {
                let r: number, g: number, b: number, a: number;
                if (h.length == 9) {
                        r = parseInt("0x" + h[1] + h[2]);
                        g = parseInt("0x" + h[3] + h[4]);
                        b = parseInt("0x" + h[5] + h[6]);
                        a = parseInt("0x" + h[7] + h[8]);
                } else {
                        r = 0;
                        g = 0;
                        b = 0;
                        a = 0;
                }

                return [r, g, b, a];
        }
        private rgbaArrayToHex(array: number[]) {
                let r = array[0],
                        g = array[1],
                        b = array[2],
                        a;
                if (array[3] < 255) {
                        a = array[3].toString(16);
                        if (a.length === 1) {
                                a = "0" + a;
                        }
                } else a = "";
                return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1) + a;
        }

        public rgbArray() {
                return [this.red, this.green, this.blue];
        }
        public rgbaArray() {
                return [this.red, this.green, this.blue, this.alpha];
        }
        public rgbString() {
                return `rgb(${this.red} ,${this.green} ,${this.blue})`;
        }
        public rgbaString() {
                return `rgba(${this.red} ,${this.green} ,${this.blue} ,${this.alpha / 255})`;
        }
        public hex() {
                return this.rgbaArrayToHex([this.red, this.green, this.blue, this.alpha]);
        }

        public percentTo(color: string | number[] | { red: number; green: number; blue: number; alpha: number }, percent: number): number[] {
                let color2: number[] = new Color(color).rgbArray();

                let color1 = [this.red, this.green, this.blue];

                let diff1 = Math.abs(color1[0] - color2[0]);
                let diff2 = Math.abs(color1[1] - color2[1]);
                let diff3 = Math.abs(color1[2] - color2[2]);

                let smaller1 = color1[0] > color2[0] ? color2[0] : color1[0];
                let smaller2 = color1[1] > color2[1] ? color2[1] : color1[1];
                let smaller3 = color1[2] > color2[2] ? color2[2] : color1[2];

                let sign1 = smaller1 === color2[0] ? -1 : 1;
                let sign2 = smaller2 === color2[1] ? -1 : 1;
                let sign3 = smaller3 === color2[2] ? -1 : 1;

                return [
                        color1[0] + (sign1 * Math.round(diff1 * percent)) / 100,
                        color1[1] + (sign2 * Math.round(diff2 * percent)) / 100,
                        color1[2] + (sign3 * Math.round(diff3 * percent)) / 100,
                ];
        }

        public toElements(elements: HTMLElement | HTMLElement[]) {
                const color = this.rgbaString();
                const elems = Array.isArray(elements) ? elements : [elements];
                for (let i = 0; i < elems.length; i++) {
                        elems[i].style.color = color;
                }
        }
}
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

        return [
                color1[0] + (sign1 * (diff1 * percent)) / 100,
                color1[1] + (sign2 * (diff2 * percent)) / 100,
                color1[2] + (sign3 * (diff3 * percent)) / 100,
        ];
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
