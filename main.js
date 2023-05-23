/**
 * Returns an object containing all elements with an `id` attribute in the document, with keys converted to camelCase.
 * @returns {object} An object containing all elements with an `id` attribute in the document, with keys converted to camelCase.
 */
function getElementsByIds() {
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
function createAndAppendElement(tagName, attributes, parentElem) {
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
function kebabToCamel(str) {
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
function lsGetAll(lsItems) {
        for (const key in lsItems) {
                lsItems[key] = localStorage.getItem(key) || lsItems[key];
        }
}

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

/**
 * Sets a key-value pair to the localStorage and updates the provided object `lsItems` with the same key-value pair.
 * If the provided object `lsItems` is not null, it will be updated with the new key-value pair.
 * @param {string} lsKey - The key to set in localStorage.
 * @param {string} lsVal - The value to set in localStorage.
 * @param {object|null} lsItems - An object containing key-value pairs to be updated with the new key-value pair.
 * @returns {void}
 */
function lsSet(lsKey, lsVal, lsItems) {
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
function lsGet(lsKey) {
        return localStorage.getItem(lsKey);
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
