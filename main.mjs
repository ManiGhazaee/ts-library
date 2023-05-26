/**
 * Returns an object containing all elements with an `id` attribute in the document, with keys converted to camelCase.
 * @returns {object} An object containing all elements with an `id` attribute in the document, with keys converted to camelCase.
 * @requires {@link kebabToCamel}
 */
export function getElementsByIds() {
        let elementsById = {};
        let allElements = document.querySelectorAll("*");
        for (let i = 0; i < allElements.length; i++) {
                if (allElements[i].id != null && allElements[i].id !== "") {
                        elementsById[kebabToCamel(allElements[i].id)] = allElements[i];
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
 * Changes the case of a string to the specified format.
 * @param {string} str - The string to change the case of.
 * @param {("camel"|"snake"|"kebab"|"scream"|"upper"|"lower")} changeTo - The case format to change the string to.
 * @returns {string} - The original string with its case changed to the specified format.
 * @example
 * // Returns "exampleStringWithAllCases"
 * changeCase("-Example_string-with all-_ CASES__", "camel");
 *
 * // Returns "ExampleStringWithAllCases"
 * changeCase("-Example_string-with all-_ CASES__", "pascal");
 *
 * // Returns "_example_string_with_all_cases_"
 * changeCase("-Example_string-with all-_ CASES__", "snake");
 *
 * // Returns "-example-string-with-all-cases-"
 * changeCase("-Example_string-with all-_ CASES__", "kebab");
 *
 * // Returns "_EXAMPLE_STRING_WITH_ALL_CASES_"
 * changeCase("-Example_string-with all-_ CASES__", "scream");
 *
 * // Returns "EXAMPLESTRINGWITHALLCASES"
 * changeCase("-Example_string-with all-_ CASES__", "upper");

 * // Returns "examplestringwithallcases"
 * changeCase("-Example_string-with all-_ CASES__", "lower");
 */
export function changeCasex(str, changeTo) {
        str = str.split("");
        if (changeTo === "camel" || changeTo === "pascal") {
                for (let i = 0; i < str.length; i++) {
                        if (str[i] === "-" || str[i] === "_" || str[i] === " ") {
                                str.splice(i, 1);
                                str[i] = str[i].toUpperCase();
                        } else {
                                str[i] = str[i].toLowerCase();
                        }
                }
                if (changeTo === "camel") {
                        str[0] = str[0].toLowerCase();
                } else {
                        str[0] = str[0].toUpperCase();
                }
                for (let i = 0; i < str.length; i++) {
                        if (str[i] === "-" || str[i] === "_" || str[i] === " ") {
                                str.splice(i, 1);
                                i--;
                        }
                }
        } else if (changeTo === "snake" || changeTo === "kebab" || changeTo === "scream") {
                for (let i = 0; i < str.length; i++) {
                        if (str[i] === "-" || str[i] === "_" || str[i] === " ") {
                                if (changeTo === "snake" || changeTo === "scream") {
                                        str[i] = "_";
                                } else {
                                        str[i] = "-";
                                }
                        } else if (str[i] === str[i].toUpperCase() && str[i + 1] != null && str[i + 1] !== str[i + 1].toUpperCase()) {
                                str[i] = str[i].toLowerCase();
                                if (changeTo === "snake" || changeTo === "scream") {
                                        str.splice(i, 0, "_");
                                } else {
                                        str.splice(i, 0, "-");
                                }
                                i++;
                        } else {
                                str[i] = str[i].toLowerCase();
                        }
                }
                for (let i = 0; i < str.length - 1; i++) {
                        if ((str[i] === "_" && (str[i + 1] === "_" || str[i + 1] === "-")) || (str[i] === "-" && (str[i + 1] === "_" || str[i + 1] === "-"))) {
                                str.splice(i, 1);
                                i--;
                        }
                }
                if (changeTo === "scream") {
                        for (let i = 0; i < str.length; i++) {
                                str[i] = str[i].toUpperCase();
                        }
                }
        } else if (changeTo === "upper" || changeTo === "lower") {
                for (let i = 0; i < str.length; i++) {
                        if (str[i] === "-" || str[i] === "_" || str[i] === " ") {
                                str.splice(i, 1);
                                i--;
                        }
                }
                if (changeTo === "upper") {
                        for (let i = 0; i < str.length; i++) {
                                str[i] = str[i].toUpperCase();
                        }
                } else {
                        for (let i = 0; i < str.length; i++) {
                                str[i] = str[i].toLowerCase();
                        }
                }
        }
        return str.join("");
}

export function changeCase(str, changeTo) {
        if (changeTo === "camel" || changeTo === "pascal") {
                for (let i = 0; i < str.length; i++) {
                        if (str[i] === "-" || str[i] === "_" || str[i] === " ") {
                                str = spice(str, i, 2, str[i + 1].toUpperCase());
                        } else {
                                str = spice(str, i, 1, str[i].toLowerCase());
                        }
                }
                if (changeTo === "camel") {
                        str = spice(str, 0, 1, str[0].toLowerCase());
                } else {
                        str = spice(str, 0, 1, str[0].toUpperCase());
                }
                for (let i = 0; i < str.length; i++) {
                        if (str[i] === "-" || str[i] === "_" || str[i] === " ") {
                                str = spice(str, i, 1);
                                i--;
                        }
                }
        } else if (changeTo === "snake" || changeTo === "kebab" || changeTo === "scream") {
                for (let i = 0; i < str.length; i++) {
                        if (str[i] === "-" || str[i] === "_" || str[i] === " ") {
                                if (changeTo === "snake" || changeTo === "scream") {
                                        str = spice(str, i, 1, "_");
                                } else {
                                        str = spice(str, i, 1, "-");
                                }
                        } else if (str[i] === str[i].toUpperCase() && str[i + 1] != null && str[i + 1] !== str[i + 1].toUpperCase()) {
                                str = spice(str, i, 1, str[i].toUpperCase());
                                if (changeTo === "snake" || changeTo === "scream") {
                                        str = spice(str, i, 0, "_");
                                } else {
                                        str = spice(str, i, 0, "-");
                                }
                                i++;
                        } else {
                                str = spice(str, i, 1, str[i].toLowerCase());
                        }
                }
                for (let i = 0; i < str.length - 1; i++) {
                        if ((str[i] === "_" && (str[i + 1] === "_" || str[i + 1] === "-")) || (str[i] === "-" && (str[i + 1] === "_" || str[i + 1] === "-"))) {
                                str = spice(str, i, 1);
                                i--;
                        }
                }
                if (changeTo === "scream") {
                        for (let i = 0; i < str.length; i++) {
                                str = spice(str, i, 1, str[i].toUpperCase());
                        }
                }
        } else if (changeTo === "upper" || changeTo === "lower") {
                for (let i = 0; i < str.length; i++) {
                        if (str[i] === "-" || str[i] === "_" || str[i] === " ") {
                                str = spice(str, i, 1);
                                i--;
                        }
                }
                if (changeTo === "upper") {
                        for (let i = 0; i < str.length; i++) {
                                str = spice(str, i, 1, str[i].toUpperCase());
                        }
                } else {
                        for (let i = 0; i < str.length; i++) {
                                str = spice(str, i, 1, str[i].toLowerCase());
                        }
                }
        }
        return str;
}
// console.log(changeCase("-Example_string-with all-_ CASES__", "camel"));
// console.log(changeCase("-Example_string-with all-_ CASES__", "pascal"));
// console.log(changeCase("-Example_string-with all-_ CASES__", "snake"));
// console.log(changeCase("-Example_string-with all-_ CASES__", "kebab"));
// console.log(changeCase("-Example_string-with all-_ CASES__", "scream"));
// console.log(changeCase("-Example_string-with all-_ CASES__", "upper"));
// console.log(changeCase("-Example_string-with all-_ CASES__", "lower"));

/**
 * removes a character at the index given.
 * @param {string} str
 * @param {number} index
 * @returns {string}
 */
export function rmCharAt(str, index) {
        return str.slice(0, index) + str.slice(index + 1);
}

/**
 * splice for strings
 * @param {string} string
 * @param {number} start
 * @param {number} deleteCount
 * @param {string} insertString
 * @returns {string}
 */
export function spice(string, start, deleteCount, insertString) {
        return string.slice(0, start) + (insertString || "") + string.slice(start + (deleteCount || 0));
}

export function toUpper(string, start, deleteCount, insertString) {
        return string.slice(0, start) + (insertString || "") + string.slice(start + (deleteCount || 0));
}

/**
 * adds strToAdd to str at index.
 * @param {string} str
 * @param {string} strToAdd
 * @param {number} index
 * @returns {string}
 */
export function addCharAt(str, strToAdd, index) {
        return str.slice(0, index) + strToAdd + str.slice(index);
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
 * @param {string} querySelectorAll
 * @returns {HTMLElement}
 */
export function $$(querySelectorAll) {
        return document.querySelectorAll(querySelectorAll);
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

export function diffBetweenTwoArraysSLOWEST(arr1, arr2) {
        let set1 = new Set(arr1);
        let set2 = new Set(arr2);
        let diff = [];
        for (let i = 0; i < arr2.length; i++) {
                if (!set1.has(arr2[i])) {
                        diff.push(arr2[i]);
                }
        }
        for (let i = 0; i < arr1.length; i++) {
                if (!set2.has(arr1[i])) {
                        diff.push(arr1[i]);
                }
        }
        return [...new Set(diff)];
}

/**
 *
 * @param {array} arr1
 * @param {array} arr2
 * @returns
 */
export function diffBetweenTwoArraysLOWRANGE(arr1, arr2) {
        let set = new Set(arr2);
        let diff = [];

        for (let i = 0; i < arr1.length; i++) {
                if (!set.has(arr1[i])) {
                        diff.push(arr1[i]);
                } else {
                        set.delete(arr1[i]);
                }
        }
        diff = diff.concat(...set.values());

        return diff;
}

/**
 * (arrayDiff doesnt count duplicated elements as diff).
 * returns a array containing all values that array1 has and array2 doesnt and array2 has and array1 doesnt.
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>}
 * @example
 * let arr1 = [1, 2, 3, 0];
 * let arr2 = [1, 4, 3, 5, 2];
 * arrayDiff(arr1, arr2); // returns [0, 4, 5]
 */
export function arrayDiff(arr1, arr2) {
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
 * @param {Array<any>} array
 * @returns {Array<any>}
 * @example
 * let array = [1, 2, 2, 3];
 * rmDuplicate(array); // returns [1, 2, 3]
 */
export function rmDuplicate(array) {
        return [...new Set(array)];
}

/**
 * returns the DOM element that matches the given querySelector and id, or returns undefined if it doesnt find a match.
 * @param {string} querySelectorAll
 * @param {string} id
 * @returns {HTMLElement|undefined}
 */
export function $$byId(querySelectorAll, id) {
        let elems = document.querySelectorAll(querySelectorAll);

        for (let i = 0; i < elems.length; i++) {
                if (elems[i].id === id) {
                        return elems[i];
                }
        }
        return undefined;
}

/**
 * returns a object containing elements that matched the given querySelectorAll and idsArray, or returns undefined if it doesnt find a match.
 * @param {string} querySelectorAll
 * @param {Array<number>} idsArray
 * @returns {object|undefined}
 */
export function $$byIds(querySelectorAll, idsArray) {
        let elements = {};
        document.querySelectorAll(querySelectorAll).forEach((elem) => {
                for (let i = 0; i < idsArray.length; i++) {
                        if (elem.id === idsArray[i]) {
                                elements[idsArray[i]] = elem;
                        }
                }
        });
        if (Object.keys(elements).length === 0) return undefined;
        return elements;
}

/**
 * Applies the given CSS rules to the specified element(s).
 * (enter valid css like examples and dont put unnecessary semicolons like ";;")
 * @param {string} cssRulesString - The CSS rules to apply.
 * @param {(HTMLElement|HTMLElement[])} elementsArray - The element(s) to apply the CSS rules to.
 * @example
 * // Apply CSS rules to a single element
 * const element = document.getElementById("myElement");
 * cssToElements("color: red; font-size: 16px;", element);
 *
 * // Apply CSS rules to an array of elements
 * const elements = document.querySelectorAll(".myClass");
 * cssToElements("background-color: yellow; border: 1px solid black;", elements);
 */
export function cssToElements(cssRulesString, elementsArray) {
        const elements = [].concat(elementsArray);

        for (let i = 0; i < elements.length; i++) {
                let style = elements[i].style.cssText + cssRulesString;
                style = style.split(/[:;]/g).filter((v) => v != "");
                
                for (let i = 0; i < style.length; i += 2) {
                        style[i] = style[i].trim();
                }
                for (let i = 0; i < style.length; i++) {
                        if (i % 2 === 1) continue;
                        for (let j = i + 2; j < style.length; j++) {
                                if (style[i] === style[j]) {
                                        style.splice(i, 2);
                                        i--;
                                        break;
                                }
                        }
                }
                for (let i = 0; i < style.length; i++) {
                        if (i % 2 === 0) {
                                style[i] += ":";
                        } else {
                                style[i] += ";";
                        }
                }
                
                style = style.join("");
                elements[i].style.cssText = style;
        }
}

// ========================================
// TEST
// let elems = getElementsByIds();
// cssToElements("width: 500px; height: 100px; background-color: red;", elems["child"]);
// let inter;
// let times = 0;
// inter = setInterval(() => {
//         if (times > 8) {
//                 clearInterval(inter);
//         }
//         if (times % 2 === 0) {
//                 cssToElements("background-color: white", elems["child"]);
//         } else {
//                 cssToElements("background-color: red; border: 1px solid green", elems["child"]);
//         }
//         times++;
// }, 1000);
// let doc = getElementsByIds();
// console.log(doc);

// doc.passwordGenerator.style.width = "100px";
// doc.passwordGenerator.style.height = "100px";
// doc.passwordGenerator.style.backgroundColor = "red";

// createAndAppendElement("div", { id: "foo" }, document.body);
// doc = getElementsByIds();
// console.log(doc);

// console.log(kebabToCamel("child-two"));

// let xLS = localStorage.getItem("x");
// let x;
// x = xLS || "default_value";

// let ls = {
//         x: "default_value",
//         y: "bluh",
//         z: "goo",
//         a: "far",
// };

// lsGetAll(ls);
// console.log(`ls: ${JSON.stringify(ls)}`);
// console.log(localStorage);
// console.log(lsGet("x"));
// lsSet("x", "blue", ls);
// console.log(ls);
// console.log(localStorage);
// console.log(lsGet("x"));

// localStorage.setItem("x", "value");
// x = "value";
// console.log($$byIds(".container", ["ss", "two", "one"]));
// console.log($$byIds(".container", ["one"]));
// console.log($$byId(".container", "two"));
// console.log($$byId(".container", "one"));
// console.log($$byId(".container", "i", "id"));
// ========================================
