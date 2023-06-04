/**
 * A class that enables/disables dark mode on a webpage and stores the user's preference in local storage.
 * @class
 * @public
 * @example
 *  const styleElement = document.getElementById('dark-mode');
 *  const button = document.getElementById('dark-mode-button');
 *  const darkModeCss = `:root { --bg-color: black; }`;
 *  const lightModeCss = `:root { --bg-color: white; }`;
 *  const dm = new DarkMode(styleElement, button, darkModeCss, lightModeCss);
 */
export class DarkMode {
        /**
         * @constructor
         * @param {HTMLElement} styleElement - The HTML <style> element to which the CSS rules will be applied.
         * @param {HTMLElement} buttonElement - The HTML button to toggle dark mode.
         * @param {string} darkModeCssRules - The CSS rules for dark mode.
         * @param {string} lightModeCssRules - The CSS rules for light mode.
         * @param {"on"|"off"} [darkModeState="off"] - The initial state of dark mode ("on" or "off") (default = "off").
         * @param {function} [eventListenerFunction] - The function to be called when the button is clicked. Defaults to toggling dark mode.
         * @param {string} [localStorageKey="darkMode"] - The key to use for storing the user's preference in local storage (default = "darkMode").
         */
        constructor(
                styleElement,
                buttonElement,
                darkModeCssRules,
                lightModeCssRules,
                darkModeState = "off",
                eventListenerFunction = () => {
                        this.toggle();
                },
                localStorageKey = "darkMode"
        ) {
                this.styleElement = styleElement;
                this.buttonElement = buttonElement;
                this.darkModeCssRules = darkModeCssRules;
                this.lightModeCssRules = lightModeCssRules;
                this.darkModeState = darkModeState;
                this.localStorageKey = localStorageKey;
                this.eventListenerFunction = eventListenerFunction;
                this.buttonElement.addEventListener("click", this.eventListenerFunction);
                this.initFromLocalStorage();
        }

        /**
         * Enables dark mode and saves the preference to local storage.
         * @public
         */
        enableDarkMode() {
                this.styleElement.innerHTML = this.darkModeCssRules;
                this.darkModeState = "on";
                localStorage.setItem(this.localStorageKey, "on");
        }

        /**
         * Enables light mode and saves the preference to local storage.
         * @public
         */
        enableLightMode() {
                this.styleElement.innerHTML = this.lightModeCssRules;
                this.darkModeState = "off";
                localStorage.setItem(this.localStorageKey, "off");
        }

        /**
         * Toggles between dark and light mode based on the current state.
         * @public
         */
        toggle() {
                if (this.darkModeState === "on") {
                        this.enableLightMode();
                } else {
                        this.enableDarkMode();
                }
        }

        /**
         * Initializes the class with the user's preference from local storage (if available).
         * @public
         */
        initFromLocalStorage() {
                const ls = localStorage.getItem(this.localStorageKey) || this.darkModeState;
                if (ls === "on") {
                        this.enableDarkMode();
                } else {
                        this.enableLightMode();
                }
        }
}
