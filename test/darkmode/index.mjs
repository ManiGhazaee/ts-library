import { DarkMode } from "../../darkmode.mjs";

let button = document.getElementById("dark-mode-button");
let styleElem = document.getElementById("dark-mode");

let darkModeCss = `:root { --bg: black; }`;
let lightModeCss = `:root { --bg: white; }`;

let eventListenerFn = () => {
        dm.toggle();

        if (dm.darkModeState === "on") {
                button.style.backgroundColor = "black";
                button.style.color = "white";
        } else {
                button.style.backgroundColor = "white";
                button.style.color = "black";
        }
};

let dm = new DarkMode(styleElem, button, darkModeCss, lightModeCss, "on", eventListenerFn);
