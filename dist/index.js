"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDisplay = exports.displayNone = exports.displayBlock = exports.deepCopy = exports.cssToElementsAdd = exports.cssToElementsReplace = exports.cssToElements = exports.$$byIds = exports.rmDuplicate = exports.arrayDiff = exports.rgbToHex = exports.arrayToRgb = exports.betweenTwoColor = exports.rgbToArray = exports.random = exports.isFirstChild = exports.isLastChild = exports.tolowercase = exports.$$ = exports.$ = exports.byId = exports.rmAllElemsBy$$ = exports.switchClass = exports.addClasses = exports.rmClasses = exports.lsGet = exports.lsSet = exports.lsSetAll = exports.lsGetAll = exports.addCharAt = exports.spice = exports.rmCharAt = exports.changeCase = exports.kebabToCamel = exports.createAndAppendElement = exports.getElementsByIds = void 0;
/**
 * Returns an object containing all elements with an `id` attribute in the document, with keys converted to camelCase.
 * @returns {object} An object containing all elements with an `id` attribute in the document, with keys converted to camelCase.
 * @requires {@link kebabToCamel}
 */
function getElementsByIds() {
    let elementsById = {};
    let allElements = document.querySelectorAll("*");
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].id != null && allElements[i].id !== "") {
            elementsById[kebabToCamel(allElements[i].id)] = allElements[i];
        }
    }
    return elementsById;
}
exports.getElementsByIds = getElementsByIds;
/**
 * Creates a new element with the specified tag name and attributes, and appends it to the provided parent element.
 * @param {string} tagName - The tag name of the element to create.
 * @param {object} attributes - An object containing the attributes to set on the new element.
 * @param {HTMLElement} parentElem - The parent element to append the new element to.
 * @returns {void}
 */
function createAndAppendElement(tagName, attributes, parentElem) {
    const newElem = document.createElement(tagName);
    for (const attr in attributes) {
        newElem.setAttribute(attr, attributes[attr]);
    }
    parentElem.appendChild(newElem);
}
exports.createAndAppendElement = createAndAppendElement;
/**
 * Converts a string from kebab-case to camelCase.
 * @param {string} str - The string to convert.
 * @returns {string} The converted string in camelCase.
 */
function kebabToCamel(str) {
    let spliced = str.split("");
    for (let i = 0; i < spliced.length; i++) {
        if (spliced[i] === "-" && spliced[i + 1] != null) {
            spliced[i + 1] = spliced[i + 1].toUpperCase();
            spliced.splice(i, 1);
            i--;
        }
    }
    return spliced.join("");
}
exports.kebabToCamel = kebabToCamel;
function changeCase(string, changeTo) {
    let arr = string.split("");
    if (changeTo === "camel" || changeTo === "pascal") {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "-" || arr[i] === "_" || arr[i] === " ") {
                arr.splice(i, 1);
                arr[i] = arr[i].toUpperCase();
            }
            else {
                arr[i] = arr[i].toLowerCase();
            }
        }
        if (changeTo === "camel") {
            arr[0] = arr[0].toLowerCase();
        }
        else {
            arr[0] = arr[0].toUpperCase();
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "-" || arr[i] === "_" || arr[i] === " ") {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    else if (changeTo === "snake" || changeTo === "kebab" || changeTo === "scream") {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "-" || arr[i] === "_" || arr[i] === " ") {
                if (changeTo === "snake" || changeTo === "scream") {
                    arr[i] = "_";
                }
                else {
                    arr[i] = "-";
                }
            }
            else if (arr[i] === arr[i].toUpperCase() && arr[i + 1] != null && arr[i + 1] !== arr[i + 1].toUpperCase()) {
                arr[i] = arr[i].toLowerCase();
                if (changeTo === "snake" || changeTo === "scream") {
                    arr.splice(i, 0, "_");
                }
                else {
                    arr.splice(i, 0, "-");
                }
                i++;
            }
            else {
                arr[i] = arr[i].toLowerCase();
            }
        }
        for (let i = 0; i < arr.length - 1; i++) {
            if ((arr[i] === "_" && (arr[i + 1] === "_" || arr[i + 1] === "-")) || (arr[i] === "-" && (arr[i + 1] === "_" || arr[i + 1] === "-"))) {
                arr.splice(i, 1);
                i--;
            }
        }
        if (changeTo === "scream") {
            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].toUpperCase();
            }
        }
    }
    else if (changeTo === "upper" || changeTo === "lower") {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "-" || arr[i] === "_" || arr[i] === " ") {
                arr.splice(i, 1);
                i--;
            }
        }
        if (changeTo === "upper") {
            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].toUpperCase();
            }
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].toLowerCase();
            }
        }
    }
    return arr.join("");
}
exports.changeCase = changeCase;
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
function rmCharAt(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
}
exports.rmCharAt = rmCharAt;
/**
 * splice for strings
 * @param {string} string
 * @param {number} start
 * @param {number} deleteCount
 * @param {string} insertString
 * @returns {string}
 */
