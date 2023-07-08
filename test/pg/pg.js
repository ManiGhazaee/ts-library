"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
class Color {
    red;
    green;
    blue;
    alpha;
    constructor(color) {
        this.red = this.colorParser(color).red;
        this.green = this.colorParser(color).green;
        this.blue = this.colorParser(color).blue;
        this.alpha = this.colorParser(color).alpha;
    }
    colorParser(color) {
        if (this.isRgbArray(color)) {
            return { red: color[0], green: color[1], blue: color[2], alpha: 255 };
        }
        else if (this.isRgbaArray(color)) {
            return { red: color[0], green: color[1], blue: color[2], alpha: color[3] };
        }
        else if (this.isRgbString(color)) {
            const array = this.rgbToArray(color);
            return { red: array[0], green: array[1], blue: array[2], alpha: 255 };
        }
        else if (this.isRgbaString(color)) {
            const array = this.rgbToArray(color);
            return { red: array[0], green: array[1], blue: array[2], alpha: array[3] };
        }
        else if (this.isHex(color)) {
            let array;
            if (color.length === 4 || color.length === 7) {
                array = this.hexToRgbArray(color);
                array.push(255);
            }
            else if (color.length === 9) {
                array = this.hexToRgbaArray(color);
            }
            else {
                array = [0, 0, 0, 0];
            }
            return { red: array[0], green: array[1], blue: array[2], alpha: array[3] };
        }
        else if (this.isColorObject(color)) {
            return color;
        }
        else {
            return { red: 0, green: 0, blue: 0, alpha: 0 };
        }
    }
    isRgbArray(color) {
        return Array.isArray(color) && color.length === 3;
    }
    isRgbaArray(color) {
        return Array.isArray(color) && color.length === 4;
    }
    isRgbString(color) {
        return typeof color === "string" && color.slice(0, 3) === "rgb" && color[3] !== "a";
    }
    isRgbaString(color) {
        return typeof color === "string" && color.slice(0, 4) === "rgba";
    }
    isHex(color) {
        return typeof color === "string" && color[0] === "#";
    }
    isColorObject(color) {
        return (color !== null &&
            typeof color === "object" &&
            "red" in color &&
            "green" in color &&
            "blue" in color &&
            "alpha" in color &&
            Object.keys(color).length === 4 &&
            typeof Object.values(color)[0] === "number" &&
            typeof Object.values(color)[1] === "number" &&
            typeof Object.values(color)[2] === "number" &&
            typeof Object.values(color)[3] === "number");
    }
    rgbToArray(string) {
        const str = string.match(/\d+/g) ?? [];
        const rgbArray = str.map(Number);
        if (rgbArray.length === 4) {
            rgbArray[3] = Math.round(rgbArray[3] * 255);
        }
        return rgbArray;
    }
    hexToRgbArray(h) {
        let r, g, b;
        if (h.length == 4) {
            r = parseInt("0x" + h[1] + h[1]);
            g = parseInt("0x" + h[2] + h[2]);
            b = parseInt("0x" + h[3] + h[3]);
        }
        else if (h.length == 7) {
            r = parseInt("0x" + h[1] + h[2]);
            g = parseInt("0x" + h[3] + h[4]);
            b = parseInt("0x" + h[5] + h[6]);
        }
        else {
            r = 0;
            g = 0;
            b = 0;
        }
        return [r, g, b];
    }
    hexToRgbaArray(h) {
        let r, g, b, a;
        if (h.length == 9) {
            r = parseInt("0x" + h[1] + h[2]);
            g = parseInt("0x" + h[3] + h[4]);
            b = parseInt("0x" + h[5] + h[6]);
            a = parseInt("0x" + h[7] + h[8]);
        }
        else {
            r = 0;
            g = 0;
            b = 0;
            a = 0;
        }
        return [r, g, b, a];
    }
    rgbaArrayToHex(array) {
        let r = array[0], g = array[1], b = array[2], a;
        if (array[3] < 255) {
            a = array[3].toString(16);
            if (a.length === 1) {
                a = "0" + a;
            }
        }
        else
            a = "";
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1) + a;
    }
    rgbArray() {
        return [this.red, this.green, this.blue];
    }
    rgbaArray() {
        return [this.red, this.green, this.blue, this.alpha];
    }
    rgbString() {
        return `rgb(${this.red} ,${this.green} ,${this.blue})`;
    }
    rgbaString() {
        return `rgba(${this.red} ,${this.green} ,${this.blue} ,${this.alpha / 255})`;
    }
    hex() {
        return this.rgbaArrayToHex([this.red, this.green, this.blue, this.alpha]);
    }
    percentTo(color, percent) {
        let color2 = new Color(color).rgbArray();
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
    toElements(elements) {
        const color = this.rgbaString();
        const elems = Array.isArray(elements) ? elements : [elements];
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.color = color;
        }
    }
}
exports.Color = Color;
const clg = console.log.bind(console);
const c1 = [243, 43, 1, 255];
const c2 = [243, 43, 1];
const c3 = "rgb(243, 43, 1, 255)";
const c4 = "rgb(243, 43, 1)";
const c5 = "#f32b0101";
const C1 = new Color(c1);
const C2 = new Color(c2);
const C3 = new Color(c3);
const C4 = new Color(c4);
const C5 = new Color(c5);
const C6 = new Color([200, 200, 200]);
const C7 = new Color([100, 100, 100]);
clg(C1.rgbArray());
clg(C1.rgbaArray());
clg(C1.rgbString());
clg(C1.rgbaString());
clg(C1.hex());
clg(C2.rgbArray());
clg(C2.rgbaArray());
clg(C2.rgbString());
clg(C2.rgbaString());
clg(C2.hex());
clg(C3.rgbArray());
clg(C3.rgbaArray());
clg(C3.rgbString());
clg(C3.rgbaString());
clg(C3.hex());
clg(C4.rgbArray());
clg(C4.rgbaArray());
clg(C4.rgbString());
clg(C4.rgbaString());
clg(C4.hex());
clg(C5.rgbArray());
clg(C5.rgbaArray());
clg(C5.rgbString());
clg(C5.rgbaString());
clg(C5.hex());
clg(C6.percentTo(C7, 20));
