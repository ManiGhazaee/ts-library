/**
 * Returns an object containing all elements with an `id` attribute in the document, with keys converted to camelCase.
 * @requires {@link kebabToCamel}
 */
export function getElementsByIds(): object {
        let elementsById: { [key: string]: Element } = {};
        let allElements: NodeListOf<Element> = document.querySelectorAll("*");
        for (let i = 0; i < allElements.length; i++) {
                if (allElements[i].id != null && allElements[i].id !== "") {
                        elementsById[kebabToCamel(allElements[i].id)] = allElements[i];
                }
        }
        return elementsById;
}

/**
 * Converts a string from kebab-case to camelCase.
 */
export function kebabToCamel(str: string): string {
        let spliced: string[] = str.split("");
        for (let i = 0; i < spliced.length; i++) {
                if (spliced[i] === "-" && spliced[i + 1] != null) {
                        spliced[i + 1] = spliced[i + 1].toUpperCase();
                        spliced.splice(i, 1);
                        i--;
                }
        }
        return spliced.join("");
}

/**
 * Creates a new element with the specified tag name and attributes, and appends it to the provided parent element.
 */
export function createAndAppendElement(tagName: string, attributes: { [key: string]: string }, parentElem: Element): void {
        const newElem = document.createElement(tagName);
        for (const attr in attributes) {
                newElem.setAttribute(attr, attributes[attr]);
        }
        parentElem.appendChild(newElem);
}

/**
 * Removes one or more classes from one or more elements in the DOM.
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
export function rmClass(elements: Array<Element> | Element, classesToRemove: string | string[]): void {
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

/**
 * Adds one or more classes to one or more elements in the DOM.
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
export function addClass(elements: Array<Element> | Element, classesToAdd: string | string[]) {
        const classes = Array.isArray(classesToAdd) ? classesToAdd : [classesToAdd];
        const elems = Array.isArray(elements) ? elements : [elements];

        for (let i = 0; i < elems.length; i++) {
                for (let j = 0; j < classes.length; j++) {
                        elems[i].classList.add(classes[j]);
                }
        }
}

/**
 * removes class of a given array of HTMLElements or one HTMLElement.
 * and adds class to every HTMLElement.
 */
export function switchClass(elements: Array<HTMLElement> | HTMLElement, classToRemove: string, classToAdd: string): void {
        const elems = Array.isArray(elements) ? elements : [elements];

        for (let i = 0; i < elems.length; i++) {
                if (elems[i].classList.contains(classToRemove)) {
                        elems[i].classList.remove(classToRemove);
                }
                elems[i].classList.add(classToAdd);
        }
}

/**
 * checks if an element has a class.
 */
export function hasClass(elements: HTMLElement, classNmaes: string): boolean;
export function hasClass(elements: HTMLElement[], classNmaes: string): boolean[];
export function hasClass(elements: HTMLElement, classNmaes: string[]): boolean[];
export function hasClass(elements: HTMLElement[], classNmaes: string[]): boolean[][];
export function hasClass(elements: HTMLElement[] | HTMLElement, classNames: string[] | string): boolean | boolean[] | boolean[][] {
        const elems = Array.isArray(elements) ? elements : [elements];
        const classNameArr = Array.isArray(classNames) ? classNames : [classNames];

        let result: boolean[][] = [];

        for (let i = 0; i < elems.length; i++) {
                let arr = [];
                for (let j = 0; j < classNameArr.length; j++) {
                        let bool: boolean;
                        if (elems[i].classList) bool = elems[i].classList.contains(classNameArr[j]);
                        else bool = new RegExp("(^| )" + classNameArr[j] + "( |$)", "gi").test(elems[i].className);

                        arr.push(bool);
                }
                result.push(arr);
        }
        if (result.length === 1) {
                return result[0];
        } else if (result[0].length === 1) {
                return result.flat();
        } else return result;
}

/**
 * Removes all elements from the DOM that match a given CSS selector.
 *
 * @example
 *
 * // Remove all elements with class "example"
 * rmAllElemsBy$$('.example');
 */
export function rmAllElemsBy$$(querySelectorAll: string): void {
        let allOccur = document.querySelectorAll(querySelectorAll);
        for (let i = 0; i < allOccur.length; i++) {
                allOccur[i].remove();
        }
}

/**
 * short version of getElementById
 */
export function byId(id: string): HTMLElement | null {
        return document.getElementById(id);
}
export function byClassName(className: string): HTMLCollectionOf<HTMLElement> {
        return document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>;
}

/**
 * querySelector
 */
export function $(querySelector: string): HTMLElement | null {
        return document.querySelector(querySelector) as HTMLElement;
}

/**
 * querySelectorAll
 */
export function $$(querySelectorAll: string) {
        return Array.from(document.querySelectorAll(querySelectorAll) as NodeListOf<HTMLElement>);
}
/**
 * Retrieves all items from local storage and updates the values in the provided object.
 */
export function lsGetAll(lsItems: { [key: string]: string }): void {
        for (const key in lsItems) {
                lsItems[key] = localStorage.getItem(key) || lsItems[key];
        }
}

/**
 * Sets all key-value pairs in the provided object to the localStorage.
 */
export function lsSetAll(lsItems: { [key: string]: string }): void {
        for (const key in lsItems) {
                localStorage.setItem(key, lsItems[key]);
        }
}