function spice(string, start, deleteCount, insertString) {
    return string.slice(0, start) + (insertString || "") + string.slice(start + (deleteCount || 0));
}
exports.spice = spice;
/**
 * adds strToAdd to str at index.
 * @param {string} str
 * @param {string} strToAdd
 * @param {number} index
 * @returns {string}
 */
function addCharAt(str, strToAdd, index) {
    return str.slice(0, index) + strToAdd + str.slice(index);
}
exports.addCharAt = addCharAt;
/**
 * Retrieves all items from local storage and updates the values in the provided object.
 * @param {object} lsItems - The object containing key-value pairs to be updated.
 * @returns {object} The `lsItems` object with updated values (if any).
 */
function lsGetAll(lsItems) {
    for (const key in lsItems) {
        lsItems[key] = localStorage.getItem(key) || lsItems[key];
    }
}
exports.lsGetAll = lsGetAll;
/**
 * Sets all key-value pairs in the provided object to the localStorage.
 * @param {object} lsItems - An object containing key-value pairs to be set in localStorage.
 * @returns {void}
 */
function lsSetAll(lsItems) {
    for (const key in lsItems) {
        localStorage.setItem(key, lsItems[key]);
    }
}
exports.lsSetAll = lsSetAll;
/**
 * Sets a key-value pair to the localStorage and updates the provided object `lsItems` with the same key-value pair.
 * If the provided object `lsItems` is not null, it will be updated with the new key-value pair.
 * @param {string} lsKey - The key to set in localStorage.
 * @param {string} lsVal - The value to set in localStorage.
 * @param {object|undefined} lsItems - An object containing key-value pairs to be updated with the new key-value pair.
 * @returns {void}
 */
function lsSet(lsKey, lsVal, lsItems) {
    localStorage.setItem(lsKey, lsVal);
    if (lsItems != null) {
        lsItems[lsKey] = lsVal;
    }
}
exports.lsSet = lsSet;
/**
 * Gets the value associated with the provided key from localStorage.
 * @param {string} lsKey - The key to retrieve from localStorage.
 * @returns {string|null} - The value associated with the provided key, or null if the key is not found in localStorage.
 */
function lsGet(lsKey) {
    return localStorage.getItem(lsKey);
}
exports.lsGet = lsGet;
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
function rmClasses(elements, classesToRemove) {
    const classes = Array.isArray(classesToRemove) ? classesToRemove : [classesToRemove];
    const elems = Array.isArray(elements) ? elements : [elements];
    for (let i = 0; i < elems.length; i++) {
        for (let j = 0; j < classes.length; j++) {
            if (elems[i].classList.contains(classes[j])) {
                elems[i].classList.remove(classes[j]);
            }
        }
    }
}
exports.rmClasses = rmClasses;
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
function addClasses(elements, classesToAdd) {
    const classes = Array.isArray(classesToAdd) ? classesToAdd : [classesToAdd];
    const elems = Array.isArray(elements) ? elements : [elements];
    for (let i = 0; i < elems.length; i++) {
        for (let j = 0; j < classes.length; j++) {
            elems[i].classList.add(classes[j]);
        }
    }
}
exports.addClasses = addClasses;
/**
 * removes class of a given array of HTMLElements or one HTMLElement.
 * and adds class to every HTMLElement.
 * @param {Array<HTMLElement> | HTMLElement} elements
 * @param {string} classToRemove
 * @param {string} classToAdd
 * @returns {void}
 */
