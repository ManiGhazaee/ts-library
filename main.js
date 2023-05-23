/**
 * Returns an object containing all elements with an `id` attribute in the document, with keys converted to camelCase.
 * @returns {object} An object containing all elements with an `id` attribute in the document, with keys converted to camelCase.
 */
export function getElementsByIds() {
        let elementsById = {};
        let allElements = document.getElementsByTagName("*");
        for (let i = 0; i < allElements.length; i++) {
                if (allElements[i].id != null && allElements[i].id !== "") {
                        elementsById[kebabToCamel(elems[i].id)] = allElements[i];
                }
        }
        return elementsById;
}

/**
 * Creates a new element with the specified tag name and attributes, and appends it to the provided parent element.
 * @param {string} tagName - The tag name of the element to create.
 * @param {object} attributes - An object containing the attributes to set on the new element.
 * @param {HTMLElement} parentElem - The parent element to append the new element to.
 * @returns {void}
 */
export function createAndAppendElement(tagName, attributes, parentElem) {
        const newElem = document.createElement(tagName);
        for (const attr in attributes) {
                newElem.setAttribute(attr, attributes[attr]);
        }
        parentElem.appendChild(newElem);
}

/**
 * Converts a string from kebab-case to camelCase.
 * @param {string} str - The string to convert.
 * @returns {string} The converted string in camelCase.
 */
export function kebabToCamel(str) {
        str = str.split("");
        for (let i = 0; i < str.length; i++) {
                if (str[i] === "-" && str[i + 1] != null) {
                        str[i + 1] = str[i + 1].toUpperCase();
                        str.splice(i, 1);
                        i--;
                }
        }
        return str.join("");
}

/**
 * Retrieves all items from local storage and updates the values in the provided object.
 * @param {object} lsItems - The object containing key-value pairs to be updated.
 * @returns {object} The `lsItems` object with updated values (if any).
 */
export function lsGetAll(lsItems) {
        for (const key in lsItems) {
                lsItems[key] = localStorage.getItem(key) || lsItems[key];
        }
}

/**
 * Sets all key-value pairs in the provided object to the localStorage.
 * @param {object} lsItems - An object containing key-value pairs to be set in localStorage.
 * @returns {void}
 */
export function lsSetAll(lsItems) {
        for (const key in lsItems) {
                localStorage.setItem(key, lsItems[key]);
        }
}

/**
 * Sets a key-value pair to the localStorage and updates the provided object `lsItems` with the same key-value pair.
 * If the provided object `lsItems` is not null, it will be updated with the new key-value pair.
 * @param {string} lsKey - The key to set in localStorage.
 * @param {string} lsVal - The value to set in localStorage.
 * @param {object|null} lsItems - An object containing key-value pairs to be updated with the new key-value pair.
 * @returns {void}
 */
export function lsSet(lsKey, lsVal, lsItems) {
        localStorage.setItem(lsKey, lsVal);
        if (lsItems != null) {
                lsItems[lsKey] = lsVal;
        }
        lsGetAll(ls);
}

/**
 * Gets the value associated with the provided key from localStorage.
 * @param {string} lsKey - The key to retrieve from localStorage.
 * @returns {string|null} - The value associated with the provided key, or null if the key is not found in localStorage.
 */
export function lsGet(lsKey) {
        return localStorage.getItem(lsKey);
}

/**
 * removes class of a given HTMLElement or node if it exist.
 * @param {HTMLElement} element
 * @param {string} classToRemove
 * @returns {void}
 */
export function rmClass(element, classToRemove) {
        if (element.classList.contains(classToRemove)) {
                element.classList.remove(classToRemove);
        }
}

/**
 * adds class to a given HTMLElement or node.
 * @param {HTMLElement} element
 * @param {string} classToAdd
 * @returns {void}
 */
export function addClass(element, classToAdd) {
        element.classList.add(classToAdd);
}

/**
 * removes class of a given HTMLElement or node if it exist.
 * and adds class to the given HTMLElement or node.
 * @param {HTMLElement} element
 * @param {string} classToRemove
 * @param {string} classToAdd
 * @returns {void}
 */
export function switchClass(element, classToRemove, classToAdd) {
        if (element.classList.contains(classToRemove)) {
                element.classList.remove(classToRemove);
        }
        element.classList.add(classToAdd);
}

/**
 * short version of getElementById
 * @param {string} id
 * @returns {HTMLElement}
 */
export function byId(id) {
        return document.getElementById(id);
}

/**
 * querySelector
 * @param {string} querySelector
 * @returns {HTMLElement}
 */
export function $(querySelector) {
        return document.querySelector(querySelector);
}

