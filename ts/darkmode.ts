type DarkModeState = "on" | "off";

export class DarkMode {
        styleElement: HTMLStyleElement | HTMLElement;
        darkModeCssRules: string;
        buttonElement: HTMLElement;
        lightModeCssRules: string;
        darkModeButtonClass: string;
        lightModeButtonClass: string;
        localStorageKey: string;
        darkModeState: DarkModeState;
        onClickFunction: () => void;

        constructor(
                darkModeCssRules: string,
                lightModeCssRules: string,
                onClickFunction: () => void = () => {
                        this.toggle();
                },
                buttonElement?: HTMLElement,
                darkModeState: DarkModeState = "on",
                darkModeButtonClass: string = "dark-mode-button",
                lightModeButtonClass: string = "light-mode-button",
                styleElement?: HTMLStyleElement,
                localStorageKey: string = "darkMode"
        ) {
                this.styleElement = styleElement || document.getElementById("dark-mode-style")!;
                this.initStyleElement();
                this.buttonElement = buttonElement || document.getElementById("dark-mode-button")!;
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
                this.darkModeState = (localStorage.getItem(this.localStorageKey) as "on" | "off") || this.darkModeState;
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
                        document.querySelector("head")?.append(styleElem);
                        this.styleElement = styleElem;
                }
        }
}