/**
 * Sets a key-value pair to the localStorage.
 */
export function lsSet(lsKey: string, lsVal: string): void {
        localStorage.setItem(lsKey, lsVal);
}

/**
 * Gets the value associated with the provided key from localStorage.
 */
export function lsGet(lsKey: string): string | null {
        return localStorage.getItem(lsKey);
}

/**
 * check if a element isLastChild
 */
export function isLastChild(el: HTMLElement): boolean {
        return el.parentNode === null ? false : el === el.parentNode.children[el.parentNode.children.length - 1];
}

/**
 * check if a element isFirstChild
 */
export function isFirstChild(el: HTMLElement): boolean {
        return el.parentNode === null ? false : el === el.parentNode.children[0];
}
/**
 * Applies the given CSS rules to the specified element(s). without removing or duplicating old cssText.
 * (enter valid css like examples and dont put unnecessary semicolons like ";;")
 * @example
 * // Apply CSS rules to a single element
 * const element = document.getElementById("myElement");
 * cssToElements("color: red; font-size: 16px;", element);
 *
 * // Apply CSS rules to an array of elements
 * const elements = document.querySelectorAll(".myClass");
 * cssToElements("background-color: yellow; border: 1px solid black;", elements);
 */
export function cssToElements(cssRulesString: string, elementsArray: HTMLElement | HTMLElement[]): void {
        const elements = Array.isArray(elementsArray) ? elementsArray : [elementsArray];

        for (let i = 0; i < elements.length; i++) {
                let styleString = elements[i].style.cssText + cssRulesString;
                let style = styleString.split(/[:;]/g).filter((v) => v != "");

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

                elements[i].style.cssText = style.join("");
        }
}

/**
 * Replaces the CSS rules for the specified array of elements with the given CSS rule string.
 */
export function cssToElementsReplace(cssRulesString: string, elementsArray: HTMLElement | HTMLElement[]): void {
        const elements = Array.isArray(elementsArray) ? elementsArray : [elementsArray];
        for (let i = 0; i < elements.length; i++) {
                elements[i].style.cssText = cssRulesString;
        }
}

/**
 * Adds the given CSS rule string to the existing CSS rules for the specified array of elements.
 */
export function cssToElementsAdd(cssRulesString: string, elementsArray: HTMLElement | HTMLElement[]) {
        const elements = Array.isArray(elementsArray) ? elementsArray : [elementsArray];
        for (let i = 0; i < elements.length; i++) {
                elements[i].style.cssText += cssRulesString;
        }
}

/**
 * Sets the display property of one or more HTML elements to "block".
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
export function displayBlock(elements: HTMLElement[] | HTMLElement): void {
        const elems = Array.isArray(elements) ? elements : [elements];
        for (let i = 0; i < elems.length; i++) {
                elems[i].style.display = "block";
        }
}

/**
 * Sets the display property of one or more HTML elements to "none".
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
export function displayNone(elements: HTMLElement | HTMLElement[]): void {
        const elems = Array.isArray(elements) ? elements : [elements];
        for (let i = 0; i < elems.length; i++) {
                elems[i].style.display = "none";
        }
}

/**
 * Sets the display property of one or more HTML elements to a specified value.
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
export function setDisplay(elements: HTMLElement | HTMLElement[], displayString: string): void {
        const elems = Array.isArray(elements) ? elements : [elements];
        for (let i = 0; i < elems.length; i++) {
                elems[i].style.display = displayString;
        }
}
/**
 * sets opacity of 1 to a element or elements.
 */
export function opacity_1(elements: HTMLElement | HTMLElement[]) {
        const elems = Array.isArray(elements) ? elements : [elements];
        for (let i = 0; i < elems.length; i++) {
                elems[i].style.opacity = "1";
        }
}

/**
 * sets opacity of 0 to a element or elements.
 */
export function opacity_0(elements: HTMLElement | HTMLElement[]) {
        const elems = Array.isArray(elements) ? elements : [elements];
        for (let i = 0; i < elems.length; i++) {
                elems[i].style.opacity = "0";
        }
}
/**
 * checks if element's display is set to block.
 * `element.style.display === "block"`
 */
export function isBlock(element: HTMLElement) {
        return element.style.display === "block";
}

/**
 * checks if element's display is set to none.
 * `element.style.display === "none"`
 */
export function isNone(element: HTMLElement) {
        return element.style.display === "none";
}

/**
 * function to get all siblings of given element or elements
 */
export function getSiblings(elements: Element | Element[]) {
        const elems = Array.isArray(elements) ? elements : [elements];
        let result = [];

        for (let i = 0; i < elems.length; i++) {
                let parent = elems[i].parentNode;

                if (parent !== null) {
                        let siblings = Array.from(parent.children).filter((child) => {
                                child !== elements;
                        });
                        if (siblings.length === 0) {
                                result.push(null);
                        } else if (siblings.length === 1) {
                                result.push(siblings[0]);
                        } else {
                                result.push(siblings);
                        }
                }
        }

        if (result.length === 1 && result[0] === null) {
                return null;
        }
        return result;
}

/**
 * function to check if element is instanceof HTMLElement
 */
export function isHTMLElement(element: unknown): element is HTMLElement {
        return element instanceof HTMLElement;
}
