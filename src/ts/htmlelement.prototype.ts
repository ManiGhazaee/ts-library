export {};

declare global {
        interface HTMLElement {
                displayNone(): void;
                displayBlock(): void;
        }
}

/**
 * Sets the display property of the HTML element to "none".
 *
 * @function
 *
 * @example
 * const myElem = document.querySelector("#my-element");
 * myElem.displayNone();
 */
HTMLElement.prototype.displayNone = function () {
        this.style.display = "none";
};

/**
 * Sets the display property of the HTML element to "block".
 *
 * @function
 *
 * @example
 * const myElem = document.querySelector("#my-element");
 * myElem.displayBlock();
 */
HTMLElement.prototype.displayBlock = function () {
        this.style.display = "block";
};
