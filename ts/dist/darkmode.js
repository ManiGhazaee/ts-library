"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkMode = void 0;
var DarkMode = /** @class */ (function () {
    function DarkMode(darkModeCssRules, lightModeCssRules, onClickFunction, buttonElement, darkModeState, darkModeButtonClass, lightModeButtonClass, styleElement, localStorageKey) {
        if (onClickFunction === void 0) { onClickFunction = function () {
            _this.toggle();
        }; }
        if (darkModeState === void 0) { darkModeState = "on"; }
        if (darkModeButtonClass === void 0) { darkModeButtonClass = "dark-mode-button"; }
        if (lightModeButtonClass === void 0) { lightModeButtonClass = "light-mode-button"; }
        if (localStorageKey === void 0) { localStorageKey = "darkMode"; }
        var _this = this;
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
    DarkMode.prototype.enableDarkMode = function () {
        this.styleElement.innerHTML = this.darkModeCssRules;
        this.darkModeState = "on";
        localStorage.setItem(this.localStorageKey, "on");
        this.styleButton();
    };
    /**
     * Enables light mode and saves the preference to local storage.
     * @public
     */
    DarkMode.prototype.enableLightMode = function () {
        this.styleElement.innerHTML = this.lightModeCssRules;
        this.darkModeState = "off";
        localStorage.setItem(this.localStorageKey, "off");
        this.styleButton();
    };
    /**
     * Toggles between dark and light mode based on the current state.
     * @public
     */
    DarkMode.prototype.toggle = function () {
        if (this.darkModeState === "on") {
            this.enableLightMode();
        }
        else {
            this.enableDarkMode();
        }
    };
    /**
     * Initializes the class with the user's preference from local storage (if available).
     * @public
     */
    DarkMode.prototype.initFromLocalStorage = function () {
        this.darkModeState = localStorage.getItem(this.localStorageKey) || this.darkModeState;
        if (this.darkModeState === "on") {
            this.enableDarkMode();
        }
        else {
            this.enableLightMode();
        }
    };
    /**
     * @public
     */
    DarkMode.prototype.switchToDarkModeButtonClass = function () {
        this.buttonElement.classList.add(this.darkModeButtonClass);
        if (this.buttonElement.classList.contains(this.lightModeButtonClass)) {
            this.buttonElement.classList.remove(this.lightModeButtonClass);
        }
    };
    /**
     * @public
     */
    DarkMode.prototype.switchToLightModeButtonClass = function () {
        this.buttonElement.classList.add(this.lightModeButtonClass);
        if (this.buttonElement.classList.contains(this.darkModeButtonClass)) {
            this.buttonElement.classList.remove(this.darkModeButtonClass);
        }
    };
    /**
     * @public
     */
    DarkMode.prototype.styleButton = function () {
        if (this.darkModeState === "on") {
            this.switchToDarkModeButtonClass();
        }
        else {
            this.switchToLightModeButtonClass();
        }
    };
    /**
     * @public
     */
    DarkMode.prototype.initStyleElement = function () {
        var _a;
        if (this.styleElement == null) {
            var styleElem = document.createElement("style");
            styleElem.setAttribute("id", "dark-mode-style");
            (_a = document.querySelector("head")) === null || _a === void 0 ? void 0 : _a.append(styleElem);
            this.styleElement = styleElem;
        }
    };
    return DarkMode;
}());
exports.DarkMode = DarkMode;
