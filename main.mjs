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

//these four functions below are not exported because the changeCase function combains them
/**
 * changes a string to a camelcase or pascal case
 * @param {string} str - The string to convert 
 * @param {*} changeTo - The case formatter to use
 * @returns a formatted string
 */
function toCamelOrPascalCase(str, changeTo) {
        let result = str.split(/[-_ ]+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
        return changeTo === 'camel' ? result.charAt(0).toLowerCase() + result.slice(1) : result;
}

/**
 * 
 * @param {string} str - the string to convert
 * @param {string} changeTo - The case formatter to use
 * @returns a formatted string
 */
function toSnakeOrKebabOrScreamCase(str, changeTo) {
        let separator = changeTo === 'kebab' ? '-' : '_';
        let result = str.split(/[-_ ]+/).join(separator);
        if (changeTo === 'scream') {
                result = result.toUpperCase();
        }
        return result;
}

/**
 * 
 * @param {string} str - the string to convert
 * @param {string} changeTo - the case formatter to use
 * @returns a formatter string 
 */
function toUpperOrLowerCase(str, changeTo) {
        let result = str.replace(/[-_ ]+/g, '');
        return changeTo === 'upper' ? result.toUpperCase() : result.toLowerCase();
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
export function changeCase(str, changeTo) {
        switch (changeTo) {
                case 'camel':
                case 'pascal':
                        return toCamelOrPascalCase(str, changeTo);
                case 'snake':
                case 'kebab':
                case 'scream':
                        return toSnakeOrKebabOrScreamCase(str, changeTo);
                case 'upper':
                case 'lower':
                        return toUpperOrLowerCase(str, changeTo);
                default:
                        throw new Error(`Invalid case: ${changeTo}`);
        }
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
 * Removes one or more classes from one or more elements in the DOM.
 *
 * @param {Array<Element>|Element} elements - The element(s) to remove classes from.
 * @param {string|string[]} classesToRemove - The class(es) to remove from the element(s).
 *
 * @example
 *
 * // Remove class "example" from all elements with class "container"
 * const containers = document.querySelectorAll('.container');
 * rmClasses(containers, 'example');
 *
 * // Remove classes "class1" and "class2" from a single element
 * const elem = document.querySelector('#my-element');
 * rmClasses(elem, ['class1', 'class2']);
 */
export function rmClasses(elements, classesToRemove) {
        const classes = [].concat(classesToRemove);
        const elems = [].concat(elements);
        for (let i = 0; i < elems.length; i++) {
                for (let j = 0; j < classes.length; j++) {
                        if (elems[i].classList.contains(classes[j])) {
                                elems[i].classList.remove(classes[j]);
                        }
                }
        }
}

/**
 * Adds one or more classes to one or more elements in the DOM.
 *
 * @param {Array<Element>|Element} elements - The element(s) to add classes to.
 * @param {string|string[]} classesToAdd - The class(es) to add to the element(s).
 *
 * @example
 *
 * // Add class "example" to all elements with class "container"
 * const containers = document.querySelectorAll('.container');
 * addClasses(containers, 'example');
 *
 * // Add classes "class1" and "class2" to a single element
 * const elem = document.querySelector('#my-element');
 * addClasses(elem, ['class1', 'class2']);
 */
export function addClasses(elements, classesToAdd) {
        const classes = [].concat(classesToAdd);
        const elems = [].concat(elements);
        for (let i = 0; i < elems.length; i++) {
                for (let j = 0; j < classes.length; j++) {
                        elems[i].classList.add(classes[j]);
                }
        }
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
 * Removes all elements from the DOM that match a given CSS selector.
 *
 * @param {string} querySelectorAll - The CSS selector to match elements to be removed.
 *
 * @example
 *
 * // Remove all elements with class "example"
 * rmAllElemsBy$$('.example');
 */
export function rmAllElemsBy$$(querySelectorAll) {
        let allOccur = document.querySelectorAll(querySelectorAll);
        for (let i = 0; i < allOccur.length; i++) {
                allOccur[i].remove();
        }
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
 * Returns an object containing elements with the given ID(s) that match a CSS selector.
 *
 * @param {string} querySelectorAll - The CSS selector to match elements.
 * @param {string|string[]} ids - The ID(s) of the element(s) to return.
 *
 * @returns {object|undefined} - An object containing the element(s) with the given ID(s), or undefined if no matching elements are found.
 *
 * @example
 *
 * // Get an object containing elements with IDs "elem1" and "elem2"
 * const elems = $$byIds('.example', ['elem1', 'elem2']);
 *
 * // Use the returned object to manipulate the elements
 * elems.elem1.classList.add('active');
 * elems.elem2.innerHTML = 'New content';
 */
export function $$byIds(querySelectorAll, ids) {
        const elements = {};

        const idsArray = Array.isArray(ids) ? ids : [ids];

        const matchedElements = document.querySelectorAll(querySelectorAll);

        for (const elem of matchedElements) {
                if (idsArray.includes(elem.id)) {
                        elements[elem.id] = elem;
                }
        }

        return Object.keys(elements).length === 0 ? undefined : elements;
}

/**
 * Applies the given CSS rules to the specified element(s). without removing or duplicating old cssText.
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
        const elements = Array.isArray(elementsArray) ? elementsArray : [elementsArray];

        for (const element of elements) {
                const existingStyles = element.style.cssText;
                const combinedStyles = existingStyles + cssRulesString;

                const uniqueStyles = [...new Set(combinedStyles.split(/[:;]/g).filter(Boolean))];
                const formattedStyles = uniqueStyles.map((style, index) => (index % 2 === 0 ? style.trim() + ":" : style.trim() + ";")).join("");

                element.style.cssText = formattedStyles;
        }
}

/**
 * Replaces the CSS rules for the specified array of elements with the given CSS rule string.
 *
 * @param {string} cssRulesString - The CSS rule string to be applied to the elements.
 * @param {Array.<HTMLElement>} elementsArray - The array of HTML elements to be updated with the new CSS rules.
 */
export function cssToElementsReplace(cssRulesString, elementsArray) {
        const elements = [].concat(elementsArray);
        for (let i = 0; i < elements.length; i++) {
                elements[i].style.cssText = cssRulesString;
        }
}

/**
 * Adds the given CSS rule string to the existing CSS rules for the specified array of elements.
 *
 * @param {string} cssRulesString - The CSS rule string to be added to the elements' existing CSS rules.
 * @param {Array.<HTMLElement>} elementsArray - The array of HTML elements to be updated with the new CSS rules.
 */
export function cssToElementsAdd(cssRulesString, elementsArray) {
        const elements = [].concat(elementsArray);
        for (let i = 0; i < elements.length; i++) {
                elements[i].style.cssText += cssRulesString;
        }
}

/**
 * Creates a deep copy of the given object or array using JSON serialization and deserialization.
 * @param {object|array} source - The object or array to copy.
 * @returns {object|array} A new object or array with the same properties and values as the source.
 */
export function deepCopy(source) {
        return JSON.parse(JSON.stringify(source));
}

/**
 * Sets the display property of one or more HTML elements to "block".
 *
 * @param {HTMLElement[]|HTMLElement} elements - The HTML element(s) to modify.
 *
 * @example
 * // Set the display of all elements with class "my-element"
 * const myElements = document.querySelectorAll('.my-element');
 * displayBlock(myElements);
 *
 * // Set the display of a single element with ID "my-element"
 * const myElement = document.getElementById('my-element');
 * displayBlock(myElement);
 */
export function displayBlock(elements) {
        let elems = [].concat(elements);
        for (let i = 0; i < elems.length; i++) {
                elems[i].style.display = "block";
        }
}

/**
 * Sets the display property of one or more HTML elements to "none".
 *
 * @param {HTMLElement[]|HTMLElement} elements - The HTML element(s) to modify.
 *
 * @example
 * // Hide all elements with class "my-element"
 * const myElements = document.querySelectorAll('.my-element');
 * displayNone(myElements);
 *
 * // Hide a single element with ID "my-element"
 * const myElement = document.getElementById('my-element');
 * displayNone(myElement);
 */
export function displayNone(elements) {
        let elems = [].concat(elements);
        for (let i = 0; i < elems.length; i++) {
                elems[i].style.display = "none";
        }
}

/**
 * Sets the display property of one or more HTML elements to a specified value.
 *
 * @param {HTMLElement[]|HTMLElement} elements - The HTML element(s) to modify.
 * @param {string} displayString - The value to set the display property to.
 *
 * @example
 * // Set the display of all elements with class "my-element" to "block"
 * const myElements = document.querySelectorAll('.my-element');
 * setDisplay(myElements, 'block');
 *
 * // Hide a single element with ID "my-element"
 * const myElement = document.getElementById('my-element');
 * setDisplay(myElement, 'none');
 */
export function setDisplay(elements, displayString) {
        let elems = [].concat(elements);
        for (let i = 0; i < elems.length; i++) {
                elems[i].style.display = displayString;
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
