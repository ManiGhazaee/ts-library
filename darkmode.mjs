/**
 * A class that enables/disables dark mode on a webpage and stores the user's preference in local storage.
 * @class
 * @public
 * @example
 *  const darkModeCss = `:root { --bg-color: black; }`;
 *  const lightModeCss = `:root { --bg-color: white; }`;
 *  const dm = new DarkMode(darkModeCss, lightModeCss);
 */
export class DarkMode {
        /**
         * Creates a new instance of the DarkMode class.
         * @constructor
         * @param {string} darkModeCssRules - The CSS rules to apply when dark mode is enabled.
         * @param {string} lightModeCssRules - The CSS rules to apply when light mode is enabled.
         * @param {function} onClickFunction - The function to call when the button is clicked. Defaults to toggling between dark and light mode.
         * @param {HTMLElement} buttonElement - The button element used to toggle between dark and light mode. Defaults to the element with ID "dark-mode-button".
         * @param {string} darkModeState - The initial state of dark mode. Defaults to "on".
         * @param {string} darkModeButtonClass - The CSS class to apply to the button when dark mode is enabled. Defaults to "dark-mode-button".
         * @param {string} lightModeButtonClass - The CSS class to apply to the button when light mode is enabled. Defaults to "light-mode-button".
         * @param {HTMLStyleElement} styleElement - The style element used to apply CSS rules for dark and light mode. Defaults to the element with ID "dark-mode-style", or creates a new one if none exists.
         * @param {string} localStorageKey - The key used to store the user's preference for dark or light mode in local storage. Defaults to "darkMode".
         */
        constructor(
                darkModeCssRules,
                lightModeCssRules,
                onClickFunction = () => {
                        this.toggle();
                },
                buttonElement,
                darkModeState = "on",
                darkModeButtonClass = "dark-mode-button",
                lightModeButtonClass = "light-mode-button",
                styleElement,
                localStorageKey = "darkMode"
        ) {
                this.styleElement = styleElement || document.getElementById("dark-mode-style");
                this.initStyleElement();
                this.buttonElement = buttonElement || document.getElementById("dark-mode-button");
                this.darkModeCssRules = darkModeCssRules;
                this.lightModeCssRules = lightModeCssRules;
                this.darkModeButtonClass = darkModeButtonClass;
                this.lightModeButtonClass = lightModeButtonClass;
                this.localStorageKey = localStorageKey;
                this.darkModeState = darkModeState;
                this.onClickFunction = onClickFunction;
                this.buttonElement.addEventListener("click", this.onClickFunction);
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
                this.styleButton();
        }

        /**
         * Enables light mode and saves the preference to local storage.
         * @public
         */
        enableLightMode() {
                this.styleElement.innerHTML = this.lightModeCssRules;
                this.darkModeState = "off";
                localStorage.setItem(this.localStorageKey, "off");
                this.styleButton();
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
                this.darkModeState = localStorage.getItem(this.localStorageKey) || this.darkModeState;
                if (this.darkModeState === "on") {
                        this.enableDarkMode();
                } else {
                        this.enableLightMode();
                }
        }

        /**
         * @public
         */
        switchToDarkModeButtonClass() {
                this.buttonElement.classList.add(this.darkModeButtonClass);
                if (this.buttonElement.classList.contains(this.lightModeButtonClass)) {
                        this.buttonElement.classList.remove(this.lightModeButtonClass);
                }
        }

        /**
         * @public
         */
        switchToLightModeButtonClass() {
                this.buttonElement.classList.add(this.lightModeButtonClass);
                if (this.buttonElement.classList.contains(this.darkModeButtonClass)) {
                        this.buttonElement.classList.remove(this.darkModeButtonClass);
                }
        }

        /**
         * @public
         */
        styleButton() {
                if (this.darkModeState === "on") {
                        this.switchToDarkModeButtonClass();
                } else {
                        this.switchToLightModeButtonClass();
                }
        }

        /**
         * @public
         */
        initStyleElement() {
                if (this.styleElement == null) {
                        let styleElem = document.createElement("style");
                        styleElem.setAttribute("id", "dark-mode-style");
                        document.querySelector("head").append(styleElem);
                        this.styleElement = styleElem;
                }
        }

        initButtonElement() {
                if (this.buttonElement == null) {
                        let buttonElement = document.createElement("button").setAttribute("id", "dark-mode-button");
                        styleElement.appendChild(document.getElementsByTagName("body"));
                }
        }
}