/**
 * querySelectorAll
 * @param {string} querySelector
 * @returns {HTMLElement}
 */
export function $$(querySelector) {
        return document.querySelectorAll(querySelector);
}

/**
 * toLowerCase but better
 * @param {string} str
 * @returns {string}
 */
export function tolowercase(str) {
        if (str === " ") return " ";
        if (str == null) return " ";
        return str.toLowerCase();
}

/**
 * check if a element isLastChild
 * @param {HTMLElement} el
 * @returns {boolean}
 */
export function isLastChild(el) {
        return el === el.parentNode.children[el.parentNode.children.length - 1];
}

/**
 * check if a element isFirstChild
 * @param {HTMLElement} el
 * @returns {boolean}
 */
export function isFirstChild(el) {
        return el === el.parentNode.children[0];
}

/**
 * `0 <= random <= n - 1`
 * @param {number} n
 * @returns {number}
 */
export function random(n) {
        return Math.floor(Math.random() * n);
}

/**
 * removes classes of a given HTMLElement or node if it exist.
 * @param {HTMLElement} element
 * @param {Array<string>} array - array containing all classes needs to be removed
 * @returns {void}
 */
export function rmClasses(element, array) {
        for (let i = 0; i < array.length; i++) {
                if (element.classList.contains(array[i])) {
                        element.classList.remove(array[i]);
                }
        }
}

/**
 * adds classes to a given HTMLElement or node if it exist.
 * @param {HTMLElement} element
 * @param {Array<string>} array - array containing all classes needs to be added
 * @returns {void}
 */
export function addClasses(element, array) {
        for (let i = 0; i < array.length; i++) {
                element.classList.add(array[i]);
        }
}

/**
 * turns string of rgb to array containing rgb values `[r, g, b]` 
 * @param {string} str - rgb representaion of a color
 * @returns {Array<number>}
 * @example rgbToArray("rgb(189, 22, 89)") // [189, 22, 89]
 */
export function rgbToArray(str) {
        str = str.split(",");
        for (let i = 0; i < str.length; i++) {
                str[i] = str[i].replace(/\D/g, "");
                str[i] = parseInt(str[i]);
        }
        return str;
}

/**
 *  
 * @param {Array<number>} color1 
 * @param {Array<number>} color2 
 * @param {number} percent 
 * @returns {Array<number>}
 */
export function betweenTwoColor(color1, color2, percent) {
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
 * @param {Array<number>} arr 
 * @returns {string}
 * @example arrayToRgb([222, 45, 88]); // "rgb(222, 45, 88)"
 */
export function arrayToRgb(arr) {
        return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
}

/**
 * turns rgb array to hex string
 * @param {Array<number>} array 
 * @returns {string}
 * @example rgbToHex([68, 419, 0]); // #44ff00
 */
export function rgbToHex(array) {
        return "#" + ((1 << 24) + (array[0] << 16) + (array[1] << 8) + array[2]).toString(16).slice(1);
}

/**
 * turns hex representation of a color to rgb string `"rgb(r, g, b)"`
 * @param {string} h 
 * @returns {string}
 * @example hexToRgb("#44ff00"); // rgb(68, 419, 0)
 */
export function hexToRgb(h) {
        let r = 0,
                g = 0,
                b = 0;
        if (h.length == 4) {
                r = "0x" + h[1] + h[1];
                g = "0x" + h[2] + h[2];
                b = "0x" + h[3] + h[3];
        } else if (h.length == 7) {
                r = "0x" + h[1] + h[2];
                g = "0x" + h[3] + h[4];
                b = "0x" + h[5] + h[6];
        }

        return "rgb(" + +r + "," + +g + "," + +b + ")";
}


// ========================================
// TEST

let doc = getElementsByIds();
console.log(doc);

doc.passwordGenerator.style.width = "100px";
doc.passwordGenerator.style.height = "100px";
doc.passwordGenerator.style.backgroundColor = "red";

createAndAppendElement("div", { id: "foo" }, document.body);
doc = getElementsByIds();
console.log(doc);

console.log(kebabToCamel("child-two"));

let xLS = localStorage.getItem("x");
x = xLS || "default_value";

let ls = {
        x: "default_value",
        y: "bluh",
        z: "goo",
        a: "far",
};

lsGetAll(ls);
console.log(`ls: ${JSON.stringify(ls)}`);
console.log(localStorage);
console.log(lsGet("x"));
lsSet("x", "blue", ls);
console.log(ls);
console.log(localStorage);
console.log(lsGet("x"));

localStorage.setItem("x", "value");
x = "value";
// ========================================