function switchClass(elements, classToRemove, classToAdd) {
    const elems = Array.isArray(elements) ? elements : [elements];
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].classList.contains(classToRemove)) {
            elems[i].classList.remove(classToRemove);
        }
        elems[i].classList.add(classToAdd);
    }
}
exports.switchClass = switchClass;
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
function rmAllElemsBy$$(querySelectorAll) {
    let allOccur = document.querySelectorAll(querySelectorAll);
    for (let i = 0; i < allOccur.length; i++) {
        allOccur[i].remove();
    }
}
exports.rmAllElemsBy$$ = rmAllElemsBy$$;
/**
 * short version of getElementById
 * @param {string} id
 * @returns {HTMLElement}
 */
function byId(id) {
    return document.getElementById(id);
}
exports.byId = byId;
/**
 * querySelector
 * @param {string} querySelector
 * @returns {HTMLElement}
 */
function $(querySelector) {
    return document.querySelector(querySelector);
}
exports.$ = $;
/**
 * querySelectorAll
 * @param {string} querySelectorAll
 * @returns {HTMLElement}
 */
function $$(querySelectorAll) {
    return document.querySelectorAll(querySelectorAll);
}
exports.$$ = $$;
/**
 * toLowerCase but better
 * @param {string} str
 * @returns {string}
 */
function tolowercase(str) {
    if (str === " ")
        return " ";
    if (str == null)
        return " ";
    return str.toLowerCase();
}
exports.tolowercase = tolowercase;
/**
 * check if a element isLastChild
 * @param {HTMLElement} el
 * @returns {boolean}
 */
function isLastChild(el) {
    if (el.parentNode === null)
        return false;
    return el === el.parentNode.children[el.parentNode.children.length - 1];
}
exports.isLastChild = isLastChild;
/**
 * check if a element isFirstChild
 * @param {HTMLElement} el
 * @returns {boolean}
 */
function isFirstChild(el) {
    if (el.parentNode === null)
        return false;
    return el === el.parentNode.children[0];
}
exports.isFirstChild = isFirstChild;
/**
 * `0 <= random <= n - 1`
 * @param {number} n
 * @returns {number}
 */
function random(n) {
    return Math.floor(Math.random() * n);
}
exports.random = random;
/**
 * turns string of rgb to array containing rgb values `[r, g, b]`
 * @param {string} string - rgb representaion of a color
 * @returns {Array<number>}
 * @example rgbToArray("rgb(189, 22, 89)") // [189, 22, 89]
 */
function rgbToArray(string) {
    var _a;
    const str = (_a = string.match(/\d+/g)) !== null && _a !== void 0 ? _a : [];
    return str.map(Number);
}
exports.rgbToArray = rgbToArray;
/**
 *
 * @param {Array<number>} color1
 * @param {Array<number>} color2
 * @param {number} percent
 * @returns {Array<number>}
 */
function betweenTwoColor(color1, color2, percent) {
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
exports.betweenTwoColor = betweenTwoColor;
/**
 * turns array containing rgb values to string `"rgb(r, g, b)"`
 * @param {Array<number>} arr
 * @returns {string}
 * @example arrayToRgb([222, 45, 88]); // "rgb(222, 45, 88)"
 */
function arrayToRgb(arr) {
    return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
}
exports.arrayToRgb = arrayToRgb;
/**
 * turns rgb array to hex string
 * @param {Array<number>} array
 * @returns {string}
 * @example rgbToHex([68, 419, 0]); // #44ff00
 */
function rgbToHex(array) {
    return "#" + ((1 << 24) + (array[0] << 16) + (array[1] << 8) + array[2]).toString(16).slice(1);
}
exports.rgbToHex = rgbToHex;
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
function arrayDiff(arr1, arr2) {
    let set = new Set(arr2);
    let diff = [];
    for (let i = 0; i < arr1.length; i++) {
        if (set.has(arr1[i])) {
            set.delete(arr1[i]);
        }
        else {
            diff.push(arr1[i]);
        }
    }
    for (let i of set) {
        diff.push(i);
    }
    return diff;
}
exports.arrayDiff = arrayDiff;
/**
 * removes duplicated values from an array.
 * @param {Array<any>} array
 * @returns {Array<any>}
 * @example
 * let array = [1, 2, 2, 3];
 * rmDuplicate(array); // returns [1, 2, 3]
 */
function rmDuplicate(array) {
    return [...new Set(array)];
}
exports.rmDuplicate = rmDuplicate;
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
function $$byIds(querySelectorAll, ids) {
    const elements = {};
    const idsArray = Array.isArray(ids) ? ids : [ids];
    document.querySelectorAll(querySelectorAll).forEach((elem) => {
        for (let i = 0; i < idsArray.length; i++) {
            if (elem.id === idsArray[i]) {
                elements[idsArray[i]] = elem;
            }
        }
    });
    if (Object.keys(elements).length === 0)
        return undefined;
    return elements;
}
exports.$$byIds = $$byIds;
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
function cssToElements(cssRulesString, elementsArray) {
    const elements = Array.isArray(elementsArray) ? elementsArray : [elementsArray];
    for (let i = 0; i < elements.length; i++) {
        let styleString = elements[i].style.cssText + cssRulesString;
        let style = styleString.split(/[:;]/g).filter((v) => v != "");
        for (let i = 0; i < style.length; i += 2) {
            style[i] = style[i].trim();
        }
        for (let i = 0; i < style.length; i++) {
            if (i % 2 === 1)
                continue;
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
            }
            else {
                style[i] += ";";
            }
        }
        elements[i].style.cssText = style.join("");
    }
}
exports.cssToElements = cssToElements;
/**
 * Replaces the CSS rules for the specified array of elements with the given CSS rule string.
 *
 * @param {string} cssRulesString - The CSS rule string to be applied to the elements.
 * @param {Array<HTMLElement>| HTMLElement} elementsArray - The array of HTML elements to be updated with the new CSS rules.
 */
function cssToElementsReplace(cssRulesString, elementsArray) {
    const elements = Array.isArray(elementsArray) ? elementsArray : [elementsArray];
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.cssText = cssRulesString;
    }
}
exports.cssToElementsReplace = cssToElementsReplace;
/**
 * Adds the given CSS rule string to the existing CSS rules for the specified array of elements.
 *
 * @param {string} cssRulesString - The CSS rule string to be added to the elements' existing CSS rules.
 * @param {Array<HTMLElement> | HTMLElement} elementsArray - The array of HTML elements to be updated with the new CSS rules.
 */
function cssToElementsAdd(cssRulesString, elementsArray) {
    const elements = Array.isArray(elementsArray) ? elementsArray : [elementsArray];
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.cssText += cssRulesString;
    }
}
exports.cssToElementsAdd = cssToElementsAdd;
/**
 * Creates a deep copy of the given object or array using JSON serialization and deserialization.
 * @param {object|array} source - The object or array to copy.
 * @returns {object|array} A new object or array with the same properties and values as the source.
 */
function deepCopy(source) {
    return JSON.parse(JSON.stringify(source));
}
exports.deepCopy = deepCopy;
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
function displayBlock(elements) {
    const elems = Array.isArray(elements) ? elements : [elements];
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.display = "block";
    }
}
exports.displayBlock = displayBlock;
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
function displayNone(elements) {
    const elems = Array.isArray(elements) ? elements : [elements];
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.display = "none";
    }
}
exports.displayNone = displayNone;
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
function setDisplay(elements, displayString) {
    const elems = Array.isArray(elements) ? elements : [elements];
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.display = displayString;
    }
}
exports.setDisplay = setDisplay;
